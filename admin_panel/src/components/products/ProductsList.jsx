import React from 'react'
import "./productsList.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function ProductsList() {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product_name', headerName: 'Product', width: 200,
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
          width: 80,
        },
        {
            field: 'net_price',
            headerName: 'Price',
            width: 80,
          },
        {
          field: 'action',
          headerName: 'Action',
          // type: 'number',
          width: 130,
          renderCell: (params) =>{
            return(
              <div className="iconuser">
                <Link class="link-btn2" to={`/product/${params.row.id}`}>
                  <div className="btnUserEdit">
                    <CreateIcon /> 
                  </div>
              </Link>
                <div className="btnUserEdit">
                  <DeleteIcon onClick={()=>handleDelete(params.row.id)}/>
                </div>
              </div>
            )
          }
        },
      ];
      
      const productsRows = [
        { id: 1, img:"https://res.cloudinary.com/dvqbdam2o/image/upload/v1675250097/Swan_Eye_Ring_waxm9g.jpg", product_name: 'Ring1',   category: 'Ring', quantity: 101, net_price: "$" + 101 },
        { id: 2, img:"https://res.cloudinary.com/dvqbdam2o/image/upload/v1675250097/Swan_Eye_Ring_waxm9g.jpg", product_name: 'Ring2',   category: 'Ring', quantity: 102, net_price: "$" + 102 },
        { id: 3, img:"https://res.cloudinary.com/dvqbdam2o/image/upload/v1675250097/Swan_Eye_Ring_waxm9g.jpg", product_name: 'Ring3',   category: 'Ring', quantity: 103, net_price: "$" + 103 },
        { id: 4, img:"https://res.cloudinary.com/dvqbdam2o/image/upload/v1675250097/Swan_Eye_Ring_waxm9g.jpg", product_name: 'Ring4',   category: 'Ring', quantity: 104, net_price: "$" + 104 },
        { id: 5, img:"https://res.cloudinary.com/dvqbdam2o/image/upload/v1675250097/Swan_Eye_Ring_waxm9g.jpg", product_name: 'Ring5',   category: 'Ring', quantity: 105, net_price: "$" + 105 },
        { id: 6, img:"https://res.cloudinary.com/dvqbdam2o/image/upload/v1675250097/Swan_Eye_Ring_waxm9g.jpg", product_name: 'Ring6',   category: 'Ring', quantity: 106, net_price: "$" + 106 },
        { id: 7, img:"https://res.cloudinary.com/dvqbdam2o/image/upload/v1675250097/Swan_Eye_Ring_waxm9g.jpg", product_name: 'Ring7',   category: 'Ring', quantity: 107, net_price: "$" + 107 },
        { id: 8, img:"https://res.cloudinary.com/dvqbdam2o/image/upload/v1675250097/Swan_Eye_Ring_waxm9g.jpg", product_name: 'Ring8',   category: 'Ring', quantity: 108, net_price: "$" + 108 },
        { id: 9, img:"https://res.cloudinary.com/dvqbdam2o/image/upload/v1675250097/Swan_Eye_Ring_waxm9g.jpg", product_name: 'Ring9',   category: 'Ring', quantity: 109, net_price: "$" + 109 },
      ];
      
      const [data, setData] = useState(productsRows)
      
        const handleDelete = (id) =>{
          setData(data.filter((item) => item.id !== id));
        }

  return (
    <div className='productList'>
    <DataGrid
    rows={data}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
  /></div>
  )
}
