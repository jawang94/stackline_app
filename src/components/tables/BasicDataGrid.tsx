import { DataGrid } from "@mui/x-data-grid";

export type BasicDataGridOptions = {
  columns: any;
  rows: any;
};

export default function BasicDataGrid({ columns, rows }: BasicDataGridOptions) {
  return (
    <div style={{ background: "var(--color-pure-white)" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "& .MuiDataGrid-cellContent": {
            color: "var(--color-cool-grey)",
          },
          border: 0,
          padding: 2,
        }}
      />
    </div>
  );
}
