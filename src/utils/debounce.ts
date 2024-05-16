export const debounce = (callback: Function, delay: number = 500) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}