import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardContent, Box, Container, Divider, ListItem, ListItemIcon, ListItemText, Backdrop, Snackbar, Alert, CircularProgress } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Rating from '@mui/material/Rating';
import SimpleImageSlider from 'react-simple-image-slider';
import ImageSliderNavigation from 'react-simple-image-slider';
import { makeStyles } from '@mui/styles';
import '../../styles/font.css';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { useParams } from 'react-router-dom';
import axios from '../../utils/axios';

import resim1 from "../../images/LoginPageImage.jpg"
import resim2 from "../../images/login2.jpg"
import resim3 from "../../images/login3.jpg"

const useStyles = makeStyles({
    sliderContainer: {
        textAlign: 'center',
    },
    contactInfo: {
        borderRadius: '1rem',
        backgroundColor: 'azure',
    },
    backdrop: {
        zIndex: 1500
    },
});

function DetailPage() {
    const classes = useStyles();

    const { locationId } = useParams();
    const [restaurantGeneralData, setRestaurantGeneralData] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [uyari, setUyari] = React.useState(false);
    const [uyariTip, setUyariTip] = React.useState('info');
    const [responseMessage, setresponseMessage] = React.useState({
        ErrorCode: '0',
        ErrorDescription: 'success_message'
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        getRestaurantDetails();
    }, [locationId])

    const getRestaurantDetails = () => {
        const dataConfig = {
            headers: { 'Content-Type': 'application/json' }
        };

        setLoading(true);
        axios.get(`/GetRestaurantDetails/${locationId}`, dataConfig)
            .then(response => {
                const restaurantData = response.data[0];
                setRestaurantGeneralData(restaurantData);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setUyari(true);
                setresponseMessage({ ErrorCode: '1', ErrorDescription: 'error_message' });
            });
    }

    const images = [
        { url: resim1 },
        { url: resim2 },
        { url: resim3 },
    ];

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
                    {responseMessage.ErrorDescription}
                </Alert>
            </Snackbar>
            <Grid container component="main">
                <Grid item xs={12} sm={12} md={12}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: 1, marginLeft: 3, textDecoration: 'underline' }}>
                        <Typography color="inherit"><i>Anasayfa</i></Typography>
                        <Typography color="inherit"><i>Şehirler</i></Typography>
                        <Typography color="inherit"><i>{restaurantGeneralData.CITY}</i></Typography>
                        <Typography color="inherit"><i>Restoranlar</i></Typography>
                        <Typography color="textPrimary"><i>{restaurantGeneralData.NAME}</i></Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={1} />
                    <Grid item xs={12} sm={12} md={7} sx={{ marginTop: 3, marginBottom: 5 }}>
                        <Typography variant="h2" sx={{ fontFamily: 'Shadows Into Light' }}>
                            {restaurantGeneralData.NAME}
                        </Typography>
                        <Rating name="rating" value={restaurantGeneralData.RATING} precision={0.5} readOnly />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} >
                        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Shadows Into Light', mt: 8 }}>
                            <LocationOnIcon /><b>Adres:</b> {restaurantGeneralData.ADDRESS}
                        </Typography>
                        <Typography variant="body1" sx={{ fontFamily: 'Shadows Into Light' }}>
                            <PhoneIcon /><b>Telefon:</b> {restaurantGeneralData.PHONE}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={1} />
                </Grid>
                <Grid item xs={12} sm={12} md={2} />
                <Grid item xs={12} sm={12} md={8}>
                    <SimpleImageSlider
                        height='40rem'
                        width='80rem'
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        navStyle={ImageSliderNavigation}
                    />
                </Grid>
                <Grid item xs={false} sm={false} md={2} />
                <Grid item xs={12} sm={12} md={1} />
                <Grid item xs={12} sm={12} md={10} >
                    <Divider sx={{ mt: 4 }}>
                        <Typography variant="h3" textAlign='center' sx={{ fontFamily: 'Shadows Into Light', color: 'yellowgreen' }}>Hakkında</Typography>
                    </Divider>
                </Grid>
                <Grid item xs={12} sm={12} md={1} />
                <Grid item xs={12} sm={12} md={4} />
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h5" textAlign='center' gutterBottom sx={{ mt: 4, fontFamily: 'Shadows Into Light' }}>
                        {restaurantGeneralData.DESCRIPTION}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} />
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={12} md={1} />
                    <Grid item xs={12} sm={12} md={3}>
                        <CardContent className={classes.contactInfo}>
                            <Typography variant="h5" textAlign='center' gutterBottom sx={{ fontFamily: 'Pacifico' }}>
                                İletişim Bilgileri
                            </Typography>
                            <ListItem>
                                <ListItemIcon>
                                    <LanguageIcon />
                                </ListItemIcon>
                                <ListItemText primary={<b>Web Sitesi:</b>} secondary={restaurantGeneralData.WEBSITE ? restaurantGeneralData.WEBSITE : '-'} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <PhoneIcon />
                                </ListItemIcon>
                                <ListItemText primary={<b>Telefon:</b>} secondary={restaurantGeneralData.PHONE} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary={<b>Email:</b>} secondary={restaurantGeneralData.EMAIL ? restaurantGeneralData.EMAIL : '-'} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationCityIcon />
                                </ListItemIcon>
                                <ListItemText primary={<b>Şehir:</b>} secondary={restaurantGeneralData.CITY} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText primary={<b>Adres:</b>} secondary={restaurantGeneralData.ADDRESS} />
                            </ListItem>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <iframe
                            title={`${restaurantGeneralData.NAME} Haritası`}
                            style={{ width: '100%', height: '440px', borderRadius: '1rem', border: 'none' }}
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12058.864650261672!2d31.6051534!3d40.7308611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d3f6c08644e5d%3A0xd63ac0b020428182!2s${restaurantGeneralData.NAME}!5e0!3m2!1sen!2str!4v1659193880316!5m2!1sen!2str`}
                        ></iframe>
                    </Grid>
                    <Grid item xs={12} sm={12} md={1} />
                </Grid>
            </Grid >
        </>
    )
}

export default DetailPage;
