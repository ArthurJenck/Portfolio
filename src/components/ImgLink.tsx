import Logo from "../assets/icons/logo.svg"
import linkedinIcon from "../assets/icons/linkedin-icon.svg"
import githubIcon from "../assets/icons/github-icon.svg"
import cvIcon from "../assets/icons/cv-icon.svg"
import cvFile from "../assets/docs/CV Arthur Jenck.pdf"
import "../styles/ImgLink.scss"
import { useScroll } from "../hooks"

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
            link = `${cvFile}`
            icon = cvIcon
            alt = "Lien vers mon CV"
            break

        default:
            break
    }

    return (
        <a
            href={link}
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
        >
            <img src={icon} alt={alt} />
        </a>
    )
}

export default ImgLink
