import type { AutoSaveTypes } from './types';
import React from 'react';
import throttle from 'lodash/throttle';

const WAIT_DURATION = 800;

export function useAutoSave({
    duration = WAIT_DURATION,
    onSubmit,
    methods
}: AutoSaveTypes) {
    const { watch } = methods;

    const throttledSave = React.useCallback(
        throttle(onSubmit, duration, { leading: false, trailing: true }),
        [throttle, onSubmit]
    );

    React.useEffect(() => {
        const subscription = watch((_, { type }) => {
            if (type === 'change') {
                return throttledSave();
            }
        });

        return () => subscription.unsubscribe();
    }, [watch]);
}
