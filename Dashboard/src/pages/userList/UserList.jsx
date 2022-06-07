import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import {UserContext} from '../../context/userContext/UserContext'
import {getUsers, deleteUsers} from "../../context/userContext/apiCall"

export default function UserList() {
  const { users , dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUsers(id, dispatch);
  }
  
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    // {
    //   field: "user",
    //   headerName: "Avatar",
    //   width: 120,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avatar || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"} alt="" />
    //         {params.row.username}
    //       </div>
    //     );
    //   },
    // },
    { field: "fullname", headerName: "Full name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "gender", headerName: "Gender", width: 120 },
    { field: "beginDate", headerName: "Begin Date", width: 150 },
    { field: "expiredDate", headerName: "Expired Date", width: 150 },
    // {
    //   field: "isActive",
    //   headerName: "Is Active",
    //   width: 140,
    // },
    {
      field: "price",
      headerName: "Total price",
      width: 140,
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname: "/user/" + params.row._id, users: params.row}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={11}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
