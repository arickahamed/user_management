import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const user = useSelector(state => state?.user);

    const navigate = useNavigate()
    const onbtnClick = () => {
        navigate("/login");
    }
    return (
        <div className="nav_container">
            <Box sx={{ flexGrow: 1 }}>               
                <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {user?.userName? <h3 style={{color: "orange"}}>{user.userName}</h3> :
                        <Button onClick={onbtnClick
                        } color="inherit">Login</Button>
                    }
                </Toolbar>
            </AppBar>
            </Box>
        </div>
    );
};

export default Header;
