import React from 'react'
import "./chart.css" 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {
    const data = [
        {
          name: 'Jan',
          "Sales": 4000,
        },
        {
          name: 'Feb',
          "Sales": 2000,
        },
        {
          name: 'Mar',
          "Sales": 2000,
        },
        {
          name: 'Apr',
          "Sales": 2780,
        },
        {
          name: 'May',
          "Sales": 1890,
        },
        {
          name: 'Jun',
          "Sales": 2390,
        },
        {
          name: 'Jul',
          "Sales": 3490,
        },
        {
          name: 'Aug',
          "Sales": 1490,
        },
        {
          name: 'Sep',
          "Sales": 5090,
        },
        {
          name: 'Oct',
          "Sales": 3130,
        },
        {
          name: 'Nov',
          "Sales": 1130,
        },
        {
          name: 'Dec',
          "Sales": 6130,
        },
      ];
  return (
    <div className='chartContainer'>
        <h3 className='chartTitle'>Income Analytics</h3>
        <ResponsiveContainer className="diagram"  aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" width="100%" stroke='#808080' />
                <Line type="monotone" dataKey="Sales"/>
                <Tooltip/>
                <CartesianGrid stroke='#ddd' strokeDasharray={"5 5"}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
