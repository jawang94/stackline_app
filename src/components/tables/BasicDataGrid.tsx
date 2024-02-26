import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

export default function BasicDataGrid() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
  });

  return (
    <div style={{ background: "var(--color-pure-white)" }}>
      <DataGrid
        {...data}
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          border: 0,
        }}
      />
    </div>
  );
}
