import "../styles/NavBar.scss"
import { useEffect } from "react"
import ImgLink from "./ImgLink"
import Burger from "./Burger"
import { useDebounce, useMobile } from "../hooks"

const NavBar = () => {
    const changeNavOpacity = () => {
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
    }

    const debouncedChangeNavOpac = useDebounce(changeNavOpacity, 10)

    const hideLogoMobile = () => {
        useMobile()
            ? (window.onscroll = () => {
                  debouncedChangeNavOpac()
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
