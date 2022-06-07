import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

export const List = () => {
  return (
    <div className="list">
        <Sidebar />
        <div className="list_container">
            <Navbar />
            <div className="list_content">
                <div className="list_content_title">Tracking table</div>
                <Datatable />
            </div>
        </div>
    </div>
  )
}

export default List