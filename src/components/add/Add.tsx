import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type TAddProps = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// const apiUrl = import.meta.env.REACT_APP_API_URL;


const Add = ({ slug, columns, setOpen }: TAddProps) => {
  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`${apiUrl}/${slug}s`, {
  //       method: "post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 555,
  //         img: "",
  //         firstName: "Safeya",
  //         lastName: "Yasien",
  //         email: "sarah.johnson@example.com",
  //         phone: "125 85 999",
  //         createdAt: "28.12.2024",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     // update the table data
  //     queryClient.invalidateQueries({
  //       queryKey: [`all${slug}s`],
  //     });
  //   },
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // mutation.mutate();

    setOpen(false);
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
