import React from 'react'
import "./userList.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {

  const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    // type: 'number',
    width: 130,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Action',
    // type: 'number',
    width: 130,
    renderCell: (params) =>{
      return(
        <div className="iconuser">
          <Link class="link-btn2" to={`/user/${params.row.id}`}>
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

const userRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'test@gmail.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'test@gmail.com' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'test@gmail.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'test@gmail.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'test@gmail.com' },
  { id: 6, lastName: 'Melisandre', firstName: null, email: 'test@gmail.com' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'test@gmail.com' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'test@gmail.com' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'test@gmail.com' },
];

const [data, setData] = useState(userRows)

  const handleDelete = (id) =>{
    setData(data.filter((item) => item.id !== id));
  }
  
  return (
    <div className='userList'>
    <DataGrid
    rows={data}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
  /></div>
  )
}
