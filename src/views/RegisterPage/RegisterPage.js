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
import registerImage from '../../images/RegisterPageImage.jpg';
import axios from '../../utils/axios';
import moment from 'moment';
import { Alert, Backdrop, CircularProgress, FormControl, InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
import { useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: 1500,
        color: '#fff'
    },
}));

function SignUpSide() {
    const classes = useStyles();
    const navigate = useNavigate();

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [emailInput, setEmailInput] = React.useState('');
    const [passwordInput, setPasswordInput] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [birthDate, setBirthDate] = React.useState('');
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


    const formatPhoneNumber = (phoneNumber) => {
        // Girilen telefon numarasından sadece rakamları al
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');

        // Girilen numara uzunluğuna göre formatı belirle
        let formattedPhoneNumber = '';
        for (let i = 0; i < cleaned.length; i++) {
            if (i === 0) {
                // İlk numarayı girdiğinde parantez ekle
                formattedPhoneNumber += '(' + cleaned[i];
            } else if (i === 3) {
                // Üçüncü karakterden sonra boşluk ekle
                formattedPhoneNumber += ') ' + cleaned[i];
            } else if (i === 6 || i === 8) {
                // Altıncı ve sekizinci karakterlerden sonra birer boşluk ekle
                formattedPhoneNumber += ' ' + cleaned[i];
            } else {
                // Diğer karakterleri sırasıyla ekle
                formattedPhoneNumber += cleaned[i];
            }
        }

        return formattedPhoneNumber;
    };

    const cleanPhoneNumber = (formattedPhoneNumber) => {
        return formattedPhoneNumber.replace(/\D/g, ''); // Sadece rakamları al
    };

    const registerUser = () => {
        if (!emailInput || !passwordInput || !firstName || !lastName || !birthDate || !phoneNumber || !gender || !address) {
            setError('Lütfen tüm bilgileri eksiksiz doldurun.');
            setUyariTip('error');
            setresponseMessage('Lütfen tüm bilgileri eksiksiz doldurun.');
            setUyari(true);
            return;
        }
        setLoading(true);

        const data = {
            Name: firstName,
            Surname: lastName,
            Email: emailInput,
            Password: passwordInput,
            BirthDate: moment(birthDate).format('YYYY-MM-DD'),
            PhoneNumber: cleanPhoneNumber(phoneNumber),
            Gender: gender,
            Address: address
        }
        const dataConfig = {
            headers: { 'Content-Type': 'application/json' }
        };
        axios.post('/SignUpUser', data, dataConfig)
            .then(response => {
                setLoading(false);
                if (response.data.errorCode === '0') {
                    setUyariTip('success');
                    setresponseMessage('Kayıt İşlemi Başarı ile tamamlandı. Giriş sayfasına yönlendiriliyorsunuz...');
                    setUyari(true);
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                } else {
                    setUyariTip('error');
                    setresponseMessage('Kayıt işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
                    setUyari(true);
                    setError('Kayıt işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
                }
            })
            .catch(error => {
                setLoading(false);
                setUyariTip('error');
                setresponseMessage('Kayıt işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
                setUyari(true);
                setError('Kayıt işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin.');
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
                anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={uyariKapat} variant='filled' severity={uyariTip}>
                    {responseMessage}
                </Alert>
            </Snackbar>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square={false}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                                id="firstName"
                                label="İsim"
                                sx={{ marginBottom: '1rem', marginTop: '1rem' }}
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Soyisim"
                                sx={{ marginBottom: '1rem' }}
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="E-posta"
                                type='email'
                                sx={{ marginBottom: '1rem' }}
                                value={emailInput}
                                onChange={(event) => setEmailInput(event.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="Şifre"
                                type="password"
                                sx={{ marginBottom: '1rem' }}
                                value={passwordInput}
                                onChange={(event) => setPasswordInput(event.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Cep Telefonu"
                                sx={{ marginBottom: '1rem' }}
                                value={phoneNumber}
                                onChange={(event) => {
                                    const inputPhoneNumber = event.target.value;
                                    // Telefon numarasını girdiği gibi değil, belirli bir formatta göstermek için formatlama
                                    const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
                                    setPhoneNumber(formattedPhoneNumber);
                                }}
                            />
                            <FormControl fullWidth variant="outlined" sx={{ marginBottom: '1rem' }}>
                                <InputLabel id="gender-label">Cinsiyet</InputLabel>
                                <Select
                                    labelId="gender-label"
                                    id="gender"
                                    value={gender}
                                    label="Cinsiyet"
                                    onChange={(event) => setGender(event.target.value)}
                                >
                                    <MenuItem value="E">Erkek</MenuItem>
                                    <MenuItem value="K">Kadın</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="address"
                                label="Adres"
                                sx={{ marginBottom: '1rem' }}
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="birthDate"
                                label="Doğum Tarihi"
                                type="date"
                                sx={{ marginBottom: '1rem' }}
                                value={birthDate}
                                onChange={(event) => setBirthDate(event.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {error && <Typography color="error" variant="body2" align="center">{error}</Typography>}
                            <Button
                                fullWidth
                                size='large'
                                variant="contained"
                                color="secondary"
                                sx={{ marginBottom: '1rem', borderRadius: '1.5rem' }}
                                onClick={() => { registerUser(); }}
                                disabled={loading} // Butonu loading durumunda devre dışı bırak.
                            >
                                {loading ? 'Kaydediliyor...' : 'Kayıt Ol'}
                            </Button>
                            <Grid item>
                                <Typography variant="body2">
                                    {"Zaten bir hesabın var mı? "}
                                    <Link to="/login">Giriş Yap</Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={false} sm={4} md={7}>
                    <Box
                        sx={{
                            backgroundImage: `url(${registerImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh',
                        }}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default SignUpSide;
