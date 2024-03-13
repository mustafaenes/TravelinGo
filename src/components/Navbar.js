// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static"> {/* className özelliği ile CSS sınıfını ekledik */}
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    TravelinGo
                </Typography>
                <Button color="inherit">Giriş Yap</Button>
                <Button color="inherit">Üye Ol</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
