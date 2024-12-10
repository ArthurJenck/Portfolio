import "../styles/NavBar.scss"
import { useDebounce, useMobile } from "../hooks"
import ImgLink from "./ImgLink"
import Burger from "./Burger"

const NavBar = () => {
    const changeNavOpacity = () => {
        // En mobile, le logo de la nav disparaît après avoir scrollé
        const navLogoOpacity = document.querySelector(".logo-link")!
        scrollY > 0
            ? navLogoOpacity.setAttribute(
                  "style",
                  "opacity:0; pointer-events: none"
              )
            : navLogoOpacity.setAttribute("style", "opacity:1")
    }

    // On ajoute un debounce sur les fonctions onScroll pour éviter la surcharge d'événements et de lag
    const debouncedChangeNavOpac = useDebounce(changeNavOpacity, 10)

    const hideLogoMobile = () => {
        // On n'ajoute l'écouteur d'événement que si l'appareil est un téléphone ou une tablette
        useMobile()
            ? window.addEventListener("scroll", debouncedChangeNavOpac, {
                  passive: true,
              })
            : null
    }
    hideLogoMobile()

    return (
        <nav>
            <ImgLink for="logo" />
            <Burger />
        </nav>
    )
}

export default NavBar
