import React, { useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Avatar, Grid, Tooltip, Divider, Menu, MenuItem, ListItemIcon, Backdrop, CircularProgress, Snackbar, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/GeziYolundaLogo2.png';
import { Logout } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: '4.2rem',
        cursor: 'pointer',
    },
    spacer: {
        flexGrow: 1,
    },
    backdrop: {
        zIndex: 1500
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [uyari, setUyari] = React.useState(false);
    const [uyariTip, setUyariTip] = React.useState('info');
    const [responseMessage, setresponseMessage] = React.useState({
        ErrorCode: '0',
        ErrorDescription: 'success_message'
    });

    const open = Boolean(anchorEl);
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const showNavbar = !isLoginPage && !isRegisterPage;
    const isAuthenticated = localStorage.getItem('accessToken');

    useEffect(() => {
        const isTokenExpired = (token) => {
            if (!token) {
                return true;
            }

            const decodedToken = JSON.parse(decodeURIComponent(escape(atob(token.split('.')[1]))));
            if (!decodedToken.exp) {
                return true;
            }

            const currentTime = Date.now() / 1000;
            return decodedToken.exp < currentTime;
        };

        if (isAuthenticated && isTokenExpired(isAuthenticated)) {
            handleLogout();
        }
    }, [isAuthenticated]);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.reload();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickToProfile = () => {
        navigate('/profile');
    };

    const GoToMainPage = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/');
            setLoading(false);
        }, 500);
    };

    const uyariKapat = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setUyari(false);
    };

    return showNavbar ? (
        <>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={uyari} autoHideDuration={2000} onClose={uyariKapat}
                anchorOrigin={{ vertical: "top", horizontal: "left" }}>
                <Alert onClose={uyariKapat} variant='filled' severity={uyariTip}>
                    {responseMessage}
                </Alert>
            </Snackbar>
            <AppBar position="static" color='transparent' sx={{ boxShadow: 'none' }}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item onClick={() => { GoToMainPage() }}>
                            <img src={logo} alt="GeziYolunda Logo" className={classes.logo} />
                        </Grid>
                        <Grid item className={classes.spacer} />
                        <Grid item>
                            <Button
                                variant="filled"
                                size="large"
                                component={Link}
                                to="/cities"
                                sx={{
                                    fontSize: '1rem',
                                    textTransform: 'capitalize',
                                    borderRadius: '1.3rem',
                                    color: 'black',
                                    marginRight: 1,
                                }}>
                                Şehirler
                            </Button>
                            {/* <Button
                                variant="filled"
                                size="large"
                                component={Link}
                                to="/"
                                sx={{
                                    fontSize: '1rem',
                                    textTransform: 'capitalize',
                                    borderRadius: '1.3rem',
                                    color: 'black',
                                    marginRight: 1,
                                }}>
                                Restoranlar
                            </Button> */}
                            <Button
                                variant="filled"
                                size="large"
                                component={Link}
                                to="/aboutUs"
                                sx={{
                                    fontSize: '1rem',
                                    textTransform: 'capitalize',
                                    borderRadius: '1.3rem',
                                    color: 'black',
                                    marginRight: 1,
                                }}>
                                Hakkımızda
                            </Button>
                            <Button
                                variant="filled"
                                size="large"
                                component={Link}
                                to="/contact"
                                sx={{
                                    fontSize: '1rem',
                                    textTransform: 'capitalize',
                                    borderRadius: '1.3rem',
                                    color: 'black',
                                    marginRight: 1,
                                }}>
                                Bize Ulaşın
                            </Button>
                        </Grid>
                        <Grid item>
                            {isAuthenticated ? (
                                <React.Fragment>
                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Avatar sx={{ width: 40, height: 40 }}></Avatar>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem onClick={handleClickToProfile}>
                                            <Avatar /> Profile
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={handleLogout}>
                                            <ListItemIcon>
                                                <Logout fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </React.Fragment>
                            ) : (
                                <Grid container>
                                    <Button
                                        variant="contained"
                                        size='large'
                                        component={Link}
                                        to="/login"
                                        sx={{
                                            fontSize: '1rem',
                                            textTransform: 'capitalize',
                                            borderRadius: '2rem',
                                            backgroundColor: 'black',
                                            color: 'white',
                                            marginRight: 1,
                                        }}
                                    >
                                        Giriş Yap
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size='large'
                                        component={Link}
                                        to="/register"
                                        sx={{
                                            fontSize: '1rem',
                                            textTransform: 'capitalize',
                                            borderRadius: '2rem',
                                            backgroundColor: 'black',
                                            color: 'white',
                                            marginRight: 1,
                                        }}
                                    >
                                        Üye Ol
                                    </Button>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Divider />
        </>
    ) : null;
};

export default Navbar;
