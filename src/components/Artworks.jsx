import React, { useState } from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import { Modal } from '@mui/material';
import ImageViewer from './ImageViewer';
import chainedToLabelsIMG from '../assets/artworks/chained_to_labels.png';
import prideBooksIMG from '../assets/artworks/pride_books.png';
import stuckAtTheDoorIMG from '../assets/artworks/stuck_at_the_door.png';
import standingTogetherIMG from '../assets/artworks/standing_together.png';
import pridePlanetsIMG from '../assets/artworks/pride_planets.png';
import flowerIMG from '../assets/artworks/flower_image.png';

const artworks = [
    {
        title: 'Chained To Labels Artwork',
        image: chainedToLabelsIMG,
    },
    {
        title: 'Stuck At The Door Artwork',
        image: stuckAtTheDoorIMG,
    },
    {
        title: 'Standing Together Artwork',
        image: standingTogetherIMG,
    },
    {
        title: 'Pride Planets Artwork',
        image: pridePlanetsIMG,
    },
    {
        title: 'Pride Books Artwork',
        image: prideBooksIMG,
    },
    {
        title: '',
        image: flowerIMG,
    },
];

function Artworks() {
    const [openViewer, setOpenViewer] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpenViewer = (image) => {
        setSelectedImage(image);
        setOpenViewer(true);
    };

    const handleCloseViewer = () => {
        setOpenViewer(false);
        setSelectedImage(null);
    };

    return (
        <Box
            sx={{
                padding: '2rem',
            }}
            id="artworks"
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    color: '#ffffff',
                }}
            >
                Artworks
            </Typography>
            <Grid2
                spacing={1}
                sx={{
                    display: 'grid',
                    justifyContent: 'center',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    },
                    gap: 4,
                }}
            >
                {artworks.map((a, i) => (
                    <Box
                        key={i}
                        sx={{
                            position: 'relative',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '& img': {
                                width: '100%',
                                maxWidth: {
                                    xs: '150px',
                                    sm: '200px',
                                    md: '300px',
                                },
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            },
                            '&:hover img': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                            },
                        }}
                        onClick={() => handleOpenViewer(a)}
                    >
                        <img src={a.image} alt={a.title} />
                    </Box>
                ))}
            </Grid2>
            <Modal
                open={openViewer}
                onClose={handleCloseViewer}
            >
                <ImageViewer
                    images={artworks}
                    currentIndex={artworks.indexOf(selectedImage)}
                    onClose={handleCloseViewer}
                />
            </Modal>
        </Box>
    );
}

export default Artworks;
