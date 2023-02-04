import React, { useEffect } from 'react'
import "./productsList.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/apiCalls';


export default function ProductsList() {

    const columns = [
        { field: '_id', headerName: 'ID', width: 230 },
        { field: 'product_name', headerName: 'Product', width: 350,
            renderCell: (params) => {
                return(
                    <div className="productListuser">
                        <img className="productListImg" src={params.row.img} alt="products" />
                        {params.row.product_name}
                    </div>
                )
            }
        },
        {
          field: 'category',
          headerName: 'Category',
          // type: 'number',
          width: 130,
        },
        {
          field: 'quantity',
          headerName: 'Quantity',
          type: Number,
          width: 130,
        },
        {
            field: 'net_price',
            headerName: 'Price',
            type: Number,
            width: 130,
          },
        {
          field: 'action',
          headerName: 'Action',
          // type: 'number',
          width: 130,
          renderCell: (params) =>{
            return(
              <div className="iconuser">
                <Link class="link-btn2" to={`/product/${params.row._id}`}>
                  <div className="btnUserEdit">
                    <CreateIcon /> 
                  </div>
              </Link>
                <div className="btnUserEdit">
                  <DeleteIcon onClick={()=>handleDelete(params.row._id)}/>
                </div>
              </div>
            )
          }
        },
      ];
      
      const dispatch = useDispatch();
      const products = useSelector((state) => state.product.products)
    
      useEffect(()=>{
        getProducts(dispatch);
      },[dispatch]);
      
      
      const handleDelete = (id) => {
        deleteProduct(id, dispatch);
      };

  return (
    <div className='productList'>
    <DataGrid
    rows={products}
    columns={columns}
    pageSize={10}
    getRowId={(row) => row._id }
    rowsPerPageOptions={[5]}
    checkboxSelection
  /></div>
  )
}

