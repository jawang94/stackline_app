import { fetchMockItemData } from "_redux/slices/itemSlice";
import { RootState } from "_redux/store";
import BasicLineChart from "components/charts/BasicLineChart";
import Header from "components/header/Header";
import Item from "components/item/Item";
import BasicDataGrid from "components/tables/BasicDataGrid";
import landingPageStyles from "css/pages/landing/LandingPage.module.css";
import dayjs from "dayjs";
import { useAppDispatch } from "hooks/useDispatch";
import { Suspense, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Maybe } from "types/UtilityTypes";

type ChartDataReturnType = {
  maxSum: number;
  series: Array<Array<number>>;
  xAxis: Array<string>;
};

const getChartData = (data: any): Maybe<ChartDataReturnType> => {
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

export default function LandingPage() {
  const dispatch = useAppDispatch();
  const { data, _, error } = useSelector((state: RootState) => state.item);
  const chartData = useMemo(() => getChartData(data), [data]);

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
          <Suspense fallback={<div>Loading...</div>}>
            <BasicDataGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
