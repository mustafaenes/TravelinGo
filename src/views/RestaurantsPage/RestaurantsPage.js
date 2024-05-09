import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { useParams } from 'react-router-dom';
import { Alert, Backdrop, Button, Card, CardContent, CardMedia, CircularProgress, Divider, Grid, IconButton, Snackbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LocationOn, DirectionsBus, Pets, LocalParkingOutlined, Done } from '@mui/icons-material';
import * as Icons from '@mui/icons-material'
import resim2 from "../../images/LoginPageImage.jpg"
import resim3 from "../../images/login2.jpg"
import resim4 from "../../images/login3.jpg"
import '../../styles/font.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    animateIn: {
        opacity: 0,
        transform: 'translateX(50px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
    },
    animateInActive: {
        opacity: 1,
        transform: 'translateX(0)',
    },
}));

function RenderIcons(data) {
    const IconComponent = Icons[data.data]; // İkon adına göre bileşeni al
    // Eğer geçerli bir bileşen varsa, JSX olarak döndür
    return IconComponent ? <IconComponent /> : null;
}

function RestaurantsPage() {
    const classes = useStyles();
    const { city } = useParams();


    const [animate, setAnimate] = useState(false);
    const [restaurantGeneralData, setRestaurantGeneralData] = React.useState({});
    const [restaurantsFeatures, setRestaurantsFeatures] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [uyari, setUyari] = React.useState(false);
    const [uyariTip, setUyariTip] = React.useState('info');
    const [responseMessage, setresponseMessage] = React.useState({
        ErrorCode: '0',
        ErrorDescription: 'success_message'
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        setAnimate(true);
    }, []);

    useEffect(() => {
        getAllRestaurantsInformations(city);
        getAllRestaurantsFeatures(city);
    }, []);


    const getAllRestaurantsInformations = (City) => {
        const dataConfig = {
            headers: { 'Content-Type': 'application/json' }
        };

        setLoading(true);
        axios.get(`/GetAllRestraurantsInformations/${City}`, dataConfig)
            .then(response => {
                const restaurantData = response.data;
                setRestaurantGeneralData(restaurantData);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setUyari(true);
                setresponseMessage({ ErrorCode: '1', ErrorDescription: 'error_message' });
            });
    }

    const getAllRestaurantsFeatures = (City) => {
        const dataConfig = {
            headers: { 'Content-Type': 'application/json' }
        };

        setLoading(true);
        axios.get(`/GetAllRestraurantsFeatures/${City}`, dataConfig)
            .then(response => {
                const data = response.data;
                setRestaurantsFeatures(data);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setUyari(true);
                setresponseMessage({ ErrorCode: '1', ErrorDescription: 'error_message' });
            });
    }

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
            <Grid container component="main" spacing={2} justifyContent="center" className={`${classes.animateIn} ${animate ? classes.animateInActive : ''}`}>
                <Grid item xs={12} sm={12} md={3} />
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ borderRadius: '1rem', mt: 4 }}>
                        <CardMedia
                            component="img"
                            image={resim2}
                            alt={'Bolu'}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} />
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant="h3" gutterBottom align="center" marginTop={2} sx={{ fontFamily: 'Shadows Into Light' }}>
                            BOLU
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} />
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}></Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}></Grid>
                </Grid>
                <Grid container sx={{ ml: 5 }}>
                    <Grid item xs={12} sm={12} md={1} />
                    <Grid item xs={12} sm={12} md={5}>
                        <Typography variant="h3" gutterBottom align="left" marginTop={2} sx={{ fontFamily: 'Shadows Into Light' }}>
                            Tüm Restoranlar
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} />
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={2}></Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}></Grid>
                </Grid>
                <Grid container spacing={5} sx={{ m: 5 }}>
                    {Array.isArray(restaurantGeneralData) && restaurantGeneralData.map((restaurant, index) => (
                        <Grid
                            key={index}
                            container
                            sx={{ mb: 5, textDecoration: 'none', color: 'black' }}
                            component={Link}
                            to={`/detail/${restaurant.location_id}`}
                        >
                            <Grid item xs={12} sm={12} md={1} />
                            <Grid item xs={12} sm={12} md={4}>
                                <Card sx={{ borderRadius: '1rem', mr: 4 }}>
                                    <CardMedia
                                        component="img"
                                        image={resim2}
                                        // image={restaurant.url}
                                        alt={restaurant.name}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Typography variant="h4" gutterBottom align="left">
                                    {restaurant.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    gutterBottom
                                    color="text.secondary"
                                    display="flex"
                                    alignItems="center"
                                    sx={{ textDecoration: 'underline', mb: 3 }}
                                >
                                    <LocationOn sx={{ marginBottom: '0.5rem' }} />
                                    {restaurant.location + '/Türkiye'}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {restaurant.description}
                                </Typography>
                                <Typography variant="h6" color="text.primary" sx={{ marginTop: '1rem' }} >
                                    <b>{'Bunun için Mükemmel:'}</b>
                                </Typography>
                                {Array.isArray(restaurantsFeatures) && restaurantsFeatures.map((feature, featureIndex) => (
                                    feature.location_id === restaurant.location_id &&
                                    <Button
                                        key={featureIndex}
                                        variant='outlined'
                                        size='medium'
                                        disabled
                                        style={{
                                            textTransform: 'capitalize',
                                            borderRadius: '2rem',
                                            fontSize: '1.1rem',
                                            margin: '1rem 0.5rem 1rem 0.5rem',
                                            color: 'black',
                                            backgroundColor: '#f0ebcc',
                                            border: '0'
                                        }}
                                    >
                                        {/* Icon için uygun şekilde buraya ekleme */}
                                        <RenderIcons data={feature.icon} />{' '}{feature.text}
                                    </Button>
                                ))}
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} />
                        </Grid>
                    ))}
                </Grid>

            </Grid>
        </>
    )
}



export default RestaurantsPage