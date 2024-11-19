import "../styles/NavBar.scss"
import { useEffect, useState } from "react"
import ImgLink from "./ImgLink"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const hideLogoMobile = () => {
        window.matchMedia("(max-width: 768px)").matches
            ? (window.onscroll = () => {
                  const navLogoOpacity = document.querySelector(".logo-link")!
                  scrollY !== 0
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
            <div className={isOpen ? "burger open" : "burger"}>
                <div
                    className="burger-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span className="burger-background"></span>
                </div>{" "}
                <div className="burger-menu">
                    <ImgLink for="logo" />
                    <ul>
                        <li>
                            <a href="/" onClick={() => setIsOpen(!isOpen)}>
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Compétences
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projets"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Projets
                            </a>
                        </li>
                        <li>
                            <a href="about" onClick={() => setIsOpen(!isOpen)}>
                                À propos
                            </a>
                        </li>
                        <li>
                            <a
                                href="contact"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="socials" onClick={() => setIsOpen(!isOpen)}>
                        <ImgLink for="linkedin" />
                        <ImgLink for="github" />
                        <ImgLink for="cv" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
