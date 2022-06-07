import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useContext, useEffect } from "react";
import {MovieContext} from '../../context/movieContext/MovieContext'
import {getMovies, deleteMovie} from "../../context/movieContext/apiCall"

export default function ProductList() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "movie",
      headerName: "Movie",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 180 },
    { field: "year", headerName: "Year", width: 102 },
    { field: "limit", headerName: "Limit", width: 108 },
    { field: "duration", headerName: "Duration", width: 130 },
    { field: "isSeries", headerName: "isSeries", width: 125 },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/product/" + params.row._id, movie: params.row }} >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={11}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
