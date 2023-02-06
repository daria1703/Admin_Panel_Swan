import React from 'react'
import "./product.css"
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function Product() {

    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId)
    );

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

  const handleClick = (e) => {
    
    const product = { ...inputs, category: cat, size: size};
    updateProduct(productId, product, dispatch);
    // e.preventDefault();
    // window.location.reload(false)
};

  return (
    <div className='product'>
      <div className="titleContainer">
        <h1 className="productTitle">
            Product Information
        </h1>
        <Link to={`/newProduct`} className="creaeUser" >
            <div className="createUserBtn">Create New Product</div>
        </Link>
        </div>
        <div className="productContainer">
            <div className="productShow">
                <div className="productShowTop">
                    <span><img src={product.img} alt="product" className='productEditImg'/></span>
                    <div className="productatrubutelist">
                      <span className="product_test"><strong>Product Name: </strong>{product.product_name}</span>
                      <span className='product_test'><strong>Category: </strong>{product.category?.map((s) => (<span style={{textTransform:"capitalize"}} key={s}>&nbsp;{s},</span>))}</span>
                      <span className="product_test"><strong>Short description: </strong>{product.short_description}</span>
                      <span className="product_test"><strong>Matter: </strong>{product.matter}</span>
                      <span className="product_test"><strong>Assay: </strong>{product.assay}</span>
                      <span className="product_test"><strong>Size: </strong>{product.size?.map((s) => (<span  key={s}>&nbsp;{s},</span>
                ))}</span>
                      <span className="product_test"><strong>Brand: </strong>{product.brand}</span>
                      <span className="product_test"><strong>Quantity: </strong>{product.quantity}</span>
                      <span className="product_test"><strong>Price: </strong>${product.net_price}</span>
                      <span className="product_test"><strong>Weight: </strong>{product.weight} grams</span>
                      <span className="product_test"><strong>Description: </strong>{product.description}</span>
                    </div>
                </div>
            </div>
            <div className="newProduct">
            <h3 className="editProductTitle">Edit Product</h3>
            <form className="editProdut">
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Product Name</label>
                <input name='product_name' className="createInput" type="text" placeholder={product.product_name} onChange={handleChange}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Image</label>
                <input name='img' className="createInput" type="text" placeholder={product.img} onChange={handleChange}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Category</label>
                <input name='category' className="createInput" type="text" placeholder={product.category} onChange={handleCat}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Short Description</label>
                <input name='short_description' className="createInput" type="text" placeholder={product.short_description} onChange={handleChange}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Metter</label>
                <input name='matter' className="createInput" type="text" placeholder={product.matter} onChange={handleChange}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Assay</label>
                <input name='assay' className="createInput" type="text" placeholder={product.assay} onChange={handleChange}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Size</label>
                <input name='size' className="createInput" type="number" placeholder={product.size} onChange={handleSize}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Brand</label>
                <input name='brand' className="createInput" type="text" placeholder={product.brand} onChange={handleChange}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Quantity</label>
                <input name='quantity' className="createInput" type="number" placeholder={product.quantity} onChange={handleChange}/>
            </div>
            <div className='userCreateInput'style={{width:300}}>
                <label className="createLabel">Price</label>
                <input name='net_price' className="createInput" type="number" placeholder={product.net_price} onChange={handleChange}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Weight</label>
                <input name='weight' className="createInput" type="text" placeholder={product.weight} onChange={handleChange}/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Description</label>
                <input name='description' className="createInput" type="text" placeholder={product.description} onChange={handleChange}/>
            </div>
            <Link to={'/products'}  onClick={handleClick} className="creaeUser" style={{marginTop: 16}}>
                <div className="createUserBtn">Edit Product</div>
            </Link>
        </form>
            </div>
        </div>
    </div>
  )
}
