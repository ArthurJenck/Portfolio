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
