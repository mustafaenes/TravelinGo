import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Avatar, Grid, Tooltip, Divider, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/GeziYolundaLogo2.png';
import { Logout, Settings } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: '4rem',
        cursor: 'pointer',
    },
    spacer: {
        flexGrow: 1,
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const location = useLocation();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const showNavbar = !isLoginPage && !isRegisterPage;
    const isAuthenticated = localStorage.getItem('accessToken');

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

    return showNavbar ? (
        <>
            <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: 'antiquewhite' }}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item>
                            <img src={logo} alt="GeziYolunda Logo" className={classes.logo} />
                        </Grid>
                        <Grid item className={classes.spacer} />
                        <Grid item>
                            <Button
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
                                Şehirler
                            </Button>
                            <Button
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
                            </Button>
                            <Button
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
                                Hakkımızda
                            </Button>
                            <Button
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
                                            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
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
                                        <MenuItem onClick={handleClose}>
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
                                            textTransform: 'capitalize',
                                            borderRadius: '1.3rem',
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
                                            textTransform: 'capitalize',
                                            borderRadius: '1.3rem',
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
