import React from 'react'
import "./widgetlg.css"
import { useEffect, useState } from "react";
import {format} from "timeago.js"
import { DataGrid} from '@mui/x-data-grid';

export default function WidgetSm() {

  const stripe = require('stripe')('sk_test_51MKs1lAJd6bDnz1SeM1wIXvZKIIxzKEr95t3W3yh2tZEfidJaGRS5t73YKL10sxYx4doBKSrvEG1hFD2KOYzfbQm00nZwXChTe');

 
    const [paymentList, setPaymentList] = useState([]);
  
    const columns = [
      { field: 'id', headerName: 'ID', width: 250 },
      { field: 'amount', headerName: 'Amount (USD)', width: 130, type: 'number' },
      {
        field: 'date',
        headerName: 'Date Of Payment',
        width: 200,
      },
      {
        field: 'status',
        headerName: 'Status Payment',
        width: 200,
      },
      
      
    ];
  

    useEffect(() => {
      const retrievePaymentData = async () => {
        const payments = await stripe.charges.list({ limit: 100 });
        setPaymentList(
          payments.data.map((payment: any) => ({
            ...payment,
            date: format(payment.created * 1000),
            status: payment.status,
            name: payment.billing_details.name,
            amount: payment.amount / 100
          }))
        );
      };
  
      retrievePaymentData();
    }, []);

  return (
    <div className='userList'>
    <DataGrid
    rows={paymentList}
    columns={columns}
    pageSize={7}
    rowsPerPageOptions={[5]}
    getRowId = {(row: any) =>  row.name + row.id}
    checkboxSelection
  /></div>
  )
}