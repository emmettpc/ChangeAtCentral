import React, { useState } from 'react';
import { Box, Grid2, Typography } from '@mui/material';
import { Modal } from '@mui/material';
import ImageViewer from './ImageViewer';
import chainedToLabelsIMG from '../assets/artworks/chained_to_labels.png';
import prideBooksIMG from '../assets/artworks/pride_books.png';
import stuckAtTheDoorIMG from '../assets/artworks/stuck_at_the_door.png';

const artworks = [
    { title: 'Chained To Labels Artwork', image: chainedToLabelsIMG },
    { title: 'Stuck At The Door Artwork', image: stuckAtTheDoorIMG },
    { title: 'Pride Books Artwork', image: prideBooksIMG },
];

function Artworks() {
    const [openViewer, setOpenViewer] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleOpenViewer = (image) => {
        setSelectedImage(image);
        setOpenViewer(true);
    };

    const handleCloseViewer = () => {
        setOpenViewer(false);
        setSelectedImage('');
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
                container
                spacing={3}
                sx={{
                    justifyContent: 'center',
                }}
            >
                {artworks.map((a, i) => (
                    <Grid2
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={i}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                '& img': {
                                    width: '100%',
                                    maxWidth: { xs: '150px', sm: '200px', md: '300px' },
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
                            onClick={() => handleOpenViewer(a.image)}
                        >
                            <img
                                src={a.image}
                                alt={a.title}
                            />
                        </Box>
                    </Grid2>
                ))}
            </Grid2>
            <Modal
                open={openViewer}
                onClose={handleCloseViewer}
            >
                <ImageViewer
                    imageUrl={selectedImage}
                    onClose={handleCloseViewer}
                />
            </Modal>
        </Box>
    );
}

export default Artworks;
