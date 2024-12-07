import "../styles/NavBar.scss"
import { useDebounce, useMobile } from "../hooks"
import ImgLink from "./ImgLink"
import Burger from "./Burger"

const NavBar = () => {
    const changeNavOpacity = () => {
        const navLogoOpacity = document.querySelector(".logo-link")!
        scrollY > 0
            ? navLogoOpacity.setAttribute(
                  "style",
                  "opacity:0; pointer-events: none"
              )
            : navLogoOpacity.setAttribute("style", "opacity:1")
    }

    const debouncedChangeNavOpac = useDebounce(changeNavOpacity, 10)

    const hideLogoMobile = () => {
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
