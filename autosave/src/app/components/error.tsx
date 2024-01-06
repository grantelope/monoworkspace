import * as React from 'react';

import { Alert, Button } from '@grantelope/kit';

export default function Error(): React.ReactNode {
    const onClick = () => window.location.reload();

    return (
        <Alert
            severity="error"
            action={
                <Button color="inherit" size="small" onClick={onClick}>
                    Reload
                </Button>
            }
        >
            An error has occurred. Please reload the page.
        </Alert>
    );
}
