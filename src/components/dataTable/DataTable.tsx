import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type TDataTableProps = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = ({ columns, rows, slug }: TDataTableProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: number) => {
      return fetch(`http://localhost:8800/api/${slug}/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      // update the table data
      queryClient.invalidateQueries({
        queryKey: [`all${slug}`],
      });
    },
  });

  const handleDelete = (id: number) => {
    // console.log(`${id} has been deleted!`);
    mutation.mutate(id);
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        rows={rows}
        columns={[...columns, actionColumn]}
        className="dataGrid"
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};
export default DataTable;
