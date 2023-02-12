import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Signup from "../Signup/Signup";
import User from "../User/User";
import UserDetail from "../UserDetail/UserDetail";
import Welcome from "../Welcome/Welcome";
import "./Home.css";

const Home = () => {
    const user = useSelector(state => state?.user);
    console.log(user?.userName);
    return (
        <div className="home_container">
            <Header />
            <Routes>
                <Route  path="/" element={<Welcome />} />
                <Route  path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={
                    <ProtectedRoute user={user}>
                        <User />
                    </ProtectedRoute>
                } />
            <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Home;
