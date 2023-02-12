import React from 'react'
import "./userList.css"
import { DataGrid} from '@mui/x-data-grid';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {deleteUser, getUsers } from '../../redux/apiCalls';
import { userRequest } from "../../requestMethods";
import { useEffect } from 'react';

export default function UserList() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users)

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDeleted = (id) =>{
    deleteUser(id, dispatch); 
    window.location.
    window.location.reload(true)
  };

  const columns = [
  { field: '_id', headerName: 'ID', width: 230 },
  { field: 'name', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    // type: 'number',
    width: 200,
  },
  
  {
    field: 'action',
    headerName: 'Action',
    // type: 'number',
    width: 100,
    renderCell: (params) =>{
      return(
        <div className="iconuser">
          <Link class="link-btn2" to={`/users/${params.row._id}`}>
            <div className="btnUserEdit">
              <CreateIcon /> 
            </div>
        </Link>
          <div className="btnUserEdit">
            <DeleteIcon onClick={()=>handleDeleted(params.row._id)}/>
          </div>
        </div>
      )
    }
  },
];

// const userRows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'test@gmail.com' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'test@gmail.com' },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'test@gmail.com' },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'test@gmail.com' },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'test@gmail.com' },
//   { id: 6, lastName: 'Melisandre', firstName: null, email: 'test@gmail.com' },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'test@gmail.com' },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'test@gmail.com' },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'test@gmail.com' },
// ];

// const [data, setData] = useState(userRows)

 
  
  return (
    <div className='userList'>
    <DataGrid
    rows={users}
    columns={columns}
    pageSize={10}
    rowsPerPageOptions={[5]}
    // getRowId = {row=>row._id}
    getRowId = {(row: any) =>  row.name + row.lastName + row._id}
    checkboxSelection
  /></div>
  )
}

// import React, { useEffect } from 'react'
//  import "./userList.css"
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser, getUsers } from '../../redux/apiCalls';
// import { userRequest } from "../../requestMethods";

// export default function UserList() {

//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.user.users)

//   useEffect(() => {
//     getUsers(dispatch);
//   }, [dispatch]);


//   const handleDelete = (id) => {
//     deleteUser(id, dispatch);
//   };

//   return (
//     <table className='productList'>
//       <tr>
//         <th className='th1'>User ID</th>
//         <th className='th1'>First Name</th>
//         <th className='th1'>Last Name</th>
//         <th className='th1'>E-mail</th>
//         <th className='th1'>Actions</th>
//       </tr>
//       {
//         users.map(user =>
//           <tr key={user._id} >
//             <th className='th2'>
//               {user._id}
//             </th>
//             <th className='th2'>
//               {user.firstName}
//             </th>
//             <th className='th2'>
//               {user.lastName}
//             </th>
//             <th className='th3'>
//               {user.email}
//             </th>
//             {/* Nazwisko:  {person.lastName + " "} <br />
//                 Email:  {person.email + " "} <br />
//                 Płeć {person.sex + " "} <br />
//                 Hasło: {person.password + " "} <br /> */}
//             {/* Powtórzone hasło: {person.reEnteredPassword + " "} <br /> */}
//             {/* Id:  {person._id}*/}
//             <th className='th1'><div className="iconuser">
//               <Link class="link-btn2" to={`/user/${user._id}`}>
//                 <div className="btnUserEdit">
//                   <CreateIcon />
//                 </div>
//               </Link>
//               <div className="btnUserEdit">
//                 <DeleteIcon onClick={() => handleDelete(user._id)} />
//               </div>
//             </div></th>
//           </tr>
//         )
//       }
//     </table>
//   )

// }

