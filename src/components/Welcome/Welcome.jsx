import React from 'react';
import { Link } from 'react-router-dom';
import hello from "../../image/hello.gif";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className='welcome_container'>
        <h2>Welcome to user manager</h2>
        <p>Let's <Link to="/signup">Sign up</Link></p>
        <img src={hello} alt="hello" />
    </div>
  )
}

export default Welcome;