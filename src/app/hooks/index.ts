import { useEffect, useRef, useState } from "react"

export const scrollUser = (value: number) => {
  // On scroll vers la valeur Y transmise en props
  window.scrollTo({ top: value, behavior: "smooth" })
  // "Nettoyer" l'url affichée lors du scroll to top pour ne garder que le nom de domaine
  if (value === 0) {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    )
  }

  return true
}

const getMobileDetect = (userAgent: NavigatorID["userAgent"]) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
  const isMobile = () =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindows())

  return isMobile()
}
export const useMobile = () => {
  useEffect(() => {}, [])
  const userAgent =
    typeof navigator === "undefined" ? "SSR" : navigator.userAgent
  return getMobileDetect(userAgent)
}

export const useDebounce = <T>(
  value: T,
  delay: number
): { debouncedValue: T } => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    if (typeof value === "string" && value.trim().length === 0) {
      setDebouncedValue(value)
      return
    }

    // Update debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed within the delay period
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]) // Only re-call effect if value or delay changes

  return { debouncedValue }
}

export const useIsMounted = () => {
  // Par défaut, on considère le composant comme non rendu
  const isMounted = useRef(false)

  // Si le ref détecte un composant, alors on le considère comme rendu
  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  return isMounted
}
