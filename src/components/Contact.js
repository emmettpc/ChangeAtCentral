import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

function Contact() {
    return (
        <Box
            sx={{
                paddingTop: {
                    sm: '1rem',
                    md: '2rem',
                    lg: '3rem',
                },
                marginBottom: '3rem',
                backgroundColor: '#121212',
            }}
            id="contact"
        >
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: '#ffffff',
                    }}
                >
                    Contact Us
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#b0b0b0',
                        marginBottom: '1rem',
                        marginLeft: '1rem',
                    }}
                >
                    If you'd like to reach out to us, you can email us at{' '}
                    <Link
                        href="mailto:changeatcentral@gmail.com"
                        sx={{
                            color: '#bb86fc',
                            textDecoration: 'none',
                        }}
                    >
                        changeatcentral@gmail.com
                    </Link>
                    .
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#b0b0b0',
                        marginBottom: '1rem',
                        marginLeft: '1rem',
                    }}
                >
                    or you can email us through our school emails:{' '}
                    <Link
                        href="mailto:echristenson001@stpaul.k12.mn.us"
                        sx={{
                            color: '#bb86fc',
                            textDecoration: 'none',
                        }}
                    >
                        echristenson001@stpaul.k12.mn.us
                    </Link>{' '}
                    (Emmett Christenson) and{' '}
                    <Link
                        href="mailto:cshayes001@stpaul.k12.mn.us"
                        sx={{
                            color: '#bb86fc',
                            textDecoration: 'none',
                        }}
                    >
                        cschayes001@stpaul.k12.mn.us
                    </Link>{' '}
                    (Casper Shayes).
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#b0b0b0',
                        marginY: '1rem',
                        marginLeft: '1rem',
                    }}
                >
                    You can also leave a comment on the petition page if you'd like. We would love to hear your thoughts
                    and feedback! Here's the link to the petition:{' '}
                    <Link
                        href="https://www.change.org/Gender-Neutral-Bathrooms"
                        sx={{
                            color: '#bb86fc',
                            textDecoration: 'none',
                        }}
                    >
                        Petition
                    </Link>
                    .
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#b0b0b0',
                        marginTop: '1.75rem',
                        marginLeft: '1rem',
                    }}
                >
                    Your thoughts and feedback are highly appreciated!
                </Typography>
            </Container>
        </Box>
    );
}

export default Contact;
