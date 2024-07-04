"use client";
import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import ListItem  from "./pages/ListItem";
import Login from './pages/Login';
import FarmerBuy from "./pages/FarmerBuy";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import UpdateAccount from "./pages/UpdateAccount";
import PrintableOrder from "./components/PrintableOrder";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/item" element={<ListItem/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/farmerBuy" element={<FarmerBuy/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/updateAccount" element={<UpdateAccount/>} />
          <Route path="/orders" element={<PrintableOrder/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
