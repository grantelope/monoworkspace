import { UseFormReturn } from 'react-hook-form';

export type AutoSaveTypes = {
    duration?: number;
    onSubmit: (data?: unknown) => unknown;
    methods: UseFormReturn<any, undefined>;
};
