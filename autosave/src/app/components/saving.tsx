import { Box, CircularProgress } from '@grantelope/kit';

import React from 'react';

export default function Saver(): React.ReactNode {
    return (
        <Box style={{ position: 'absolute', left: '-50px', top: 0 }}>
            <CircularProgress />
        </Box>
    );
}
