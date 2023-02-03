import React from 'react'
import "./chart.css" 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function Chart() {
    // const data = [
    //     {
    //       name: 'Jan',
    //       "Sales": 4000,
    //     },
    //     {
    //       name: 'Feb',
    //       "Sales": 2000,
    //     },
    //     {
    //       name: 'Mar',
    //       "Sales": 2000,
    //     },
    //     {
    //       name: 'Apr',
    //       "Sales": 2780,
    //     },
    //     {
    //       name: 'May',
    //       "Sales": 1890,
    //     },
    //     {
    //       name: 'Jun',
    //       "Sales": 2390,
    //     },
    //     {
    //       name: 'Jul',
    //       "Sales": 3490,
    //     },
    //     {
    //       name: 'Aug',
    //       "Sales": 1490,
    //     },
    //     {
    //       name: 'Sep',
    //       "Sales": 5090,
    //     },
    //     {
    //       name: 'Oct',
    //       "Sales": 3130,
    //     },
    //     {
    //       name: 'Nov',
    //       "Sales": 1130,
    //     },
    //     {
    //       name: 'Dec',
    //       "Sales": 6130,
    //     },
    //   ];

    const [orderStats, setOrderStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/orders/income");
        res.data.map((item) =>
          setOrderStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Sales": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className='chartContainer'>
        <h3 className='chartTitle'>Income Analytics</h3>
        <ResponsiveContainer className="diagram"  aspect={4/1}>
            <LineChart data={orderStats}>
                <XAxis dataKey="name" width="100%" stroke='#808080' />
                <Line type="monotone" dataKey="Sales"/>
                <Tooltip/>
                <CartesianGrid stroke='#ddd' strokeDasharray={"5 5"}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
