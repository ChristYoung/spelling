import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = <T extends (...args: unknown[]) => unknown>(
    callback: T,
    delay: number,
): T => {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const debouncedCallback = useCallback(
        (...args: unknown[]) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    return debouncedCallback as T;
};
