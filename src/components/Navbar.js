import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, Stack, Grid, InputAdornment, Divider, Avatar } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../images/logo2.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const useStyles = makeStyles((theme) => ({
    title: {
        cursor: 'pointer',
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'green',
    },
}));


const Navbar = () => {
    const classes = useStyles();
    const location = useLocation();

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const showNavbar = isLoginPage || isRegisterPage ? false : true;
    const isAuthenticated = localStorage.getItem('accessToken'); // AccessToken varsa kullanıcı giriş yapmış kabul edilir


    const handleLogout = () => {
        localStorage.removeItem('accessToken'); // AccessToken'i silerek kullanıcıyı çıkış yapmış kabul ediyoruz
        window.location.reload(); // Sayfayı yenileyerek kullanıcıyı anasayfaya yönlendiriyoruz
    };


    return showNavbar ? (
        <>
            <AppBar position="static" color='transparent' sx={{ boxShadow: 'none' }}>
                <Toolbar>
                    <Grid container spacing={10}>
                        <Grid item xs={6} sm={6} md={2} lg={2}>
                            {/* <img src={logo} alt="Logo" height={150} /> */}
                        </Grid>
                        <Grid item xs={6} sm={6} md={2} lg={2} />
                        <Grid item xs={6} sm={6} md={4} lg={4}>
                            <TextField
                                placeholder="Lütfen Aratmak istediğiniz Şehri Giriniz..."
                                variant="outlined"
                                size="small"
                                className={classes.searchInput}
                                fullWidth
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton>
                                                <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6} md={1} lg={1} />
                        <Grid item xs={6} sm={6} md={3} lg={3}>
                            {isAuthenticated ?
                                <Stack direction='row' spacing={2}>
                                    <IconButton
                                        edge="end"
                                        className={classes.profileButton}
                                        color="inherit"
                                        aria-label="profile"
                                    >
                                        <Avatar>
                                            <AccountCircleIcon />
                                        </Avatar>
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        color="inherit"
                                        aria-label="logout"
                                        onClick={handleLogout}
                                    >
                                        <ExitToAppIcon />
                                    </IconButton>
                                </Stack> :
                                <Stack direction='row' spacing={2}>
                                    <Button
                                        variant='contained'
                                        color="primary"
                                        size='large'
                                        component={Link}
                                        to='/login'
                                    >
                                        Giriş Yap
                                    </Button>
                                    <Button
                                        variant='contained'
                                        color="primary"
                                        size='large'
                                        component={Link}
                                        to='/register'
                                    >
                                        Üye Ol
                                    </Button>
                                </Stack>
                            }

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Divider />
        </>
    ) : null
};

export default Navbar;
