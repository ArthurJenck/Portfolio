import "../styles/NavBar.scss"
import { useEffect } from "react"
import ImgLink from "./ImgLink"
import Burger from "./Burger"
import { useMobile } from "../hooks"

const NavBar = () => {
    const hideLogoMobile = () => {
        useMobile()
            ? (window.onscroll = () => {
                  const navLogoOpacity = document.querySelector(".logo-link")!
                  scrollY > 0
                      ? navLogoOpacity.setAttribute(
                            "style",
                            "opacity:0; transition: opacity 0.2s"
                        )
                      : navLogoOpacity.setAttribute(
                            "style",
                            "opacity:1; transition: opacity 0.2s"
                        )
              })
            : null
    }

    useEffect(() => {
        hideLogoMobile()
    }, [])

    return (
        <nav>
            <ImgLink for="logo" />
            <Burger />
        </nav>
    )
}

export default NavBar
