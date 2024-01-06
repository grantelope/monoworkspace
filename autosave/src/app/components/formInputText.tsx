import { TextField, TextFieldProps } from '@grantelope/kit';

import { Controller } from 'react-hook-form';

type FormInputProps = TextFieldProps & {
    name: string;
    control: any;
    setValue?: any;
};

export const FormInputText = ({
    name,
    control,
    label,
    ...props
}: FormInputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    {...props}
                    helperText={error ? error.message : null}
                    error={!!error}
                    onChange={onChange}
                    value={value}
                    label={label}
                />
            )}
        />
    );
};
