import { fetchMockItemData } from "_redux/slices/itemSlice";
import { RootState } from "_redux/store";
import dayjs from "dayjs";
import { useAppDispatch } from "hooks/useDispatch";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.item,
  );

  // This is a cheap operation, thus prefer to keep it in-line vs on the global store
  const formattedSaleData = useMemo(
    () =>
      data[0]?.sales.reduce((agg: any, sale: any) => {
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
      }, {}),
    [data],
  );

  useEffect(() => {
    dispatch(fetchMockItemData());
  }, [dispatch]);

  if (loading || !formattedSaleData) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const retailSalesSums = Object.values(formattedSaleData).map(
    (x: any) => x.retailSalesSum,
  );
  const wholesaleSalesSums = Object.values(formattedSaleData).map(
    (x: any) => x.wholesaleSalesSum,
  );
  const maxSum = Math.max(...[...retailSalesSums, ...wholesaleSalesSums]);

  return (
    <div
      style={{
        background: "var(--color-pure-white)",
        boxShadow: "0",
      }}
    >
      <LineChart
        title="Retail Sales"
        series={[
          {
            color: "grey",
            curve: "natural",
            data: retailSalesSums,
            showMark: false,
          },
          {
            curve: "natural",
            data: wholesaleSalesSums,
            showMark: false,
          },
        ]}
        xAxis={[
          {
            data: Object.keys(formattedSaleData),
            scaleType: "point",
            tickLabelStyle: {
              fontSize: 20,
            },
          },
        ]}
        yAxis={[{ max: maxSum * 2, min: 0 }]}
        leftAxis={{
          labelStyle: { fontSize: 0 },
        }}
        height={800}
        sx={{
          // leftAxis Line Styles
          "& .MuiChartsAxis-left .MuiChartsAxis-line": {
            strokeWidth: 0,
          },
          "& .MuiLineElement-root": {
            strokeWidth: 5,
          },
          boxShadow: 2,
          fontFamily: "Product Sans",
        }}
      />
    </div>
  );
}
