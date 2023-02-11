import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="nav_container">
            <Box sx={{ flexGrow: 1 }}>                <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            </Box>
        </div>
    );
};

export default Header;
