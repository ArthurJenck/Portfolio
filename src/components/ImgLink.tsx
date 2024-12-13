import Logo from "../assets/icons/logo.svg"
import linkedinIcon from "../assets/icons/linkedin-icon.svg"
import githubIcon from "../assets/icons/github-icon.svg"
import cvIcon from "../assets/icons/cv-icon.svg"
import extLinkIcon from "../assets/icons/ext-link.svg"
import "../styles/ImgLink.scss"
import { useMobile, useScroll } from "../hooks"
import { NavLink } from "react-router-dom"

const ImgLink = (props: { for: string; link?: string; otherAlt?: string }) => {
    let link = "/"
    let linkMobile = ""
    let icon = Logo
    let alt = "Logo blanc"

    // Les liens sont importés via le .env pour faciliter un éventuel changement d'URL par la suite
    switch (props.for) {
        case "linkedin":
            link = `${import.meta.env.VITE_LINKEDIN_LINK}`
            icon = linkedinIcon
            alt = "Lien vers mon compte Linkedin"
            break
        case "github":
            // Pour les projets, un lien spécifique est fourni. On vérifie si ce lien existe, sinon on renvoie le lien GitHub classique
            link = props.link
                ? props.link
                : `${import.meta.env.VITE_GITHUB_LINK}`
            icon = githubIcon
            props.otherAlt
                ? (alt = props.otherAlt)
                : (alt = "Lien vers mon compte GitHub")
            break
        case "cv":
            link = "/cv"
            linkMobile = "/CV Arthur Jenck.pdf"
            icon = cvIcon
            alt = "Lien vers mon CV"
            break
        case "projet":
            link = props.link ? props.link : ""
            icon = extLinkIcon
            alt = "Lien vers le site"
            break

        default:
            break
    }

    return (
        // Le CV est un cas particulier, la version bureau amenant vers une page différente avec un lecteur de PDF, la version mobile faisant télécharger le document
        <NavLink
            to={props.for === "cv" && useMobile() ? linkMobile : link}
            // Dans le cas où le composant représente le logo et sert de to-top, on retire le chargement de la page
            onClick={
                props.for === "logo" && !props.link
                    ? (e) => {
                          e.preventDefault()
                          useScroll(0)
                      }
                    : () => {}
            }
            className={props.for === "logo" ? "logo-link" : "socials-link"}
            target={props.for === "logo" ? "" : "_blank"}
        >
            <img src={icon} alt={alt} />
        </NavLink>
    )
}

export default ImgLink
