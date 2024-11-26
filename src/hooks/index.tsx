import { useEffect, useRef } from "react"

export const useScroll = (value: number) => {
    window.scrollTo({ top: value, behavior: "smooth" })

    // "Nettoyer" l'url affichée lors du scroll to top pour ne garder que le nom de domaine
    value === 0
        ? history.pushState(
              "",
              document.title,
              window.location.pathname + window.location.search
          )
        : null
    return true
}

export const useMobile = () => {
    if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true
    } else {
        return false
    }
}

type SomeFunction = (...args: any[]) => void
type Timer = ReturnType<typeof setTimeout>

export const useDebounce = <Func extends SomeFunction>(
    func: Func,
    delay = 500
) => {
    const timer = useRef<Timer>()

    useEffect(() => {
        return () => {
            if (!timer.current) return
            clearTimeout(timer.current)
        }
    }, [])

    const debouncedFunction = ((...args) => {
        const newTimer = setTimeout(() => {
            func(...args)
        }, delay)
        clearTimeout(timer.current)
        timer.current = newTimer
    }) as Func

    return debouncedFunction
}
