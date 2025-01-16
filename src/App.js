import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Information from './components/Information';
import Petition from './components/Petition';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Artworks from './components/Artworks';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mx: {
                        xs: 5,
                        sm: 8,
                        md: 14,
                        lg: 28,
                        xl: 35,
                    },
                }}
            >
                <Title />
                <Information />
                <Petition updated="Jan 16" />
                <Resources />
                <Artworks />
                <Contact />
            </Box>
            <BackToTop />
        </>
    );
}

export default App;
