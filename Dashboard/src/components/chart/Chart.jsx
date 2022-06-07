import './chart.scss'
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'January', amount: 900},
  { name: 'February', amount: 1200},
  { name: 'March', amount: 198},
  { name: 'April', amount: 400},
  { name: 'May', amount: 120},
  { name: 'June', amount: 1598},
  { name: 'July', amount: 140},
];


function Chart({aspect, title}) {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
       <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" className='color' />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart