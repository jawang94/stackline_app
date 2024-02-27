import { fetchMockItemData } from "_redux/slices/itemSlice";
import { RootState } from "_redux/store";
import BasicLineChart, {
  BasicLineChartOptions,
} from "components/charts/BasicLineChart";
import Header from "components/header/Header";
import Item from "components/item/Item";
import BasicDataGrid, {
  BasicDataGridOptions,
} from "components/tables/BasicDataGrid";
import landingPageStyles from "css/pages/landing/LandingPage.module.css";
import dayjs from "dayjs";
import { useAppDispatch } from "hooks/useDispatch";
import { Suspense, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Maybe } from "types/UtilityTypes";
import camelCaseToWords from "utils/camelCaseToWords";

import { GridColDef, GridRowsProp } from "@mui/x-data-grid";

// Data TS types should be generated from server schema
const getChartData = (data: any): Maybe<BasicLineChartOptions> => {
  if (!data.length) {
    return null;
  }

  // Might make sense to put this data on the Redux store
  const formattedSaleData = data[0]?.sales.reduce((agg: any, sale: any) => {
    const monthAbbreviation = dayjs(sale.weekEnding)
      .format("MMM")
      .toUpperCase();

    if (!agg[monthAbbreviation]) {
      agg[monthAbbreviation] = {
        retailSalesSum: 0,
        wholesaleSalesSum: 0,
      };
    }

    agg[monthAbbreviation].retailSalesSum += sale.retailSales;
    agg[monthAbbreviation].wholesaleSalesSum += sale.wholesaleSales;

    return agg;
  }, {});

  const _values = Object.values(formattedSaleData);
  const retailSalesSums = _values.map((x: any) => x.retailSalesSum);
  const wholesaleSalesSums = _values.map((x: any) => x.wholesaleSalesSum);
  const maxSum = Math.max(...retailSalesSums, ...wholesaleSalesSums);
  const xAxis = Object.keys(formattedSaleData);

  return {
    maxSum,
    series: [retailSalesSums, wholesaleSalesSums],
    xAxis,
  };
};

// Data TS types should be generated from server schema
const getTableData = (data: any): Maybe<BasicDataGridOptions> => {
  if (!data.length) {
    return null;
  }
  const columns: Array<GridColDef> = Object.keys(data[0].sales[0]).map(
    (keyName: string) => ({
      field: keyName,
      flex: 1,
      headerName: camelCaseToWords(keyName, true),
      minWidth: 150,
      valueFormatter: (params) =>
        ["retailSales", "wholesaleSales", "retailerMargin"].includes(
          params.field,
        )
          ? new Intl.NumberFormat("en-US", {
              currency: "USD",
              maximumFractionDigits: 2,
              minimumFractionDigits: 0,
              style: "currency",
            }).format(params.value)
          : params.value,
    }),
  );
  const rows: Array<GridRowsProp> = data[0].sales.map(
    (sale: any, idx: number) => ({
      id: idx,
      ...sale,
    }),
  );

  return { columns, rows };
};

export default function LandingPage() {
  const dispatch = useAppDispatch();
  const { data, _, error } = useSelector((state: RootState) => state.item);
  const chartData = useMemo(() => getChartData(data), [data]);
  const tableData = useMemo(() => getTableData(data), [data]);

  useEffect(() => {
    dispatch(fetchMockItemData());
  }, [dispatch]);

  return (
    <div className={landingPageStyles.landingPageContainer}>
      <Header />
      <div className={landingPageStyles.landingPageComponentsWrapper}>
        <div className={landingPageStyles.landingPageItem}>
          <Item />
        </div>
        <div className={landingPageStyles.landingPageDataComponents}>
          {error ? <div>{error}</div> : null}
          {chartData && (
            <Suspense fallback={<div>Loading...</div>}>
              <BasicLineChart
                series={chartData.series}
                maxSum={chartData.maxSum}
                xAxis={chartData.xAxis}
              />
            </Suspense>
          )}
          {tableData && (
            <Suspense fallback={<div>Loading...</div>}>
              <BasicDataGrid {...tableData} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
