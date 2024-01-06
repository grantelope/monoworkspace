import { Box, Button, Typography } from '@grantelope/kit';
import {
    EventQueueProvider,
    useAutoSave,
    useEventQueue,
    useLoadComment,
    useSaveComment
} from '@/hooks';
import { FormProvider, useForm } from 'react-hook-form';

import Error from './error';
import { FormInputText } from './formInputText';
import React from 'react';
import Saving from './saving';

type IFormInput = {
    name: string;
    text: string;
    version?: number;
};

const defaultValues = {
    name: '',
    text: '',
    version: undefined
};

export const FormDemo = () => {
    const methods = useForm<IFormInput>({
        defaultValues: defaultValues
    });
    const onQueue = useEventQueue();
    const { control, getValues, reset, setValue } = methods;

    const onSubmit = async () => {
        onQueue(() =>
            saveComment({
                variables: {
                    input: getValues()
                },
                onCompleted: data => {
                    setValue('version', data.comment.version);
                }
            })
        );
    };

    useAutoSave({ methods, onSubmit });

    const { loading, error } = useLoadComment({
        onCompleted: data =>
            reset({
                name: data.comment.name,
                text: data.comment.text,
                version: data.comment.version
            })
    });

    const [saveComment, { loading: saveLoading, error: savingError }] =
        useSaveComment();

    const isLoading = loading || saveLoading;

    return (
        <EventQueueProvider value={onQueue}>
            <FormProvider {...methods}>
                <Box
                    style={{
                        display: 'grid',
                        gridRowGap: '20px',
                        padding: '20px',
                        margin: '100px'
                    }}
                >
                    {savingError && <Error />}
                    <Typography
                        variant="h4"
                        style={{
                            position: 'relative'
                        }}
                    >
                        {isLoading && <Saving />}
                        Form Demo
                    </Typography>
                    <FormInputText
                        name="name"
                        control={control}
                        label="Name"
                        disabled={loading}
                    />
                    <FormInputText
                        minRows={12}
                        multiline
                        name="text"
                        control={control}
                        label="Comment"
                        disabled={loading}
                    />
                    <Button
                        onClick={onSubmit}
                        variant={'contained'}
                        disabled={isLoading}
                    >
                        Submit
                    </Button>
                </Box>
            </FormProvider>
        </EventQueueProvider>
    );
};
