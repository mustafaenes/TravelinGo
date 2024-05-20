import React from 'react';
import { Container, Typography, Box, Avatar, Grid, Paper, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import golcuk from '../../images/gölcük.jpg';
import gulnur from '../../images/gulnur.jpg';
import mustafa from '../../images/mustafa.jpg';
import '../../styles/font.css';

// Kullanıcılar için stil oluşturmak
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 4,
        marginTop: 4,
    },
    headerImage: {
        width: '100%',
    },
    avatar: {
        width: 12, // Profil fotoğraflarının boyutunu artırdık
        height: 12, // Profil fotoğraflarının boyutunu artırdık
        marginBottom: 2,
    },
    paper: {
        padding: 2,
        marginTop: 2,
    },
    name: {
        marginTop: 1,
    },
}));

const AboutUsPage = () => {
    const classes = useStyles();

    return (
        <>
            <Box>
                <CardMedia
                    component={'img'}
                    height={'600'}
                    src={golcuk}
                    alt="Manzara"
                    className={classes.headerImage}
                />
            </Box>
            <Container className={classes.root}>
                <Box display="flex" justifyContent="center" mb={4}>
                    <Typography variant="h2" component="h2" gutterBottom sx={{ fontFamily: 'Shadows Into Light' }}>
                        Hakkımızda
                    </Typography>
                </Box>
                <Typography variant="h5" paragraph sx={{ fontFamily: 'Shadows Into Light' }}>
                    Gezi Yolunda, dünyayı keşfetmek isteyen gezginler için tasarlanmış bir seyahat sitesidir. Misyonumuz,
                    seyahatseverlere en iyi gezi deneyimlerini sunmak ve onları ilham verici destinasyonlarla buluşturmaktır.
                </Typography>
                <Typography variant="h5" paragraph sx={{ fontFamily: 'Shadows Into Light' }}>
                    Ekibimiz, seyahat etmeyi seven ve yeni yerler keşfetme tutkusuna sahip insanlardan oluşmaktadır. Bizimle
                    birlikte, dünyayı daha yakından tanıma fırsatını yakalayacak ve unutulmaz anılar biriktireceksiniz.
                </Typography>
                <Box mt={4}>
                    <Typography variant="h3" component="h2" gutterBottom sx={{ fontFamily: 'Shadows Into Light' }}>
                        Ekibimiz
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Paper className={classes.paper} elevation={3}>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <CardMedia
                                        component={'img'}
                                        height={'600'}
                                        src={mustafa}
                                        alt="Manzara"
                                        className={classes.headerImage}
                                    />
                                    <Typography variant="h4" component="h4" className={classes.name} sx={{ mt: 2, fontFamily: 'Shadows Into Light' }}>
                                        Mustafa Enes Saatçi
                                    </Typography>
                                    <Typography variant="body1" color="MenuText" align="center" sx={{ fontFamily: 'Shadows Into Light' }}>
                                        CEO & Kurucu Ortak
                                    </Typography>
                                    <Typography variant="body1" align="center" sx={{ fontFamily: 'Shadows Into Light' }}>
                                        Mustafa, seyahat etmeye olan tutkusu ve vizyonuyla Gezi Yolunda'yı kurdu. O, dünyayı dolaşarak
                                        farklı kültürleri ve deneyimleri keşfetmeyi sever.
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Paper className={classes.paper} elevation={3}>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <CardMedia
                                        component={'img'}
                                        height={'600'}
                                        src={gulnur}
                                        alt="Manzara"
                                        className={classes.headerImage}
                                    />
                                    {/* <Avatar alt="Gülnur Korkmaz" src="/static/images/avatar/2.jpg" className={classes.avatar} /> */}
                                    <Typography variant="h4" component="h4" className={classes.name} sx={{ mt: 2, fontFamily: 'Shadows Into Light' }}>
                                        Gülnur Korkmaz
                                    </Typography>
                                    <Typography variant="body1" color="MenuText" align="center" sx={{ fontFamily: 'Shadows Into Light' }}>
                                        CTO & Kurucu Ortak
                                    </Typography>
                                    <Typography variant="body1" align="center" sx={{ fontFamily: 'Shadows Into Light' }}>
                                        Gülnur, seyahat etmeye olan tutkusu ve vizyonuyla Gezi Yolunda'yı kurdu. O, dünyayı dolaşarak
                                        farklı kültürleri ve deneyimleri keşfetmeyi sever.
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default AboutUsPage;
