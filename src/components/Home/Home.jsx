import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Signup from "../Signup/Signup";
import "./Home.css";

const Home = () => {
    return (
        <div className="home_container">
            <Header />
            <Signup />
            <Footer />
        </div>
    );
};

export default Home;
