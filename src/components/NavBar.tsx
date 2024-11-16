import "../styles/NavBar.scss"
import { useState } from "react"
import ImgLink from "./ImgLink"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

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
