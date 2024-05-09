import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { useParams } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LocationOn, DirectionsBus, Pets, LocalParkingOutlined, Done } from '@mui/icons-material';
import WifiIcon from '@mui/icons-material/Wifi';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import AccessibleIcon from '@mui/icons-material/Accessible';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import PaymentIcon from '@mui/icons-material/Payment';
import ChairIcon from '@mui/icons-material/Chair';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import WineBarIcon from '@mui/icons-material/WineBar';
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


function RestaurantsPage() {
    const classes = useStyles();
    const { city } = useParams();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Sayfa yüklendiğinde animasyon başlatılıyor.
        window.scrollTo(0, 0);
        setAnimate(true);
    }, []);
    const [cityDetails, setCityDetails] = React.useState([]);

    const cities =
        [
            {
                name: 'Bolu Hanzade Restoran',
                location_id: 15683895,
                location: 'Bolu, Türkiye',
                description: 'Bolu, Türkiye\'nin Karadeniz Bölgesi\'nde yer alan bir ildir. Bolu, doğal güzellikleri ve tarihi yerleriyle ünlüdür. Bolu\'nun simgelerinden biri, doğal güzelliklere sahip olan Abant Gölü\'dür. Ayrıca, Bolu\'nun etrafı ormanlarla kaplıdır ve doğa sporları için ideal bir destinasyondur.',
                features: [
                    { icon: <Pets />, text: 'Evcil hayvan kabul edilir.' },
                    { icon: <DirectionsBus />, text: 'Yakın Civarlarda Toplu Taşıma Sistemi' },
                    { icon: <Done />, text: 'Spor Kıyafet Tavsiye Edilir.' },
                    { icon: <LocalParkingOutlined />, text: 'Ücretsiz Otopark' }
                ],
                image: resim2
            },
            {
                name: 'Abant Gölü',
                location_id: 15683895,
                location: 'Bolu, Türkiye',
                description: 'Bolu, Türkiye\'nin Karadeniz Bölgesi\'nde yer alan bir ildir. Bolu, doğal güzellikleri ve tarihi yerleriyle ünlüdür. Bolu\'nun simgelerinden biri, doğal güzelliklere sahip olan Abant Gölü\'dür. Ayrıca, Bolu\'nun etrafı ormanlarla kaplıdır ve doğa sporları için ideal bir destinasyondur.',
                features: [
                    { icon: <DirectionsBus />, text: 'Yakın Civarlarda Toplu Taşıma Sistemi' },
                    { icon: <LocalParkingOutlined />, text: 'Ücretsiz Otopark' },
                    { icon: <Pets />, text: 'Evcil hayvan kabul edilir.' },
                    { icon: <Done />, text: 'Spor Kıyafet Tavsiye Edilir.' },
                ],
                image: resim3
            },
            {
                name: 'Yedi Göller Tabiat Parkı',
                location_id: 15683895,
                location: 'Bolu, Türkiye',
                description: 'Bolu, Türkiye\'nin Karadeniz Bölgesi\'nde yer alan bir ildir. Bolu, doğal güzellikleri ve tarihi yerleriyle ünlüdür. Bolu\'nun simgelerinden biri, doğal güzelliklere sahip olan Abant Gölü\'dür. Ayrıca, Bolu\'nun etrafı ormanlarla kaplıdır ve doğa sporları için ideal bir destinasyondur.',
                features: [
                    { icon: <Done />, text: 'Spor Kıyafet Tavsiye Edilir.' },
                    { icon: <LocalParkingOutlined />, text: 'Ücretsiz Otopark' },
                    { icon: <DirectionsBus />, text: 'Yakın Civarlarda Toplu Taşıma Sistemi' },
                    { icon: <Pets />, text: 'Evcil hayvan kabul edilir.' },
                ],
                image: resim4
            }
        ]



    return (
        <>
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
                    {cities?.map((touristSpot, index) => (
                        <Grid
                            key={index}
                            container
                            sx={{ mb: 5, textDecoration: 'none', color: 'black' }}
                            component={Link}
                            to={`/detail/${touristSpot.location_id}`}
                        >
                            <Grid item xs={12} sm={12} md={1} />
                            <Grid item xs={12} sm={12} md={4}>
                                <Card sx={{ borderRadius: '1rem', mr: 4 }}>
                                    <CardMedia
                                        component="img"
                                        image={touristSpot.image}
                                        alt={touristSpot.name}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Typography variant="h4" gutterBottom align="left">
                                    {touristSpot.name}
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
                                    {touristSpot.location + '/Türkiye'}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {touristSpot.description}
                                </Typography>
                                <Typography variant="h6" color="text.primary" sx={{ marginTop: '1rem' }} >
                                    <b>{'Bunun için Mükemmel:'}</b>
                                </Typography>
                                {touristSpot.features.map((feature, index) => (
                                    <Button
                                        key={index}
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
                                        {feature.icon}{' '}{feature.text}
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