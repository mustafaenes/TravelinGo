import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, TextField, Stack, Grid, InputAdornment } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


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

    return showNavbar ? (
        <AppBar position="static" color='transparent' sx={{ boxShadow: 'none' }}>
            <Toolbar>
                <Grid container spacing={10}>
                    <Grid item xs={6} sm={6} md={2} lg={2}>
                        <Typography variant="h4" className={classes.title}>
                            TRAVELINGO
                        </Typography>
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
                    <Grid item xs={6} sm={6} md={1} lg={2} />
                    <Grid item xs={6} sm={6} md={3} lg={2}>
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
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    ) : null
};

export default Navbar;
