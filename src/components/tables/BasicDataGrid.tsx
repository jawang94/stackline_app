import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function BasicDataGrid() {
  const { data } = useDemoData({
    dataSet: "Employee",
    rowLength: 100,
    visibleFields: VISIBLE_FIELDS,
  });

  return (
    <div style={{ background: "var(--color-pure-white)" }}>
      <DataGrid
        {...data}
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
