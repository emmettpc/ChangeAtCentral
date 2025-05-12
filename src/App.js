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
                        xs: 2.5,
                        sm: 5,
                        md: 12,
                        lg: 25,
                        xl: 35,
                    },
                }}
            >
                <Title />
                <Information />
                <Petition updated="May 12" />
                <Resources />
                <Artworks />
                <Contact />
            </Box>
            <BackToTop />
        </>
    );
}

export default App;
