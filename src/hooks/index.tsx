export const useScroll = (value: number) => {
    window.scrollTo({ top: value, behavior: "smooth" })
    return value
}
