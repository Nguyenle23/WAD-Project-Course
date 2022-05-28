import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';

import "./newProduct.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { createMovie } from "../../context/movieContext/apiCall";

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const history = useHistory();

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    history.push("/movies");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image Cover</label>
          <input type="text" id="img" name="img" onChange={handleChange} placeholder="Url image cover"/>
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="text" id="imgTitle" name="imgTitle" onChange={handleChange} placeholder="Url image title" />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="text" id="thumbnail" name="thumbnail" onChange={handleChange} placeholder="Url thumbnail"/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" name="title" onChange={handleChange}  placeholder="Movie title"  />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" name="description" onChange={handleChange}  placeholder="Movie description"  />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" name="genre" onChange={handleChange} placeholder=" Moives genre" />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" name="year" onChange={handleChange}  placeholder="Publish year"  />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" name="limit" onChange={handleChange}  placeholder="Age limit" />
        </div>
        <div className="addProductItem">
          <label>Is Serires ?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="text" name="trailer" onChange={handleChange}  placeholder="Url Image"/>
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="text" name="video" onChange={handleChange} placeholder="Url video" />
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
