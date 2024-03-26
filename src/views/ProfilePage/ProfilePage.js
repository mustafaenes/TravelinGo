import React, { useEffect } from 'react'
import { Container, Grid, Card, CardContent, Typography, Button, TextField, List, ListItem, ListItemText, LinearProgress, IconButton, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { jwtDecode } from 'jwt-decode';

const StyledAvatar = styled('img')({
    borderRadius: '50%',
    padding: '0.1rem',
    backgroundColor: '#1976d2',
});

export default function ProfilePage() {


    const [fullName, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [dayOfBirth, setDayOfBirth] = React.useState("");
    const [registrationDate, setRegistrationDate] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [gender, setGender] = React.useState("");

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const decodedToken = decodeToken(token);
            setFullName(decodedToken.fullName);
            setEmail(decodedToken.email);
            setDayOfBirth(decodedToken.dayOfBirth);
            setRegistrationDate(decodedToken.registrationDate);
            setAddress(decodedToken.address);
            setGender(decodedToken.gender);
            setPhoneNumber(formatPhoneNumber(decodedToken.phoneNumber));
        }
    }, []);

    const decodeToken = (token) => {
        const decoded = jwtDecode(token);
        console.log(decoded);
        // Decode edilmiş token'dan kullanıcı bilgilerini döndür
        return {
            fullName: decoded.unique_name + ' ' + decoded.family_name,
            email: decoded.email,
            dayOfBirth: decoded.DateOfBirth,
            registrationDate: decoded.RegistrationDate,
            address: decoded.StreetAddress,
            gender: decoded.gender === 'E' ? 'Erkek' : 'Kadın',
            phoneNumber: decoded.PhoneNumber
        };
    };

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

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item lg={4} xs={12}>
                    <Card>
                        <CardContent>
                            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                                <Grid item>
                                    <StyledAvatar src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" width="110" />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5">{fullName}</Typography>
                                    <Typography variant="subtitle1" color="textSecondary">Full Stack Developer</Typography>
                                    <Typography variant="body2" color="textSecondary">{address}</Typography>
                                </Grid>
                            </Grid>
                            <hr />
                            <List>
                                <ListItem>
                                    <IconButton sx={{ marginRight: '8px' }}>
                                        <GitHubIcon />
                                    </IconButton>
                                    <ListItemText primary="Github" secondary="bootdey" />
                                </ListItem>
                                <ListItem>
                                    <IconButton sx={{ marginRight: '8px' }}>
                                        <TwitterIcon />
                                    </IconButton>
                                    <ListItemText primary="Twitter" secondary="@bootdey" />
                                </ListItem>
                                <ListItem>
                                    <IconButton sx={{ marginRight: '8px' }}>
                                        <InstagramIcon />
                                    </IconButton>
                                    <ListItemText primary="Instagram" secondary="bootdey" />
                                </ListItem>
                                <ListItem>
                                    <IconButton sx={{ marginRight: '8px' }}>
                                        <FacebookIcon />
                                    </IconButton>
                                    <ListItemText primary="Facebook" secondary="bootdey" />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={8} xs={12}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Typography variant="body1">İsim Soyisim:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField fullWidth variant="outlined" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </Grid>
                                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Typography variant="body1">Email Adresi:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField fullWidth variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Grid>
                                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Typography variant="body1">Doğum Tarihi:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField fullWidth variant="outlined" value={dayOfBirth} onChange={(e) => setDayOfBirth(e.target.value)} />
                                </Grid>
                                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Typography variant="body1">Cep Telefonu:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField fullWidth variant="outlined" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </Grid>
                                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Typography variant="body1">Cinsiyet:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField fullWidth variant="outlined" value={gender} onChange={(e) => setGender(e.target.value)} />
                                </Grid>
                                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Typography variant="body1">Adres:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField fullWidth variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </Grid>
                                <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <Typography variant="body1">Kayıt Tarihi:</Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField fullWidth disabled variant="outlined" value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} />
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <Button variant="contained" color="primary" fullWidth>Save Changes</Button>
                                </Grid> */}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};
