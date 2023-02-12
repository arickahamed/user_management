import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Signup/Signup.css";

const Login = () => {
    const [userName, setUserName] = useState();
    const [pass, setPass] = useState();
    const updateUserName = (e) => {
        setUserName(e.target.value);
    }
    const updatePass = (e) => {
        setPass(e.target.value);
    }
  return (
    <div>
        <div className='signup_container'>
            <h3>Welcome to user management</h3>
            <div>
                <input type="text" placeholder='User Name' required value={userName} onChange={updateUserName}/>
                <br />
                <input type="password" placeholder='Your Password' required value={pass} onChange={updatePass}/>
                <br />
                
                <button >Login</button>
                <hr />
                <p>Don't have an account ?<Link to="/signup">Signup</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login;