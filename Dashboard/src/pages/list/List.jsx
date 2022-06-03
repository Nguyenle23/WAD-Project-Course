import { Link, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react"
import "./list.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { ListContext } from "../../context/listContext/ListContext";
import { updateList } from "../../context/listContext/apiCall";

import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCall";

export default function List() {
    const location = useLocation();
    const list = location.list;
    const [updateListObject, setListMovie] = useState(null);
    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value;
        setListMovie({...updateListObject, [e.target.name]: value});
    };

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setListMovie({ ...updateListObject, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateList(list._id, updateListObject, dispatch)
        window.location.href="/lists";
    };

    return (
        <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">List - <i>{list.title || 'List title'}</i></h1>
            <Link to="/newlist">
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
                    <span className="productName">{list.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">List Id:</span>
                        <span className="productInfoValue">{list._id}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Genre</span>
                        <span className="productInfoValue">{list.genre}</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Type:</span>
                        <span className="productInfoValue">{list.type}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>List Title</label>
                    <input type="text" placeholder={list.title} name="title" onChange={handleChange}/>
                    <label>Type</label>
                    {/* <input type="text" placeholder={list.type} name="type" onChange={handleChange}/> */}
                    <select className="form-select" name="type" id="type" onChange={handleChange} >
                        {list.type === 'movies' ? 
                        <>
                            <option value={'movies'}>Movies</option> 
                            <option value={'series'}>Series</option>
                        </>
                        : 
                        <>
                            <option value={'series'}>Series</option>
                            <option value={'movies'}>Movies</option> 
                        </>}
                    </select>
                    <label>Genre: {list.genre}</label>
                    <select name="genre" id="genre" onChange={handleChange}>
                        <option>Genre</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="drama">Drama</option>
                        <option value="thriller">Thriller</option>
                        <option value="random">Random</option>
                    </select>
                    <label>Content</label>
                    <select multiple name="content" onChange={handleSelect} style={{ height: "280px" }}>
                    {movies.map((movie) => (
                        <option key={movie._id} value={movie._id}>{movie.title}</option>
                    ))}
                    </select>
                </div>
            </form>
        </div>
        </div>
    );
}
