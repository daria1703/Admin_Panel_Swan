import React from 'react'
import "./widgetlg.css"

export default function WidgetSm() {

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
            <tr className="widgetLgTr">
                <td className='widgetLgUser'>
                    <span className='userNameLg'>User Name</span>
                </td>
                <td className='widgetLgData'>
                    <span className='lgData'>21 January 2023</span>
                </td>
                <td className='widgetLgAmount'>
                    <span className='lgAmount'>$200</span>
                </td>
                <td className='widgetLgStatus'>
                    <Button type="Approved"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className='widgetLgUser'>
                    <span className='userNameLg'>User Name</span>
                </td>
                <td className='widgetLgData'>
                    <span className='lgData'>21 January 2023</span>
                </td>
                <td className='widgetLgAmount'>
                    <span className='lgAmount'>$200</span>
                </td>
                <td className='widgetLgStatus'>
                    <Button type="Declined"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className='widgetLgUser'>
                    <span className='userNameLg'>User Name</span>
                </td>
                <td className='widgetLgData'>
                    <span className='lgData'>21 January 2023</span>
                </td>
                <td className='widgetLgAmount'>
                    <span className='lgAmount'>$200</span>
                </td>
                <td className='widgetLgStatus'>
                    <Button type="Pending"/>
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className='widgetLgUser'>
                    <span className='userNameLg'>User Name</span>
                </td>
                <td className='widgetLgData'>
                    <span className='lgData'>21 January 2023</span>
                </td>
                <td className='widgetLgAmount'>
                    <span className='lgAmount'>$200</span>
                </td>
                <td className='widgetLgStatus'>
                    <Button type="Approved"/>
                </td>
            </tr>
        </table>
    </div>
  )
}