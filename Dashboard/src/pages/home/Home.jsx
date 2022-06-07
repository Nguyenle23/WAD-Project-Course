
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import Feature from "../../components/feature/Feature";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

export const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              <Widget senerio="user" />
              <Widget senerio="order" />
              <Widget senerio="earning" />
              <Widget senerio="balance" />
            </div>
            <div className="charts">
              <Feature />
              <Chart title="Total amount of last year" aspect={2/1} />
            </div>
            <div className="listContainer">
              <div className="listContainer_title">Latest Transaction</div>
              <Table />
            </div>
        </div>

    </div>
  )
}

export default Home