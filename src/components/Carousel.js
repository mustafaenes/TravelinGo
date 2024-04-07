import React, { useState } from 'react';
import { IconButton, Radio } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevSlide = () => {
        const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div
            style={{
                position: 'relative',
                maxWidth: '100%',
                overflow: 'hidden',
                marginBottom: '20px', // Düğmelerin altında bir boşluk bırakmak için
                borderRadius: '1.5rem' // Apply border-radius to the container
            }}
        >
            <IconButton
                onClick={goToPrevSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '5px',
                    transform: 'translateY(-50%)',
                    zIndex: 1
                }}
            >
                <NavigateBeforeIcon style={{ fontSize: '2rem', color: 'white' }} />
            </IconButton>
            <IconButton
                onClick={goToNextSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '5px',
                    transform: 'translateY(-50%)',
                    zIndex: 1
                }}
            >
                <NavigateNextIcon style={{ fontSize: '2rem', color: 'white' }} />
            </IconButton>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end', // Resimlerin alt kısmına hizalama
                    position: 'absolute',
                    bottom: '10px',
                    width: '100%',
                    zIndex: 1
                }}
            >
                {images.map((image, index) => (
                    <Radio
                        key={index}
                        checked={currentIndex === index}
                        onChange={() => goToSlide(index)}
                        value={index}
                        name="radio-buttons"
                        style={{ padding: '5px', marginLeft: '5px', marginRight: '5px', color: 'white' }}
                    />
                ))}
            </div>
            <div
                style={{
                    display: 'flex',
                    transition: 'transform 0.8s',
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        height={700}
                        src={image.url}
                        alt={`Slide ${index + 1}`}
                        style={{
                            flex: '0 0 100%',
                            maxWidth: '100%',
                            display: 'block',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
