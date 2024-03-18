import React, { useState } from 'react';
import { Card, CardMedia, Divider, Grid, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import resim1 from "../../images/RegisterPageImage.jpg"
import resim2 from "../../images/LoginPageImage.jpg"
import resim3 from "../../images/login2.jpg"
import resim4 from "../../images/login3.jpg"
import resim5 from "../../images/logo4.jpg"
import { makeStyles } from '@mui/styles';
import ReactCardSlider from 'react-card-slider-component';
import '../../styles/transition.css';

const useStyles = makeStyles((theme) => ({
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
}));

function MainPage() {
    const classes = useStyles();
    const [currentImage, setCurrentImage] = useState(0);
    const images = [resim3, resim4, resim2, resim1];

    const handlePrevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const sliderClick = (slider) => {
        alert("hello world");
    }
    const slides = [
        { image: resim1, title: "İSTANBUL", description: "This is a description", clickEvent: sliderClick },
        { image: resim2, title: "BOLU", description: "This is a second description", clickEvent: sliderClick },
        { image: resim3, title: "ANTALYA", description: "This is a third description", clickEvent: sliderClick },
        { image: resim4, title: "İZMİR", description: "This is a fourth description", clickEvent: sliderClick },
        { image: resim5, title: "ANKARA", description: "This is a fifth description", clickEvent: sliderClick },
    ]

    return (
        <>
            <Grid container component="main" sx={{ backgroundColor: 'antiquewhite' }}>
                <Grid item xs={2} sm={2} md={2} lg={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton disableRipple onClick={() => { handlePrevImage() }}>
                        <ArrowBack
                            sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', border: '1px solid black', borderRadius: '100%', color: 'black' }}
                        />
                    </IconButton>
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8}>
                    <Card sx={{ mt: 2, borderRadius: '1rem' }}>
                        <CardMedia
                            component="img"
                            height="500"
                            image={images[currentImage]}
                            alt="Resim Açıklaması"
                            className="fade"
                        />
                    </Card>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <IconButton
                        disableRipple
                        onClick={() => { handleNextImage() }}
                    >
                        <ArrowForward
                            sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', border: '1px solid black', borderRadius: '100%', color: 'black' }}
                        />
                    </IconButton>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} />
                <Grid item xs={8} sm={8} md={8} lg={8}>
                    <Typography component="h1" variant="h5" gutterBottom sx={{ mb: 1.5, mt: 8 }}>
                        <i><b>Keşfedilecek çok daha fazla şey</b></i>
                    </Typography>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} />
                <Grid item xs={2} sm={2} md={2} lg={2} />
                <Grid item xs={9} sm={9} md={9} lg={9}>
                    <ReactCardSlider slides={slides} />
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} />
                <Grid item xs={12}>
                    <Divider sx={{ mt: 2, mb: 2 }} />
                    <Typography variant="body2" align="center" color="textSecondary">
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={8} sm={6} md={6}>
                                <Typography variant="subtitle1" style={{ marginBottom: '0.5rem' }}>GeziYolunda Hakkında</Typography>
                                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                    <li><a href="#1" style={{ color: 'black' }}>Hakkımızda</a></li>
                                    <li><a href="#2" style={{ color: 'black' }}>Basın</a></li>
                                    <li><a href="#3" style={{ color: 'black' }}>Kaynaklar ve Politikalar</a></li>
                                </ul>
                            </Grid>
                            <Grid item xs={8} sm={6} md={6}>
                                <Typography variant="subtitle1" style={{ marginBottom: '0.5rem' }}>Keşfedin</Typography>
                                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                                    <li><a href="#4" style={{ color: 'black' }}>Bir yorum yazın</a></li>
                                    <li><a href="#5" style={{ color: 'black' }}>Yer Ekle</a></li>
                                    <li><a href="#6" style={{ color: 'black' }}>Katılın</a></li>
                                    <li><a href="#7" style={{ color: 'black' }}>Travellers' Choice</a></li>
                                    <li><a href="#8" style={{ color: 'black' }}>Eko Liderler</a></li>
                                    <li><a href="#9" style={{ color: 'black' }}>Yardım Merkezi</a></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );

}

export default MainPage;
