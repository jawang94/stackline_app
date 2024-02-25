import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart() {
  return (
    <div style={{ background: "var(--color-pure-white)" }}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        height={800}
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          boxShadow: 2,
        }}
      />
    </div>
  );
}
