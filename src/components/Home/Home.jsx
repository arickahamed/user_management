import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Signup from "../Signup/Signup";
import User from "../User/User";
import Welcome from "../Welcome/Welcome";
import "./Home.css";

const Home = () => {
    return (
        <div className="home_container">
            <Header />
            <Routes>
                <Route  path="/" element={<Welcome />} />
                <Route  path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<User />} />
            
            </Routes>
            <Footer />
        </div>
    );
};

export default Home;
