import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const scrollToSection = (id) => {
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
        const element = document.getElementById(id);

        window.scrollTo({
            top: element.offsetTop - navbarHeight - 10,
            behavior: 'smooth',
        });
    };

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

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const navItems = [
        {
            label: 'Information',
            sectionId: 'information',
        },
        {
            label: 'Petition',
            sectionId: 'petition',
        },
        {
            label: 'Resources',
            sectionId: 'resources',
        },
        {
            label: 'Artworks',
            sectionId: 'artworks',
        },
        {
            label: 'Contact',
            sectionId: 'contact',
        },
    ];

    const [visibleButtons, setVisibleButtons] = useState(navItems.length);

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width > 800) setVisibleButtons(navItems.length);
            else if (width > 700) setVisibleButtons(navItems.length - 1);
            else if (width > 600) setVisibleButtons(navItems.length - 2);
            else setVisibleButtons(0);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [navItems.length]);

    return (
        <>
            <AppBar
                position="sticky"
                id="navbar"
            >
                <Toolbar>
                    <Typography
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 'bold',
                        }}
                    >
                        IDK
                    </Typography>
                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'flex',
                            },
                            flexDirection: 'row',
                        }}
                    >
                        {navItems.slice(0, visibleButtons).map((item) => (
                            <Button
                                key={item.label}
                                color="inherit"
                                sx={{
                                    margin: '0 1rem',
                                    whiteSpace: 'nowrap',
                                }}
                                onClick={() => scrollToSection(item.sectionId)}
                            >
                                {item.label}
                            </Button>
                        ))}
                        {visibleButtons < navItems.length && (
                            <IconButton
                                color="inherit"
                                onClick={toggleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                        <IconButton
                            color="inherit"
                            onClick={handleShare}
                        >
                            <ShareIcon />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            display: {
                                xs: 'flex',
                                sm: 'none',
                            },
                        }}
                    >
                        <IconButton
                            color="inherit"
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
            >
                <Box
                    sx={{
                        width: 250,
                    }}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <List>
                        {navItems.map((item) => (
                            <ListItem
                                button
                                key={item.label}
                                onClick={() => scrollToSection(item.sectionId)}
                            >
                                <ListItemText primary={item.label} />
                            </ListItem>
                        ))}
                        <Divider />
                        <ListItem
                            button
                            onClick={handleShare}
                        >
                            <ListItemText primary="Share" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;
