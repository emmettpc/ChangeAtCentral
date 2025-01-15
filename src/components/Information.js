import React, { useState } from 'react';
import { Box, Typography, Modal } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import chainedToLabelsIMG from '../assets/artworks/chained_to_labels.png';
import johnsonHighBathroomsIMG from '../assets/images/johnson_high_bathrooms.jpg';
import standingTogetherIMG from '../assets/artworks/standing_together.png';
import ImageViewer from './ImageViewer';

function Information() {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                custom1: 700,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    const [openViewer, setOpenViewer] = useState(false);
    const [imageId, setImageId] = useState(0);
    const [selectedImage, setSelectedImage] = useState({
        id: 0,
        title: 'N/A',
        image: null,
    });

    const handleOpenViewer = (id, image, title) => {
        setSelectedImage({
            id,
            title,
            image,
        });
        setOpenViewer(true);
    };

    const handleCloseViewer = () => {
        setOpenViewer(false);
        setSelectedImage({
            title: 'N/A',
            image: null,
        });
    };

    return (
        <Box
            sx={{
                marginTop: {
                    sm: '1rem',
                    md: '1.5rem',
                    lg: '2rem',
                },
            }}
            id="information"
        >
            <Typography
                variant="body1"
                sx={{
                    mb: 4,
                }}
            >
                Currently, Central High School has only one gender-neutral bathroom in the entire school, located in the
                nurse's office. This poses a significant issue for many genderqueer students who feel uncomfortable or
                unsafe using gendered restrooms. This limited access puts students in uncomfortable situations, often
                causing them to feel extra distress when simply trying to use the bathroom. Our goal is to add more
                gender-neutral bathrooms in the school to ensure all students, regardless of their gender identity, can
                feel comfortable and safe while going to the bathroom. It is crucial that these changes are made sooner
                rather than later, as it is affecting many genderqueer students right now. The longer that the bathrooms
                are left the same, the more students that will have to suffer for a basic human need when there is an
                easy solution.
            </Typography>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            custom1: 'row',
                        },
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 4,
                            }}
                        >
                            Other schools within the Saint Paul Public Schools (SPPS) district have already successfully
                            implemented changes to include more gender-neutral bathrooms. One example is Johnson High
                            School, which replaced all of their gendered restrooms with gender-neutral, floor-to-ceiling
                            stalls, creating gender non-specific spaces for students to feel safe in. This change not
                            only proved to be feasible but also had many positive outcomes, as many genderqueer students
                            reported feeling safer and more comfortable when using these new bathrooms. Johnson High's
                            modification shows that similar improvements can be made at Central High School, and
                            hopefully eventually all schools within the SPPS district.{' '}
                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        src={johnsonHighBathroomsIMG}
                        alt="Johnson Highschool Gender-Neutral Bathrooms Image"
                        sx={{
                            width: {
                                xs: '90%',
                                custom1: '40%',
                            },
                            maxWidth: '600px',
                            minWidth: '250px',
                            height: 'auto',
                            objectFit: 'cover',
                            marginLeft: '20px',
                            float: 'right',
                            cursor: 'pointer',
                        }}
                        onClick={() =>
                            handleOpenViewer(
                                0,
                                johnsonHighBathroomsIMG,
                                'Johnson Highschool Gender-Neutral Bathrooms Image',
                            )
                        }
                    />
                </Box>
            </ThemeProvider>
            <Box>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                    }}
                >
                    The lack of gender-neutral bathrooms at Central particularly impacts BIPOC students who are also
                    genderqueer. This limited access forces these students to choose between using restrooms where they
                    might not feel safe or comfortable, and avoiding the restroom altogether, which can negatively
                    impact their daily school experience, and can even have negative health effects from avoiding using
                    restrooms at school. These students face unique challenges at the intersection of racial and gender
                    identity discrimination, which creates a hostile environment that can lead to increased skipping and
                    lower academic performance.{' '}
                    <Box
                        component="img"
                        src={chainedToLabelsIMG}
                        alt="Chained to Labels Artwork"
                        sx={{
                            width: '40%',
                            maxWidth: '600px',
                            minWidth: '300px',
                            height: 'auto',
                            objectFit: 'contain',
                            float: 'left',
                            marginRight: '16px',
                            marginTop: '8px',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleOpenViewer(1, chainedToLabelsIMG, 'Chained to Labels Artwork')}
                    />
                    Intersectionality highlights how BIPOC students, already dealing with systemic racial barriers,
                    experience heightened difficulties when their gender identity is further marginalized. On top of
                    that, the absence of inclusive bathroom facilities sends a message that these students' identities
                    are not recognized or valued as much as the rest of the students, which can make them feel a sense
                    of not belonging in the school community. By adding gender-neutral bathrooms, Central High can take
                    a critical step in reducing the impact of these intersecting struggles, creating a more safe and
                    equitable environment where all students, especially genderqueer and BIPOC students, can feel safe,
                    respected, and supported.
                </Typography>
            </Box>
            <Modal
                open={openViewer}
                onClose={handleCloseViewer}
            >
                {
                    (selectedImage.id = 1 ? (
                        <ImageViewer
                            images={[
                                {
                                    title: selectedImage.title,
                                    image: selectedImage.image,
                                },
                                {
                                    title: 'Standing Together Artwork',
                                    image: standingTogetherIMG,
                                },
                            ]}
                            onClose={handleCloseViewer}
                        />
                    ) : (
                        <ImageViewer
                            images={[
                                {
                                    title: selectedImage.title,
                                    image: selectedImage.image,
                                },
                            ]}
                            onClose={handleCloseViewer}
                        />
                    ))
                }
            </Modal>
        </Box>
    );
}

export default Information;
