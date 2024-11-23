import Logo from "../assets/icons/logo.svg"
import linkedinIcon from "../assets/icons/linkedin-icon.svg"
import githubIcon from "../assets/icons/github-icon.svg"
import cvIcon from "../assets/icons/cv-icon.svg"
import "../styles/ImgLink.scss"
import { useScroll } from "../hooks"
import { NavLink } from "react-router-dom"

const ImgLink = (props: { for: string }) => {
    let link = "/"
    let icon = Logo
    let alt = "logo"
    switch (props.for) {
        case "linkedin":
            link = `${import.meta.env.VITE_LINKEDIN_LINK}`
            icon = linkedinIcon
            alt = "Lien vers mon compte Linkedin"
            break
        case "github":
            link = `${import.meta.env.VITE_GITHUB_LINK}`
            icon = githubIcon
            alt = "Lien vers mon compte GitHub"
            break
        case "cv":
            link = "/cv"
            icon = cvIcon
            alt = "Lien vers mon CV"
            break

        default:
            break
    }

    return (
        <NavLink
            to={link}
            onClick={
                props.for === "logo"
                    ? (e) => {
                          e.preventDefault()
                          useScroll(0)
                      }
                    : () => {}
            }
            className={props.for === "logo" ? "logo-link" : "socials-link"}
            target={props.for === "logo" ? "" : "_blank"}
            type="application/pdf"
        >
            <img src={icon} alt={alt} />
        </NavLink>
    )
}

export default ImgLink
