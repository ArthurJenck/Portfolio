import { useEffect, useState } from "react"
import "../styles/FastTravel.scss"
import { useDebounce, useIsMounted, useScroll } from "../hooks"

const FastTravel = () => {
    const [fastTravVis, setFastTravVis] = useState("hidden")
    const [fastTravOpac, setFastTravOpac] = useState(0)
    const [currentSection, setCurrentSection] = useState("accueil")
    const isMounted = useIsMounted()

    const checkCurrentSect = () => {
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

    useEffect(() => {
        let isMounted = true
        isMounted ? checkCurrentSect() : null
    }, [])
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
    )
}

export default FastTravel
