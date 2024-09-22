import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router';
import Product from './Product';
import Product_update from './Product_update';
import Sign_Up from './Sign_Up';
import Login_page from './Login_page';
import User1 from './User1';
import SeloreUser from './SeloreUser';

const Main = () => {
  const [addItem, setAddItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [condition, setCondition] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loginInUser = JSON.parse(localStorage.getItem('selore-login')) || {};
    const addItemData = JSON.parse(localStorage.getItem('update-data')) || [];

    const userProducts = addItemData.filter(item => item.email === loginInUser.email);

    setAddItem(userProducts.length);
    setProducts(userProducts);
    // Calculate total price using forEach
    let totalPrice = 0;
    userProducts.forEach((item) => {
      totalPrice += parseFloat(item.price);
    });
    setTotalPrice(totalPrice);
  }, [condition]);

  return (
    <main className="d-flex pb-4 col-12 main">
      <div className='col-5 col-xl-2 col-md-3 col-sm-4 mt-3'>
        <Sidebar setAddItem={setAddItem} setTotalPrice={setTotalPrice} condition={condition} setCondition={setCondition} />
      </div>
      <div className='col-7 col-xl-10 col-md-9 col-sm-8 mt-5'>
        <div className='d-flex justify-content-around align-items-center flex-wrap gap-2'>
          <div className='d-flex justify-content-between align-items-center flex-column p-3 boxA'>
            <h4>Add-Product</h4>
            <p>Total Items: {addItem}</p>
          </div>
          <div className='d-flex justify-content-between align-items-center flex-column p-3 boxA'>
            <h4>Total Price</h4>
            <p>₹ {totalPrice}</p>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product" element={<Product condition={condition} setCondition={setCondition} />} />
          <Route path="/Product_update" element={<Product_update condition={condition} setCondition={setCondition} />} />
          <Route path="/Sign_Up" element={<Sign_Up />} />
          <Route path="/Login_page" element={<Login_page condition={condition} setCondition={setCondition} />} />
          <Route path="/User" element={<User1/>} />
          <Route path="/SeloreUser" element={<SeloreUser/>} />
        </Routes>
      </div>
    </main>
  )
}

export default Main;
