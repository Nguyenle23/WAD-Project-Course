import { Link, useLocation } from "react-router-dom";
import "./list.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"

export default function List() {
    const location = useLocation();
    const list = location.list;

    return (
        <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">List</h1>
            <Link to="/newlist">
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
                    <span className="productName">{list.title}</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
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
                    <input type="text" placeholder={list.title}/>
                    <label>Type</label>
                    <input type="text" placeholder={list.type}/>
                    <label>Genre</label>
                    <input type="text" placeholder={list.genre}/>
                </div>
                <div className="productFormRight">
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
        </div>
    );
}
