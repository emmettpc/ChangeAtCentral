import React from 'react';
import { Typography, Box } from '@mui/material';

function Title() {
    return (
        <Box
            sx={{
                my: 4,
            }}
            id={'title'}
        >
            <Typography
                sx={{
                    fontSize: {
                        xs: '2rem',
                        sm: '2.5rem',
                        md: '3rem',
                        xl: '3.5rem',
                    },
                    fontWeight: 'bold',
                }}
                component="h1"
            >
                Adding Gender-Neutral Bathrooms To Central High School
            </Typography>
        </Box>
    );
}

export default Title;
