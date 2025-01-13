import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, List, ListItem, Modal, Divider } from '@mui/material';
import stuckAtTheDoorIMG from '../assets/artworks/stuck_at_the_door.png';
import petition from '../assets/petition.json';
import ImageViewer from './ImageViewer';

function Petition({ updated = 'N/A' }) {
    const [signaturesList, setSignaturesList] = useState([]);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        setSignaturesList(petition);
    }, []);

    return (
        <Card
            sx={{
                maxWidth: 500,
                margin: 'auto',
                boxShadow: 3,
                borderRadius: 2,
                marginTop: {
                    xs: '1rem',
                    md: '2rem',
                },
                textAlign: 'center',
                padding: 2,
            }}
            id="petition"
        >
            <CardMedia
                component="img"
                image={stuckAtTheDoorIMG}
                alt="Stuck At The Door Artwork"
                onClick={() => setShowImage(true)}
                sx={{
                    objectFit: 'cover',
                    borderRadius: 2,
                    cursor: 'pointer',
                }}
            />
            <CardContent>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                >
                    Support Our Cause!
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                >
                    By signing our petition, we'll have a much greater chance of actually making change. Every signature
                    counts!
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    marginTop="8px"
                    gutterBottom
                >
                    <strong>{signaturesList.length}</strong> people have signed this petition as of {updated}.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    href="https://www.change.org/Gender-Neutral-Bathrooms"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        marginTop: 2,
                    }}
                >
                    Sign the Petition
                </Button>
                <Box
                    sx={{
                        maxHeight: 200,
                        overflowY: 'scroll',
                        marginTop: 3,
                        border: '1px solid #ccc',
                        borderRadius: 2,
                        padding: 1,
                    }}
                >
                    <List>
                        {signaturesList
                            .slice()
                            .reverse()
                            .map((e, i) => (
                                <React.Fragment key={i}>
                                    <ListItem
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            padding: '4px 8px',
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'rgba(0, 0, 0, 0.2)',
                                            }}
                                        >
                                            {signaturesList.length - i}:
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 'bold',
                                                marginLeft: '16px',
                                                flexGrow: 1,
                                            }}
                                        >
                                            {e.name || 'Anonymous'}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {e.date || 'Unknown'}
                                        </Typography>
                                    </ListItem>
                                    {i < signaturesList.length - 1 && <Divider />}
                                </React.Fragment>
                            ))}
                    </List>
                    <Modal
                        open={showImage}
                        onClose={() => setShowImage(false)}
                    >
                        <ImageViewer
                            images={[
                                {
                                    image: stuckAtTheDoorIMG,
                                    title: 'Stuck At The Door',
                                },
                            ]}
                            onClose={() => setShowImage(false)}
                        />
                    </Modal>
                </Box>
            </CardContent>
        </Card>
    );
}

export default Petition;
