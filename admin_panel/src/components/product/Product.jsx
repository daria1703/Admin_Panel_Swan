import React from 'react'
import "./product.css"
import productimg from '../../img/Swan _Eye _Ring.jpg'
import { Link } from 'react-router-dom';

export default function Product() {
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
                    <span><img src={productimg} alt="product" className='productEditImg'/></span>
                    <div className="productatrubutelist">
                      <span className="product_test"><strong>Product Name: </strong>Name</span>
                      <span className='product_test'><strong>Category: </strong>Category</span>
                      <span className="product_test"><strong>Short description: </strong>Short description of product</span>
                      <span className="product_test"><strong>Matter: </strong>Golg</span>
                      <span className="product_test"><strong>Assay: </strong>925</span>
                      <span className="product_test"><strong>Size: </strong>2,3,4</span>
                      <span className="product_test"><strong>Brand: </strong>Say YES</span>
                      <span className="product_test"><strong>Quantity: </strong>100</span>
                      <span className="product_test"><strong>Price: </strong>$100</span>
                      <span className="product_test"><strong>Weight: </strong>5 grams</span>
                      <span className="product_test"><strong>Description: </strong>Long description of product Long description of product Long description of product Long description of product</span>
                    </div>
                </div>
            </div>
            <div className="newProduct">
            <h3 className="editProductTitle">Edit Product</h3>
            <form className="editProdut">
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Product Name</label>
                <input className="createInput" type="text" placeholder='Enter Product Name'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Image</label>
                <input className="createInput" type="text" placeholder='Enter Image (link)'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Category</label>
                <input className="createInput" type="text" placeholder='Enter Category'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Short Description</label>
                <input className="createInput" type="text" placeholder='Enter Short Description'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Metter</label>
                <input className="createInput" type="text" placeholder='Enter Matter'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Assay</label>
                <input className="createInput" type="text" placeholder='Enter Assay'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Size</label>
                <input className="createInput" type="text" placeholder='Enter Size'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Brand</label>
                <input className="createInput" type="text" placeholder='Enter Brand'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Quantity</label>
                <input className="createInput" type="text" placeholder='Enter Quantity'/>
            </div>
            <div className='userCreateInput'style={{width:300}}>
                <label className="createLabel">Price</label>
                <input className="createInput" type="text" placeholder='Enter Price'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Weight</label>
                <input className="createInput" type="text" placeholder='Enter Weight'/>
            </div>
            <div className='userCreateInput' style={{width:300}}>
                <label className="createLabel">Description</label>
                <input className="createInput" type="text" placeholder='Enter Description'/>
            </div>
            <Link to={`/users`} className="creaeUser" style={{marginTop: 16}}>
                <div className="createUserBtn">Edit Product</div>
            </Link>
        </form>
            </div>
        </div>
    </div>
  )
}
