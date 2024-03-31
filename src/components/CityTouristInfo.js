import React from 'react'
import { Grid, Card, CardMedia, Typography, Button, CssBaseline } from '@mui/material';
import resim2 from "../images/LoginPageImage.jpg"
import resim3 from "../images/login2.jpg"
import resim4 from "../images/login3.jpg"
import { LocationOn, DirectionsBus, Pets, LocalParkingOutlined, Done } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CityTouristInfo = ({ city }) => {

    const cities = {
        'Bolu': [
            {
                name: 'Gölcük Tabiat Parkı',
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
                location_id: 15683896,
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
                location_id: 15683897,
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
        ],
        'İstanbul': [
            {
                name: "Ayasofya Müzesi",
                location_id: 15683898,
                location: "İstanbul/Türkiye",
                description: `Ayasofya, İstanbul'da bulunan tarihi bir yapıdır. Bizans İmparatoru I. Justinianus tarafından 537 yılında kilise olarak inşa edilmiş, daha sonra camiye çevrilmiş ve şimdi müze olarak kullanılmaktadır. Ayasofya, mimarisi, büyük kubbesi ve tarihi ile dünyanın en önemli anıtlarından biridir.`,
                image: resim4,
                features: [
                    { icon: "📜", text: "Tarih" },
                    { icon: "🎨", text: "Sanat" },
                    { icon: "🕌", text: "Mimari" },
                ],
            },
            {
                name: "Topkapı Sarayı",
                location_id: 15683899,
                location: "İstanbul/Türkiye",
                description: `Topkapı Sarayı, İstanbul'da Osmanlı İmparatorlarına ev sahipliği yapmış tarihi bir saraydır. Bugün müze olarak kullanılan saray, İstanbul'un en çok ziyaret edilen turistik mekanlarından biridir. Saray, Osmanlı İmparatorluğu'nun gücünü ve ihtişamını gözler önüne sermektedir.`,
                image: resim3,
                features: [
                    { icon: "🏰", text: "Saray" },
                    { icon: "🎨", text: "Sanat Eserleri" },
                    { icon: "📜", text: "Tarih" },
                ],
            },
            {
                name: "Galata Kulesi",
                location: "İstanbul/Türkiye",
                location_id: 15683890,
                description: `Galata Kulesi, İstanbul'un Beyoğlu ilçesinde bulunan tarihi bir kuledir. 14. yüzyılda Cenevizliler tarafından inşa edilmiştir. Kule, İstanbul'un panoramik manzarasını sunmasıyla ünlüdür ve şehrin en önemli simgelerinden biridir.`,
                image: resim2,
                features: [
                    { icon: "🏰", text: "Manzara" },
                    { icon: "📜", text: "Tarih" },
                    { icon: "🌉", text: "Kültür" },
                ],
            },
        ],
    };


    return (
        <>
            <Grid container spacing={5} sx={{ m: 5 }}>
                {cities[city].map((touristSpot, index) => (
                    <Grid
                        key={index}
                        container
                        sx={{ mb: 5, textDecoration: 'none' }}
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
                                {touristSpot.location}
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
        </>
    )
}

export default CityTouristInfo;
