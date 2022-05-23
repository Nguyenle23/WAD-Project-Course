import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import React, {useState, useEffect, useMemo} from "react";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import {getStats} from '../../actions/index';

import "./home.css";
export default function Home() {
  const MONTHS = useMemo(() => 
  [
    "Janu",
    "Febru",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sepr",
    "Oct",
    "Nov",
    "Dec",
  ], []);

  const [userStats, serUserStats] = useState([]);

  useEffect(() => {
    try {
      getStats()
      .then((res) => {
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        })
        statsList.map(item => 
          serUserStats(prev => 
            [...prev, 
              {
                name: MONTHS[item._id - 1], 
                "New user": item.total
              }
            ]
          )
        );
      });
    } catch (error) {
      console.log(error);
    }
  },[MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
