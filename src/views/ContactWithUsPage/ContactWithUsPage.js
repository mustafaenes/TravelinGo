import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TextField, Button, Container, Grid, Typography, Paper, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Ana renk
        },
    },
});

const useStyles = makeStyles((theme) => ({
    shakeAnimation: {
        maxWidth: '100%',
    },
}));

function Map() {
    useEffect(() => {
        // Harita oluştur
        const map = L.map('map').setView([40.73061, 31.60501], 16); // Bolu Meslek Yüksekokulu konumu

        // Leaflet varsayılan ikonlarını ayarla
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: markerIcon,
            iconUrl: markerIcon,
            shadowUrl: markerShadow
        });

        // Harita katmanı ekle (OpenStreetMap kullanıyoruz)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Konumu işaretleyelim ve bir popup pencere ekleyelim
        L.marker([40.73061, 31.60501]).addTo(map)
            .bindPopup('<b>Bolu Meslek Yüksekokulu</b><br>Beşkavaklar Mah., Çakmalar Cad.,<br>Bolu, Turkey')
            .openPopup();

        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" style={{ height: '100%' }} />;
}

function ContactWithUsPage() {
    const classes = useStyles();
    const [isHovered, setIsHovered] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleMouseMove = (event) => {
        if (isHovered) {
            const image = event.target;
            const offsetX = event.clientX - image.getBoundingClientRect().left;
            const offsetY = event.clientY - image.getBoundingClientRect().top;
            const imageWidth = image.clientWidth;
            const imageHeight = image.clientHeight;

            const percentageX = offsetX / imageWidth - 0.5;
            const percentageY = offsetY / imageHeight - 0.5;

            const maxTranslation = 10;
            const translateX = maxTranslation * percentageX;
            const translateY = maxTranslation * percentageY;

            image.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        const image = document.getElementById('shake-image');
        image.style.transform = 'none';
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Gönderme işlemleri burada gerçekleştirilebilir
        console.log(formData);
        // Formu temizleme
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };


    return (
        <Grid container component="main" sx={{ height: '92.5vh', background: '' }}>
            <Grid item xs={12} sm={8} md={1} />
            <Grid item xs={12} sm={8} md={5} alignContent='center'>
                <ThemeProvider theme={theme}>
                    <Paper elevation={20} sx={{ p: 3, borderRadius: '1.5rem', textAlign: 'center' }}>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} md={12}>
                                <Typography variant="h4" gutterBottom>
                                    <b><i>İletişim Formu</i></b>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        id="name"
                                        name="name"
                                        label="İsim"
                                        variant="outlined"
                                        margin="normal"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                        margin="normal"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        id="subject"
                                        name="subject"
                                        label="Konu"
                                        variant="outlined"
                                        margin="normal"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        id="message"
                                        name="message"
                                        label="Mesaj"
                                        multiline
                                        rows={8}
                                        variant="outlined"
                                        margin="normal"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        fullWidth
                                        size='large'
                                        endIcon={<SendIcon />}
                                        sx={{ mt: 2, borderRadius: '1.5rem' }}
                                    >
                                        Gönder
                                    </Button>
                                </form>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <img
                                    id="shake-image"
                                    src="https://colorlib.com/etc/cf/ContactFrom_v12/images/img-01.png"
                                    alt="Contact"
                                    className={classes.shakeAnimation}
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </ThemeProvider>
            </Grid>
            <Grid item xs={12} sm={12} md={1} />
            <Grid item xs={false} sm={4} md={5}>
                <Map />
            </Grid>
        </Grid>
    );
}

export default ContactWithUsPage;
