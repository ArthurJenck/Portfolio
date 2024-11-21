import { useState } from "react"
import ImgLink from "./ImgLink"
import "../styles/Burger.scss"

const Burger = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={isOpen ? "burger open" : "burger"}>
            <div className="burger-toggle" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span className="burger-background"></span>
            </div>{" "}
            <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
                <ImgLink for="logo" />
                <ul>
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    <li>
                        <a href="#skills">Compétences</a>
                    </li>
                    <li>
                        <a href="#projets">Projets</a>
                    </li>
                    <li>
                        <a href="#about">À propos</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className="socials">
                    <ImgLink for="linkedin" />
                    <ImgLink for="github" />
                    <ImgLink for="cv" />
                </div>
            </div>
        </div>
    )
}

export default Burger
