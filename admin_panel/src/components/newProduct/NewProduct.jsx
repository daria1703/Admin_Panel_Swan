import React from 'react'
import "./newProduct.css"
import { Link } from 'react-router-dom';
import { useState } from "react";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {

const [inputs, setInputs] = useState({});
const [cat, setCat] = useState([]);
const [size, setSize] = useState([]);
const dispatch = useDispatch();

const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  const handleSize = (e) => {
    setSize(e.target.value.split(","))
  }

//   useEffect(()=>{
//     getProducts(dispatch);
//   },[dispatch]);

  const handleClick = (e) => {
        const product = { ...inputs, category: cat, size: size };
          addProduct(product, dispatch);
  };


  return (
    <div className="newProductContianer">
      <div className="newProduct">
            <h3 className="editProductTitle">Create New Product</h3>
            <form className="editProdut">
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Product Name</label>
                <input name='product_name' className="createInput" type="text" placeholder='Enter Product Name' onChange={handleChange} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Image</label>
                <input name='img' className="createInput" type="text" placeholder='Enter Image (link)' onChange={handleChange} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Category</label>
                <input name='category' className="createInput" type="text" placeholder='Enter Category' onChange={handleCat} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Short Description</label>
                <input name='short_description' className="createInput" type="text" placeholder='Enter Short Description' onChange={handleChange} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Metter</label>
                <input name='matter' className="createInput" type="text" placeholder='Enter Matter' onChange={handleChange} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Assay</label>
                <input name='assay' className="createInput" type="text" placeholder='Enter Assay' onChange={handleChange} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Size</label>
                <input name='size' className="createInput" type="text" placeholder='Enter Size' onChange={handleSize} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Brand</label>
                <input name='brand' className="createInput" type="text" placeholder='Enter Brand' onChange={handleChange} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Quantity</label>
                <input name='quantity' className="createInput" type="number" placeholder='Enter Quantity' onChange={handleChange} />
            </div>
            <div className='userCreateInput'style={{width:300}}>
                <label className="createLabel">Price</label>
                <input name='net_price' className="createInput" type="number" placeholder='Enter Price' onChange={handleChange} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Weight</label>
                <input name='weight' className="createInput" type="text" placeholder='Enter Weight'onChange={handleChange} />
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Description</label>
                <input name='description' className="createInput" type="text" placeholder='Enter Description' onChange={handleChange} />
            </div>
            <Link to={'/products'} onClick={handleClick} className="creaeUser" style={{marginTop: 16}}>
                <div className="createUserBtn">Create New Product</div>
            </Link>
        </form>
            </div>
    </div>
  )
}
