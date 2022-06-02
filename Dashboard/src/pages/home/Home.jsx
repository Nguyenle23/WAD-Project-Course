import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import React, { useState, useEffect, useMemo } from "react";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { getStat } from '../../actions/index';

import "./home.css";
export default function Home() {
  const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],[]);
  const [userStat, setUserStat] = useState([]);

  useEffect(() => {
    try {
      getStat()
        .then((res) => {
          const statsList = res.data.sort(function (a, b) {
            return a._id - b._id;
          })
          statsList.map(item => 
            setUserStat(prev => 
              [...prev, {name: MONTHS[item._id - 1], "New User": item.total}]
            )
          );
      });
    } catch (err) {
      console.log(err);
    }
  }, [MONTHS]);
  
  console.log(userStat);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStat} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
