import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../images/logo5.jpg';
import axios from 'axios';
import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 1500,
        color: '#fff'
    },
}));

function SignInSide() {
    const navigate = useNavigate();
    const classes = useStyles();

    const [emailInput, setEmailInput] = React.useState('');
    const [passwordInput, setPasswordInput] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [uyari, setUyari] = React.useState(false);
    const [uyariTip, setUyariTip] = React.useState('info');
    const [responseMessage, setresponseMessage] = React.useState({
        ErrorCode: '0',
        ErrorDescription: 'success_message'
    });

    // Kullanıcı oturum açık, ana sayfaya yönlendir
    useEffect(() => {
        setLoading(true);
        const isLoggedIn = localStorage.getItem('accessToken');
        if (isLoggedIn) {
            setTimeout(() => {
                window.location.href = "/";
                setLoading(false);
            }, 1000);
        } else {
            setLoading(false);
        }
    }, []);


    const loginUser = () => {
        if (!emailInput || !passwordInput) {
            setError('Lütfen E-posta adresinizi ve şifrenizi girin.');
            return;
        }

        const data = {
            Email: emailInput,
            password: passwordInput
        }
        const dataConfig = {
            headers: { 'Content-Type': 'application/json' }
        };
        setLoading(true);
        axios.post('https://localhost:5001/SignInUser', data, dataConfig)
            .then(response => {

                // Başarılı giriş durumunda istenilen işlemleri gerçekleştirin
                const { accessToken } = response.data;
                // accessToken'i local storage'a kaydet
                localStorage.setItem('accessToken', accessToken);
                setLoading(false);

                setUyariTip('success');
                setresponseMessage('Giriş İşlemi Başarılı. Ana sayfaya yönlendiriliyorsunuz...');
                setUyari(true);

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch(error => {
                setError('Giriş yaparken bir hata oluştu. Lütfen tekrar deneyin.');
                setLoading(false);
            });
    };

    const uyariKapat = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setUyari(false);
    };

    return (
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
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7}
                    sx={{
                        backgroundImage: `url(${loginImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square={false}>
                    <Box
                        sx={{
                            my: 16,
                            mx: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            <i><b>GEZİ YOLUNDA</b></i>
                        </Typography>
                        <Grid container>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                placeholder="Lütfen E-posta adresinizi giriniz."
                                type="email"
                                sx={{ marginBottom: '1rem', marginTop: '1rem' }}
                                value={emailInput}
                                onChange={(event) => setEmailInput(event.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                placeholder="Lütfen şifrenizi giriniz."
                                type="password"
                                sx={{ marginBottom: '1rem' }}
                                value={passwordInput}
                                onChange={(event) => setPasswordInput(event.target.value)}
                            />
                            {error && <Typography color="error" variant="body2" align="center">{error}</Typography>}
                            <Button
                                fullWidth
                                size='large'
                                variant="contained"
                                color="primary"
                                sx={{ marginBottom: '1rem', borderRadius: '1.5rem' }}
                                onClick={loginUser}
                            >
                                Giriş Yap
                            </Button>
                            <Grid item>
                                <Typography variant="body2">
                                    {"Henüz Hesabın Yok mu? "}
                                    <Link to="/register">Kayıt Ol</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default SignInSide;
