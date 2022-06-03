import { Link, useLocation } from "react-router-dom";
import {useState, useContext} from 'react';

import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { MovieContext } from "../../context/movieContext/MovieContext";
// import { updateMovie } from "../../context/movieContext/apiCall";
import { upgradeMovie } from "../../actions/index";

export default function Product() {
    const location = useLocation();
    const movie = location.movie;
    const [updateMovieObject, setUpdateMovie] = useState(null);
    const { dispatch } = useContext(MovieContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setUpdateMovie({...updateMovieObject, [e.target.name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        upgradeMovie(movie._id, updateMovieObject, dispatch)
            // .then((res) => {
            //     console.log(res)
            // //     dispatch({
            // //         type: "UPDATE_USER_SUCCESS",
            // //         payload: dataUser,
            // //     });
        // })
        window.location.href="/movies";
    };

    return (
        <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Movie</h1>
            <Link to="/newproduct">
                <button className="productAddBtn">Create</button>
            </Link>
            <button className="productBtn" onClick={handleSubmit}>Update</button>
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
                        <span className="productInfoKey">Id:</span>
                        <span className="productInfoValue">{movie._id}</span>
                    </div>
                    <div className="product-infoItem">
                        <span className="productInfoKey">Genres:</span>
                        <span className="productInfoValue">{movie.genre}</span>
                    </div>
                    <div className="product-infoItem">
                        <span className="productInfoKey">Year:</span>
                        <span className="productInfoValue">{movie.year}</span>
                    </div>
                    <div className="product-infoItem">
                        <span className="productInfoKey">Limit:</span>
                        <span className="productInfoValue">+{movie.limit}</span>
                    </div>
                    <div className="product-infoItem">
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
                    <input className="form-input" type="text" placeholder={movie.title} name="title" onChange={handleChange}/>
                    <label>Description</label>
                    <input className="form-input" type="text" placeholder={movie.description} name="description" onChange={handleChange}/>
                    <label>Year</label>
                    <input className="form-input" type="text" placeholder={movie.year} name="year" onChange={handleChange}/>
                    <label>Genre</label>
                    <input className="form-input" type="text" placeholder={movie.genre} name="genre" onChange={handleChange}/>
                    <label>Limit</label>
                    <input className="form-input" type="text" placeholder={movie.limit} name="limit" onChange={handleChange}/>
                    <label>Duration</label>
                    <input className="form-input" type="text" placeholder={movie.duration} name="duration" onChange={handleChange}/>
                    <label>Series</label>
                    <select className="form-select" name="isSeries" id="isSeries" onChange={handleChange} >
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
                    <input className="form-input" type="text" placeholder={movie.trailer} name="trailer" onChange={handleChange}/>
                    <label>Video</label>
                    <input className="form-input" type="text" placeholder={movie.video} name="video" onChange={handleChange}/>
                </div>
                <div className="product-img-container">
                    <div className="product-imgs">
                        <span className="product-img-title">Cover image</span>
                        <img src={movie.img} alt="" className="product-img" />
                        <input className="product-img-input" type="text" id="img" name="img" placeholder={movie.img} onChange={handleChange} />
                    </div>
                    <div className="product-imgs">
                        <span className="product-img-title">Cover text</span>
                        <img src={movie.imgTitle} alt="" className="product-img" />
                        <input className="product-img-input" type="text" id="imgTitle" name="imgTitle" placeholder={movie.imgTitle} onChange={handleChange} />
                    </div>
                    <div className="product-imgs">
                        <span className="product-img-title">Thumbnail</span>
                        <img src={movie.thumbnail} alt="" className="product-img" />
                        <input className="product-img-input" type="text" id="thumbnail" name="thumbnail" placeholder={movie.thumbnail} onChange={handleChange} />
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}
