import { LineSeriesType } from "@mui/x-charts";
import { LineChart } from "@mui/x-charts/LineChart";

export type BasicLineChartOptions = {
  maxSum: number;
  series: Array<Array<number>>;
  xAxis: Array<string | number>;
};

// Hack to rotate line chart colors for multi-series datasets
const COLORS = [
  "lightblue",
  "lightgray",
  "yellow",
  "blue",
  "lightgreen",
  "orange",
  "darkgrey",
  "grey",
  "black",
];

export default function BasicLineChart({
  series,
  maxSum,
  xAxis,
}: BasicLineChartOptions) {
  const blarg: Array<LineSeriesType> = series.map((data, idx) => ({
    color: COLORS[idx],
    curve: "natural",
    data,
    showMark: false,
    type: "line",
  }));

  return (
    <div
      style={{
        background: "var(--color-pure-white)",
        boxShadow: "0",
        height: "60vh",
        maxWidth: "100%",
      }}
    >
      <LineChart
        series={blarg}
        xAxis={[
          {
            data: xAxis,
            scaleType: "point",
            tickLabelStyle: {
              fontSize: 20,
              transformOrigin: "0 10px",
            },
          },
        ]}
        yAxis={[{ max: maxSum * 2, min: 0 }]}
        leftAxis={{
          labelStyle: { fontSize: 0 },
        }}
        sx={{
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickContainer": {
            fill: "var(--color-cool-grey)",
          },
          "& .MuiChartsAxis-left .MuiChartsAxis-line": {
            strokeWidth: 0,
          },
          "& .MuiLineElement-root": {
            strokeWidth: 5,
          },
          boxShadow: 2,
        }}
      />
    </div>
  );
}
