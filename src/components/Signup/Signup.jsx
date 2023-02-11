import React, { useEffect, useState } from 'react';
import "./Signup.css";

const Signup = () => {
    const [userName, setUserName] = useState();
    const [pass, setPass] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [newUser, setNewUser] = useState([]);

    const updateUserName = (e) => {
        setUserName(e.target.value);
    };

    const updatePass = (e) => {
        setPass(e.target.value);
        console.log(e.target.value);
    };

    const updateConfirmPass = (e) => {
        setConfirmPass(e.target.value);
        console.log(e.target.value);
    };


        const handleClick = (e) => {
            if(pass === confirmPass) {
                setNewUser(...newUser,[{
                    userName,
                    pass
                }])
                setUserName("");
                setPass("");
                setConfirmPass("");

            }else {
                alert("Your pass is incorrect");
            }
            console.log("clicked");
        }
        console.log(newUser);
        console.log(newUser.length);

            useEffect(() => {
                if(newUser.length > 0) {
                    localStorage.setItem('User', JSON.stringify(newUser));
                }
            }, [newUser]);
        

    return (
        <div className='signup_container'>
            <h3>Welcome to user management</h3>
            <div>
                <input type="text" placeholder='User Name' required value={userName} onChange={updateUserName}/>
                <br />
                <input type="password" placeholder='Your Password' required value={pass} onChange={updatePass}/>
                <br />
                <input type="password" placeholder='Confirm Your Password' required value={confirmPass} onChange={updateConfirmPass}/>
                <br />
                
                <button onClick={handleClick}>Sign Up</button>
                <hr />
                <p>Already have an account ? Login</p>
            </div>
        </div>
    )
}

export default Signup;