import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Close as CloseIcon, ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const ImageViewer = ({ images, currentIndex = 0, onClose }) => {
    const [index, setIndex] = useState(currentIndex);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    textAlign: 'center',
                }}
            >
                <img
                    src={images[index].image}
                    alt={images[index].title}
                    style={{
                        maxWidth: '80%',
                        maxHeight: '80vh',
                        borderRadius: '8px',
                    }}
                />
                <Typography
                    variant="h6"
                    sx={{
                        color: 'white',
                        mt: 2,
                    }}
                >
                    {images[index].title}
                </Typography>
                {images.length > 1 && (
                    <>
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: 10,
                                transform: 'translateY(-50%)',
                                zIndex: 100,
                            }}
                            onClick={handlePrev}
                        >
                            <ArrowBackIcon
                                sx={{
                                    color: 'white',
                                    fontSize: '2rem',
                                }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: 10,
                                transform: 'translateY(-50%)',
                                zIndex: 100,
                            }}
                            onClick={handleNext}
                        >
                            <ArrowForwardIcon
                                sx={{
                                    color: 'white',
                                    fontSize: '2rem',
                                }}
                            />
                        </IconButton>
                    </>
                )}
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 100,
                    }}
                    onClick={onClose}
                >
                    <CloseIcon
                        sx={{
                            color: 'white',
                            fontSize: '2rem',
                        }}
                    />
                </IconButton>
            </Box>
        </Box>
    );
};

export default ImageViewer;
