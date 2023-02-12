import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { loggedinUser } from '../../redux/actions/actions';
import "../Signup/Signup.css";

const Login = () => {

    let navigate = useNavigate(); 
    const dispatch = useDispatch();

    const [loginUser, setLoginUser] = useState();
    const [loginPass, setLoginPass] = useState();
    const [regUser, setRegUser] = useState([]);
    const updateUserName = (e) => {
        setLoginUser(e.target.value);
    };

    const updatePass = (e) => {
        setLoginPass(e.target.value);
    };
    // console.log(loginUser, loginPass);
    const handleLogin = () => {
        if(loginUser && loginPass) {
            if(loginUser === regUser.userName && loginPass === regUser.pass) {
                dispatch(loggedinUser(regUser));
                // toast("You are ready to login");
                setLoginUser("");
                setLoginPass("");
                navigate("/user");
            } else {
                toast("Your user or password is wrong")
            }
        }else {
            toast("please fill up the form first");
        }
    }

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('User'));
        setRegUser(user[0]);
        }
        , [])

    console.log(regUser.userName, loginUser);

    return (
        <div>
            <div className='signup_container'>
                <h3>Welcome to user management</h3>
                <div>
                    <input type="text" placeholder='User Name' required value={loginUser} onChange={updateUserName} />
                    <br />
                    <input type="password" placeholder='Your Password' required value={loginPass} onChange={updatePass} />
                    <br />

                    <button onClick={() => handleLogin()}>Login</button>
                    <hr />
                    <p>Don't have an account ?<Link to="/signup">Signup</Link></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;