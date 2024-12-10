import { useState } from "react"
import ImgLink from "./ImgLink"
import "../styles/Burger.scss"
import { useScroll } from "../hooks"

const Burger = () => {
    // Checker si le menu Burger est ouvert ou non
    const [isOpen, setIsOpen] = useState(false)

    return (
        // S'il est ouvert, le menu burger obtient la class open
        <div className={isOpen ? "burger open" : "burger"}>
            {/* Le toggle du burger change l'état au clic */}
            <div className="burger-toggle" onClick={() => setIsOpen(!isOpen)}>
                {/* Le span suivant correspond à la barre centrale du burger */}
                <span></span>
                {/* Le span suivant servira de fond au menu burger une fois ouvert */}
                <span className="burger-background"></span>
            </div>
            {/* Cliquer sur le background du menu burger doit le fermer */}
            <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
                <ImgLink for="logo" />
                <ul>
                    <li>
                        {/* Le preventDefault sert à éviter le rechargement de la page en cliquant sur le lien. On utilise alors le hook fait maison useScroll pour remonter en haut de la page et nettoyer l'url */}
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault()
                                useScroll(0)
                            }}
                        >
                            Accueil
                        </a>
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
