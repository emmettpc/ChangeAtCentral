import React from 'react';
import { AppBar, Grid2, Toolbar, Typography, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
    const scrollToSection = (id) => {
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
        const element = document.getElementById(id);

        window.scrollTo({
            top: element.offsetTop - navbarHeight - 10,
            behavior: 'smooth',
        });
    };

    const handleSettings = () => {};

    const handleShare = async () => {
        const url = window.location.href;
        const title = 'Adding Gender-Neutral bathrooms to Central!';

        if (navigator.share) {
            try {
                await navigator.share({
                    title: title,
                    url: url,
                });
            } catch (e) {
                console.error('Error sharing:', e);
            }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                alert(
                    'Share feature is not supported on this browser. The link has been copied to your clipboard instead.',
                );
            } catch (e) {
                console.error('Error copying to clipboard:', e);
                alert('Failed to copy the link. Please try again.');
            }
        }
    };

    return (
        <AppBar
            position="sticky"
            id="navbar"
        >
            <Toolbar>
                <Grid2
                    container
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        TEXT
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection('information')}
                    >
                        Information
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection('petition')}
                    >
                        Petition
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection('links')}
                    >
                        Links
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection('thanks')}
                    >
                        Special Thanks
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection('artworks')}
                    >
                        Artworks
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => scrollToSection('other')}
                    >
                        Other
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handleSettings()}
                    >
                        <SettingsIcon />
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handleShare()}
                    >
                        <ShareIcon />
                    </Button>
                </Grid2>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
