import React, { useEffect } from 'react'
import "./productsList.css"
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/apiCalls';


export default function ProductsList() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);


  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  return (
    <table className='productList'>
      <tr>
        <th className='th1'>Product ID</th>
        <th className='th1'>Product Name</th>
        <th className='th1'>Price</th>
        <th className='th1'>Quantity</th>
        <th className='th1'>Actions</th>
      </tr>
      {
        products.map(product =>
          <tr key={product._id} >
            <th className='th2'>
              {product._id}
            </th>
            <th className='th3'>
              <span><img className="productListImg" src={product.img} alt={products.product_name} /></span>{product.product_name}
            </th>
            <th className='th2'>
              ${product.net_price}
            </th>
            <th className='th2'>
              {product.quantity}
            </th>
            <th className='th1'><div className="iconuser">
              <Link class="link-btn2" to={`/product/${product._id}`}>
                <div className="btnUserEdit">
                  <CreateIcon />
                </div>
              </Link>
              <div className="btnUserEdit">
                <DeleteIcon onClick={() => handleDelete(product._id)} />
              </div>
            </div></th>
          </tr>
        )
      }
    </table>
  )

}

