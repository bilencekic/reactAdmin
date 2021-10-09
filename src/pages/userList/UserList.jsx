import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) =>{
      setData(data.filter(row => row.id !== id));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "User",
      headerName: "User",
      width: 190,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 190 },
    {
      field: "status",
      headerName: "Status",
      width: 190,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 160,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
