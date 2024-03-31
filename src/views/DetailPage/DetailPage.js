import React, { useEffect } from 'react'
import { Typography, Grid, Card, CardContent, Box, Container, Divider, TextField, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Rating from '@mui/material/Rating';
import SimpleImageSlider from 'react-simple-image-slider'
import ImageSliderNavigation from 'react-simple-image-slider';
import { makeStyles } from '@mui/styles';
import '../../styles/font.css';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import resim1 from "../../images/RegisterPageImage.jpg"
import resim2 from "../../images/LoginPageImage.jpg"
import resim3 from "../../images/login2.jpg"
import { useParams } from 'react-router-dom';
import axios from '../../utils/axios';

const useStyles = makeStyles({
    sliderContainer: {
        textAlign: 'center',
    },
    contactInfo: {
        borderRadius: '1rem',
        backgroundColor: 'azure',
    },
});

function DetailPage() {
    const classes = useStyles();

    const { locationId } = useParams();
    const [restaurantGeneralData, setRestaurantGeneralData] = React.useState([]);

    useEffect(() => {
        getRestaurantDetails();
    }, [locationId])

    const getRestaurantDetails = () => {

        const dataConfig = {
            headers: { 'Content-Type': 'application/json' }
        };

        axios.get(`/GetRestaurantDetails/${locationId}`, dataConfig)
            .then(response => {
                setRestaurantGeneralData(response.data[0]);
                return;
            });
    }

    const images = [
        { url: resim1 },
        { url: resim2 },
        { url: resim3 },
    ];

    return (
        <Grid container component="main">
            <Grid item xs={12} sm={12} md={12}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: 1, marginLeft: 3 }}>
                    <Typography color="inherit"><i>Anasayfa</i></Typography>
                    <Typography color="inherit"><i>Şehirler</i></Typography>
                    <Typography color="inherit"><i>Bolu</i></Typography>
                    <Typography color="inherit"><i>Restoranlar</i></Typography>
                    <Typography color="textPrimary"><i>Mercan-i Restaurant</i></Typography>
                </Breadcrumbs>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={1} />
                <Grid item xs={12} sm={12} md={7} sx={{ marginTop: 3, marginBottom: 5 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'Shadows Into Light' }}>
                        Mercan-i Restaurant
                    </Typography>
                    <Rating name="rating" value={4.5} precision={0.5} readOnly sx={{ cursor: 'pointer' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={3} >
                    <Typography variant="body1" gutterBottom className='pacifico-regular' sx={{ mt: 8 }}>
                        <LocationOnIcon />Adres: 123 Örnek Caddesi, Örnek Mahallesi, Örnek Şehir
                    </Typography>
                    <Typography variant="body1" className='pacifico-regular'>
                        <PhoneIcon />Telefon: 555-555-5555
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
                <Typography variant="h5" textAlign='center' gutterBottom sx={{ mt: 4 }} className='pacifico-regular'>
                    Mercan-i Restaurant, Bolu'nun şık ve modern atmosferinde lezzetli yemekler sunan bir restorandır. Zengin menüsü ve özel tatlarıyla, konuklarına benzersiz bir yemek deneyimi sunar.
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
                            <ListItemText primary={<b>Web Sitesi:</b>} secondary="123 Örnek Caddesi, Örnek Mahallesi, Örnek Şehir" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText primary={<b>Telefon:</b>} secondary="555-555-5555" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary={<b>Email:</b>} secondary="info@example.com" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={<b>Şehir:</b>} secondary="Bolu/Türkiye" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText primary={<b>Adres:</b>} secondary="123 Örnek Caddesi, Örnek Mahallesi, Örnek Şehir" />
                        </ListItem>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <iframe
                        title="Mercan-i Restaurant Haritası"
                        style={{ width: '100%', height: '440px', borderRadius: '1rem', border: 'none' }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12058.864650261672!2d31.6051534!3d40.7308611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d3f6c08644e5d%3A0xd63ac0b020428182!2sMercan-i%20Restaurant!5e0!3m2!1sen!2str!4v1659193880316!5m2!1sen!2str"
                    ></iframe>
                </Grid>
                <Grid item xs={12} sm={12} md={1} />
            </Grid>
        </Grid >
    )
}

export default DetailPage;