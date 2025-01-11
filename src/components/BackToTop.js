import React, { useState, useEffect } from 'react';
import { Button, Tooltip } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;

            if (window.scrollY > 300 - navbarHeight) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        visible && (
            <Tooltip
                title="Return to top"
                placement="top"
            >
                <Button
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        width: '17%',
                        height: '17%',
                        minWidth: '30px',
                        minHeight: '30px',
                        maxWidth: '60px',
                        maxHeight: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#3f51b5',
                        color: 'white',
                        boxShadow: 3,
                        '&:hover': {
                            backgroundColor: '#2c387e',
                        },
                    }}
                >
                    <ArrowUpwardIcon />
                </Button>
            </Tooltip>
        )
    );
}

export default BackToTop;
