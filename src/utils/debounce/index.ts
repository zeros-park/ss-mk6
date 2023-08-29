
type tDebounce = (callback: Function, debouncedTime?: number) => void
type Timer = ReturnType<typeof setTimeout>
let timer: Timer;

const debounce: tDebounce = (callback, debouncedTime = 200) => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        callback()
    }, debouncedTime);
}

export {
    debounce
}