import { useState } from "react"
import "../styles/FastTravel.scss"
import { useScroll } from "../hooks"

const FastTravel = () => {
    const [fastTravVis, setFastTravVis] = useState("hidden")
    const [fastTravOpac, setFastTravOpac] = useState(0)
    const [currentSection, setCurrentSection] = useState("accueil")
    const isDesktop = window.matchMedia("(min-width: 768px)").matches

    // Mettre ça dans une fonction appelée au moment du clic ! Sinon le changement de hauteur après rendu du site va changer les valeurs
    const skillsTop =
        (document.querySelector<HTMLElement>("#skills")?.offsetTop as number) -
        100
    const projetsTop =
        (document.querySelector<HTMLElement>("#projets")?.offsetTop as number) -
        100
    const aboutTop =
        (document.querySelector<HTMLElement>("#about")?.offsetTop as number) -
        100
    const contactTop =
        (document.querySelector<HTMLElement>("#contact")?.offsetTop as number) -
        100

    window.onscroll = () => {
        if (scrollY < window.innerHeight / 3) {
            setFastTravVis("hidden")
            setFastTravOpac(0)
        } else {
            setFastTravVis("visible")
            setFastTravOpac(1)
        }
        if (scrollY > skillsTop && scrollY < projetsTop) {
            setCurrentSection("skills")
        }
        if (scrollY >= projetsTop && scrollY < aboutTop) {
            setCurrentSection("projets")
        }
        if (scrollY > aboutTop && scrollY <= contactTop) {
            setCurrentSection("about")
        } else if (scrollY >= 0 && scrollY <= skillsTop) {
            setCurrentSection("accueil")
        }
    }

    return isDesktop ? (
        <ul
            className="fast-travel"
            style={{
                visibility: fastTravVis === "hidden" ? "hidden" : "visible",
                opacity: fastTravOpac,
            }}
        >
            <li>
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault()
                        useScroll(0)
                    }}
                    className={currentSection === "accueil" ? "current" : ""}
                ></a>
            </li>
            <li>
                <a
                    href="#skills"
                    className={currentSection === "skills" ? "current" : ""}
                ></a>
            </li>
            <li>
                <a
                    href="#projets"
                    className={currentSection === "projets" ? "current" : ""}
                ></a>
            </li>
            <li>
                <a
                    href="#about"
                    className={currentSection === "about" ? "current" : ""}
                ></a>
            </li>
            <li>
                <a
                    href="#contact"
                    className={currentSection === "contact" ? "current" : ""}
                ></a>
            </li>
        </ul>
    ) : null
}

export default FastTravel
