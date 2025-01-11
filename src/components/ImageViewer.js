import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function ImageViewer({ imageUrl, onClose }) {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0,0,0,0.8)',
                padding: '1rem',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <IconButton
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    color: 'white',
                }}
            >
                <CloseIcon />
            </IconButton>

            <img
                src={imageUrl}
                alt="Artwork"
                style={{
                    maxWidth: '90vw',
                    maxHeight: '80vh',
                    borderRadius: '8px',
                }}
            />
        </Box>
    );
}

export default ImageViewer;
