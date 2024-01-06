import * as React from 'react';

import { AppBar, Toolbar, Typography } from '@grantelope/kit';

export const metadata = {
    title: 'Next.js, Material UI v5, Yarn Workspaces, Apollo Graphql',
    description: 'Next.js, Material UI v5, Yarn Workspaces, Apollo Graphql'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AppBar position="fixed" sx={{ zIndex: 2000 }}>
                    <Toolbar>
                        <Typography variant="h6">AutoSaver</Typography>
                    </Toolbar>
                </AppBar>

                {children}
            </body>
        </html>
    );
}
