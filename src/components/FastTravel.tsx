import { useEffect, useState } from "react"
import "../styles/FastTravel.scss"
import { useDebounce, useIsMounted, useScroll } from "../hooks"

const FastTravel = () => {
    // De nombreux états sont utilisés ici, pour l'opacité et la visibilité de l'élément ainsi que vérifier la section visionnée par l'utilisateur
    const [fastTravVis, setFastTravVis] = useState("hidden")
    const [fastTravOpac, setFastTravOpac] = useState(0)
    const [currentSection, setCurrentSection] = useState("accueil")
    // Le hook isMounted vérifie si le composant est bien rendu
    const isMounted = useIsMounted()

    const checkCurrentSect = () => {
        // On récupère l'emplacement vertical de chaque section sur la page, et on retire une partie de la hauteur de la page pour "remonter" la section prise en compte par le composant
        const skillsTop =
            (document.querySelector<HTMLElement>("#skills")
                ?.offsetTop as number) -
            window.innerHeight / 2.5
        const projetsTop =
            (document.querySelector<HTMLElement>("#projets")
                ?.offsetTop as number) -
            window.innerHeight / 2.5
        const aboutTop =
            (document.querySelector<HTMLElement>("#about")
                ?.offsetTop as number) -
            window.innerHeight / 2.5
        const contactTop =
            (document.querySelector<HTMLElement>("#contact")
                ?.offsetTop as number) -
            window.innerHeight / 2.5

        // Tout en haut de la page, le composant est masqué. Il est important d'ajouter le hook isMounted avant chaque modification d'état par convention React
        if (scrollY < window.innerHeight / 3) {
            if (isMounted.current) {
                setFastTravVis("hidden")
                setFastTravOpac(0)
            }
        } else {
            if (isMounted.current) {
                setFastTravVis("visible")
                setFastTravOpac(1)
            }
        }
        // On vérifie ensuite où se situe l'utilisateur dans le scroll vertical de la page et on modifie la section indiquée par le composant accordément
        if (scrollY >= 0 && scrollY <= skillsTop && isMounted.current) {
            setCurrentSection("accueil")
        } else if (
            scrollY > skillsTop &&
            scrollY < projetsTop &&
            isMounted.current
        ) {
            setCurrentSection("skills")
        } else if (
            scrollY >= projetsTop &&
            scrollY < aboutTop &&
            isMounted.current
        ) {
            setCurrentSection("projets")
        } else if (
            scrollY > aboutTop &&
            scrollY <= contactTop &&
            isMounted.current
        ) {
            setCurrentSection("about")
        } else if (isMounted.current) {
            setCurrentSection("contact")
        }
    }

    // On lance le check au chargement initial de la page
    useEffect(() => {
        checkCurrentSect()
    }, [])
    // Le debounce permet d'éviter que la fonction ne se répète à outrance et fasse laguer le site
    const debouncedCheckSect = useDebounce(checkCurrentSect, 10)

    window.addEventListener("scroll", debouncedCheckSect, {
        passive: true,
    })

    return (
        <ul
            className="fast-travel"
            style={{
                visibility: fastTravVis === "hidden" ? "hidden" : "visible",
                opacity: fastTravOpac,
            }}
        >
            <li>
                {/* Le preventDefault sert à éviter le rechargement de la page en cliquant sur le lien. On utilise alors le hook fait maison useScroll pour remonter en haut de la page et nettoyer l'url */}
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault()
                        useScroll(0)
                    }}
                    className={currentSection === "accueil" ? "current" : ""}
                ></a>
            </li>
            {/* Selon la section devant être indiquée par le composant est ajoutée en class et sera stylisée par le SCSS */}
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
    )
}

export default FastTravel
