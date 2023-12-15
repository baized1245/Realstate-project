import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUP from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreatListing from "./pages/CreatListing";

export default function App() {
  return <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUP/>} />
      <Route path="/about" element={<About/>} />
      <Route element={<PrivateRoute/>}>
      <Route path="/profile" element={<Profile/>} />
      <Route path="/create-listing" element={<CreatListing/>} />
      </Route>
    </Routes>
   </BrowserRouter>;
}
