import React from 'react'
import "./widgetlg.css"
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import {format} from "timeago.js"

export default function WidgetSm() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
      const getOrders = async () => {
        try {
          const res = await userRequest.get("orders/?new=true");
          setOrders(res.data);
        } catch {}
      };
      getOrders();
    }, []);

    const Button = ({type}) =>{
        return <a className='lgbuttona' href=""><div className={"lgButton " + type}>{type}</div> </a>
    }

  return (
    <div className="wigdetLg">
        <h3 className="widgetLgTitle">Last Orders</h3>
        <table className='widgetLgTbale'>
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Costumer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            {orders.map((order) => (
            <tr className="widgetLgTr" key={order._id}>
                <td className='widgetLgUser'>
                    <span className='userNameLg'>{order.userId}</span>
                </td>
                <td className='widgetLgData'>
                    <span className='lgData'>{format(order.createdAt)}</span>
                </td>
                <td className='widgetLgAmount'>
                    <span className='lgAmount'>${order.amount}</span>
                </td>
                <td className='widgetLgStatus'>
                    <Button type={order.status}/>
                </td>
            </tr>
            
            ))}
        </table>
    </div>
  )
}