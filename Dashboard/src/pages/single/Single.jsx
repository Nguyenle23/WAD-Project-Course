import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

export const Single = () => {
  return (
    
    <div className="single">
        <Sidebar/>
        <div className='single_container'>
            <Navbar/>
            <div className='single_top'>
              <div className='single_top_left'>
                <div className='edit_button'>Edit</div>
                <h1 className="title">Information</h1>
                <div className="items">
                  <img src="https://i.pinimg.com/564x/9e/46/c7/9e46c7ebe515311bf97b0d72143ae41a.jpg" alt="Avatar" className="item_img" />
                  <div className="details">
                    <h1 className="detail_name">Le Huu Sy</h1>
                    <div className="detail_item">
                      <span className="detail_Key">Email:</span>
                      <span className="detail_Value">ted1804.1@gmail.com</span>
                    </div>
                    <div className="detail_item">
                      <span className="detail_Key">Phone:</span>
                      <span className="detail_Value">0123456789</span>
                    </div>
                    <div className="detail_item">
                      <span className="detail_Key">Address:</span>
                      <span className="detail_Value">IU university</span>
                    </div>
                    <div className="detail_item">
                      <span className="detail_Key">Country:</span>
                      <span className="detail_Value">Vietnam</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='single_top_right'>
                <Chart aspect={3/1} title ="User Spend (last year)"/>
              </div>
            </div>
            <div className='single_bottom'>
              <h1 className="single_bottom_title">Last Access</h1>
              <Table />
            </div>
        </div>
        
    </div>
  )
}

export default Single