import { Link, useLocation, useHistory } from "react-router-dom";
import {useState, useContext} from 'react';

import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { MovieContext } from "../../context/movieContext/MovieContext";
import { updateMovie } from "../../context/movieContext/apiCall";

export default function Product() {
    const location = useLocation();
    const movie = location.movie;
    const [updateMovieObject, setUpdateMovie] = useState(null);
    
    const history = useHistory();

    const { dispatch } = useContext(MovieContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setUpdateMovie({ ...movie, [e.target.name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovie(movie._id, updateMovieObject, dispatch);
        history.push("/movies");
    };

    return (
        <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Movie</h1>
            <Link to="/newproduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            {/* views performance */}
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Views Performance"/>
            </div>

            <div className="productTopRight">
                <div className="productInfoTop">
                    <img className="productInfoImg" src={movie.img} alt={movie.title} />
                    <span className="productName">{movie.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">{movie._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Genre</span>
                        <span className="productInfoValue">{movie.genre}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Year:</span>
                        <span className="productInfoValue">{movie.year}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Limit:</span>
                        <span className="productInfoValue">{movie.limit}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Duration:</span>
                        <span className="productInfoValue">{movie.duration}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Movie Title</label>
                    <input type="text" placeholder={movie.title} name="title" onChange={handleChange}/>
                    <label>Description</label>
                    <input type="text" placeholder={movie.description} name="description" onChange={handleChange}/>
                    <label>Year</label>
                    <input type="text" placeholder={movie.year} name="year" onChange={handleChange}/>
                    <label>Genre</label>
                    <input type="text" placeholder={movie.genre} name="genre" onChange={handleChange}/>
                    <label>Limit</label>
                    <input type="text" placeholder={movie.limit} name="limit" onChange={handleChange}/>
                    <label>Duration</label>
                    <input type="text" placeholder={movie.duration} name="duration" onChange={handleChange}/>
                    <label>Series</label>
                    <select name="isSeries" id="isSeries" onChange={handleChange} >
                        {/* <option value="false">No</option>
                        <option value="true">Yes</option> */}
                        {movie.isSeries === true ? 
                        <>
                            <option value={true}>Yes</option> 
                            <option value={false}>No</option>
                        </>
                        : 
                        <>
                            <option value={false}>No</option>
                            <option value={true}>Yes</option> 
                        </>}
                    </select>
                    <label>Trailer</label>
                    <input type="text" placeholder={movie.trailer} name="trailer" onChange={handleChange}/>
                    <label>Video</label>
                    <input type="text" placeholder={movie.video} name="video" onChange={handleChange}/>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={movie.img} alt="" className="productUploadImg" />
                        <input type="text" id="img" name="img" placeholder={movie.img} onChange={handleChange} />
                    </div>
                    <button className="productButton" onClick={handleSubmit}>Update</button>
                </div>
            </form>
        </div>
        </div>
    );
}
