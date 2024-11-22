export const useScroll = (value: number) => {
    window.scrollTo({ top: value, behavior: "smooth" })

    value === 0
        ? history.pushState(
              "",
              document.title,
              window.location.pathname + window.location.search
          )
        : null
    return true
}
