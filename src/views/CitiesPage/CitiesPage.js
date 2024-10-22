import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import resim1 from "../../images/narven3.jpg"
import resim2 from "../../images/GazelleResort.jpg"
import resim3 from "../../images/gölcük.jpg"
import resim4 from "../../images/narven4.jpg"
import resim5 from "../../images/GazelleResort.jpg"
import { ArrowBack, ArrowForward, LocationOn, DirectionsBus, Pets, LocalParkingOutlined, Done } from '@mui/icons-material';
import CityTouristInfo from '../../components/CityTouristInfo';
import { Link } from 'react-router-dom';
import '../../styles/font.css';


const useStyles = makeStyles({
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 2,
    },
    arrowButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
    },
});

//şehirler sayfası için mock data
const cities = [
    {
        name: 'Bolu',
        info: `Bolu, Türkiye'nin Karadeniz Bölgesi'nde yer alan bir ildir. Bolu, doğal güzellikleri ve tarihi yerleriyle ünlüdür. 
      Bolu'nun simgelerinden biri, doğal güzelliklere sahip olan Abant Gölü'dür. Ayrıca, Bolu'nun etrafı ormanlarla kaplıdır ve doğa sporları için ideal bir destinasyondur.`,
        images: [
            resim2, resim3, resim1
        ],
        features: [
            { icon: <Pets />, text: 'Evcil hayvan kabul edilir.' },
            { icon: <Done />, text: 'Spor Kıyafet Tavsiye Edilir.' },
            { icon: <DirectionsBus />, text: 'Yakın Civarlarda Toplu Taşıma Sistemi' },
            { icon: <LocalParkingOutlined />, text: 'Ücretsiz Otopark' }
        ]
    },
    {
        name: 'İstanbul',
        info: `İstanbul, Türkiye'nin en kalabalık ve en önemli şehridir. Hem Avrupa hem de Asya kıtaları üzerine kurulmuş olan İstanbul, 
      tarihi, kültürel ve ekonomik açıdan büyük bir zenginliğe sahiptir. İstanbul, muhteşem tarihi yapıları, boğaz manzarası, lezzetli mutfağı 
      ve canlı gece hayatı ile tanınır.`,
        images: [
            resim5, resim1, resim4
        ],
        features: [
            { icon: <Pets />, text: 'Evcil hayvan kabul edilir.' },
            { icon: <Done />, text: 'Spor Kıyafet Tavsiye Edilir.' },
            { icon: <DirectionsBus />, text: 'Yakın Civarlarda Toplu Taşıma Sistemi' },
            { icon: <LocalParkingOutlined />, text: 'Ücretsiz Otopark' }
        ]
    },
    {
        name: 'İzmir',
        info: `İzmir, Türkiye'nin batısında Ege Denizi kıyısında bulunan bir şehirdir. Türkiye'nin üçüncü büyük şehri olan İzmir, 
      tarihi ve turistik yerleriyle önemlidir. İzmir'in güzel sahilleri, antik kentleri ve lezzetli mutfağı turistlerin ilgisini çeker.`,
        images: [
            resim1, resim2, resim3
        ],
        features: [
            { icon: <Pets />, text: 'Evcil hayvan kabul edilir.' },
            { icon: <Done />, text: 'Spor Kıyafet Tavsiye Edilir.' },
            { icon: <DirectionsBus />, text: 'Yakın Civarlarda Toplu Taşıma Sistemi' },
            { icon: <LocalParkingOutlined />, text: 'Ücretsiz Otopark' }
        ]
    },
    {
        name: 'Ankara',
        info: `Ankara, Türkiye'nin başkenti ve ikinci büyük şehridir. Türkiye'nin politik merkezi olarak önemli bir rol oynamaktadır. 
      Ankara, tarihi ve modern yapıları, kültürel etkinlikleri ve gelişmiş altyapısı ile dikkat çeker.`,
        images: [
            resim1, resim2, resim3
        ],
        features: [
            { icon: <Pets />, text: 'Evcil hayvan kabul edilir.' },
            { icon: <Done />, text: 'Spor Kıyafet Tavsiye Edilir.' },
            { icon: <DirectionsBus />, text: 'Yakın Civarlarda Toplu Taşıma Sistemi' },
            { icon: <LocalParkingOutlined />, text: 'Ücretsiz Otopark' }
        ]
    },
    {
        name: 'Antalya',
        info: `Antalya, Türkiye'nin Akdeniz kıyısında yer alan ve turizm açısından önemli bir şehridir. Antalya, muhteşem plajları, antik kentleri, 
      doğal güzellikleri ve eğlence merkezleriyle ünlüdür. Yaz turizmi için popüler bir destinasyondur.`,
        images: [
            resim1, resim2, resim3
        ],
        features: [
            { icon: <Pets />, text: 'Evcil hayvan kabul edilir.' },
            { icon: <DirectionsBus />, text: 'Yakın Civarlarda Toplu Taşıma Sistemi' },
            { icon: <Done />, text: 'Spor Kıyafet Tavsiye Edilir.' },
            { icon: <LocalParkingOutlined />, text: 'Ücretsiz Otopark' }
        ]
    }
];




function CitiesPage() {
    const classes = useStyles();
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [currentImage, setCurrentImage] = useState(0);
    const selectedCityInfo = selectedCity.info;

    const handleCityChange = (city) => {
        setSelectedCity(city);
    };

    const handlePrevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex === 0 ? selectedCity.images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex === selectedCity.images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <Grid container component="main" spacing={2} justifyContent="center">
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    {cities.map((city) => (
                        <Button
                            key={city.name}
                            variant={city.name === selectedCity.name ? 'contained' : 'outlined'}
                            onClick={() => handleCityChange(city)}
                            size='large'
                            style={{
                                textTransform: 'capitalize',
                                borderRadius: '2rem',
                                fontSize: '1.3rem',
                                margin: '2rem 0.5rem',
                                backgroundColor: city.name === selectedCity.name ? 'black' : 'white',
                                color: city.name === selectedCity.name ? 'white' : 'black',
                                border: `0.12rem solid ${city.name !== selectedCity.name ? 'black' : 'black'}`,
                                width: '10rem'
                            }}
                        >
                            {city.name}
                        </Button>
                    ))}
                </Grid>
                <Grid item xs={1} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton disableRipple onClick={handlePrevImage}>
                        <ArrowBack sx={{ fontSize: '3rem', backgroundColor: 'rgba(0, 0, 0, 0.1)', border: '1px solid black', borderRadius: '100%', color: 'black' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={10} sm={8} md={8} lg={8}>
                    <Card sx={{ mt: 2, borderRadius: '1rem' }}>
                        <CardMedia
                            component="img"
                            height="500"
                            image={selectedCity.images[currentImage]}
                            alt="Resim Açıklaması"
                            className="fade"
                        />
                    </Card>
                </Grid>
                <Grid item xs={1} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <IconButton disableRipple onClick={handleNextImage}>
                        <ArrowForward sx={{ fontSize: '3rem', backgroundColor: 'rgba(0, 0, 0, 0.1)', border: '1px solid black', borderRadius: '100%', color: 'black' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={12} sm={12} md={4} />
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h3" gutterBottom align="center" sx={{ fontFamily: 'Shadows Into Light' }}>
                        {selectedCity.name.toUpperCase()}
                    </Typography>
                    <Typography variant="h5" align="center" sx={{ fontFamily: 'Shadows Into Light' }}>
                        {selectedCityInfo}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} />
                <Grid item xs={12} sm={12} md={3} />
                <Grid item xs={12} sm={12} md={6}>
                    <Divider variant='fullWidth' sx={{ backgroundColor: 'yellow' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} />
                {/* Seçilen Şehrin Bilgileri */}
                <CityTouristInfo city={selectedCity?.name} />
                {/* Seçilen Şehrin Bilgileri */}
                <Grid item xs={12} sm={12} md={3} />
                <Grid item xs={12} sm={12} md={6}>
                    <Divider variant='fullWidth' sx={{ backgroundColor: 'yellow' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={{ mb: 5 }} />
                <Grid item xs={12} sm={12} md={12} sx={{ mb: 5 }}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={1.5} />
                        <Grid item xs={12} sm={12} md={3} sx={{ cursor: 'pointer', textDecoration: 'none' }}
                            component={Link}
                            to={`/restaurants/${selectedCity.name}`}
                        >
                            <Card sx={{ minWidth: 275, margin: '1rem', borderRadius: '1rem' }}
                            >
                                <CardMedia
                                    component='img'
                                    height='300'
                                    image={resim4}
                                    title="Restoranlar"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2" textAlign='center' sx={{ fontFamily: 'Pacifico' }}>
                                        RESTORANLAR
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} sx={{ cursor: 'pointer', textDecoration: 'none' }}
                            component={Link}
                            to={`/hotels/${selectedCity.name}`}
                        >
                            <Card sx={{ minWidth: 275, margin: '1rem', borderRadius: '1rem' }}>
                                <CardMedia
                                    component='img'
                                    height='300'
                                    image={resim3}
                                    title="Oteller"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2" textAlign='center' sx={{ fontFamily: 'Pacifico' }}>
                                        OTELLER
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} sx={{ cursor: 'pointer', textDecoration: 'none' }}
                            component={Link}
                            to={`/destinations/${selectedCity.name}`}
                        >
                            <Card sx={{ minWidth: 275, margin: '1rem', borderRadius: '1rem' }}>
                                <CardMedia
                                    component='img'
                                    height='300'
                                    image={resim2}
                                    title="Destinasyonlar"
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2" textAlign='center' sx={{ fontFamily: 'Pacifico' }}>
                                        DESTİNASYONLAR
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={1.5} />
                    </Grid>
                </Grid>
            </Grid >
        </>
    );
}

export default CitiesPage;
