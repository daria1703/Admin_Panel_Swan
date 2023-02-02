import React from 'react'
import "./newProduct.css"
import { Link } from 'react-router-dom';

export default function NewProduct() {
  return (
    <div className="newProductContianer">
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
  )
}
