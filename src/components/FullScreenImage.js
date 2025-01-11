// import React, { useRef } from 'react';
// import { Box } from '@mui/material';

function FullScreenImage({ component = 'div', ...props }) {
    const imageRef = useRef(null);

    const handleImageClick = () => {
        if (imageRef.current) {
            if (imageRef.current.requestFullscreen) {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    imageRef.current.requestFullscreen();
                }
            } else {
                console.error('Error while fullscreening ):');
            }
        }
    };

    return (
        <>
            <Box
                component={component}
                ref={imageRef}
                onClick={handleImageClick}
                sx={{ cursor: 'pointer', maxWidth: '100%', height: 'auto', ...props.sx }}
                {...props}
            />
        </>
    );
}

// export default FullScreenImage;
