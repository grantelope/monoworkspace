import MTextField, {
    TextFieldProps as MTextFieldProps
} from '@mui/material/TextField';

import React from 'react';

export type TextFieldProps = Omit<MTextFieldProps, 'fullWidth' | 'variant'>;

export default function TextField(props: TextFieldProps): React.ReactNode {
    return <MTextField {...props} fullWidth variant="outlined" />;
}
