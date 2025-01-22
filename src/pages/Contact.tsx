import React from "react"
import "../styles/Contact.scss"
import CopyBtn from "../components/CopyBtn"

const Contact = ({
    spiralTurn = (e: React.MouseEvent) => {
        e
    },
}) => {
    const mail = "contact@arthurjenck.com"
    const tel = "0610790509"
    const linkedinLink = "https://www.linkedin.com/in/arthurjenck/"
    const githubLink = "https://github.com/ArthurJenck/"

    return (
        // La spirale de la section À propos tourne aussi quand la souris se déplace dans la section Contact
        <section
            id="contact"
            onMouseMove={(e) => {
                spiralTurn(e)
            }}
        >
            <h2>On prend un café ?</h2>
            <ul className="about-links">
                <li>
                    {/* Le lien doit directement permettre d'envoyer un mail */}
                    <a href={`mailto:${mail}`} target="_blank">
                        {mail}
                    </a>
                    <CopyBtn />
                </li>
                <li>
                    {/* Le clic ouvre directement l'application de téléphone */}
                    <a href={`tel:${tel}`}>
                        {tel.replace(/(.{2})/g, "$&" + ".").slice(0, -1)}
                    </a>
                    <CopyBtn />
                </li>
                <li>
                    <a href={linkedinLink} target="_blank">
                        {/* Avant d'être affichés, on enlève sur cette instance les schémas d'url */}
                        {linkedinLink
                            .replace("https://", "")
                            .replace("www.", "")
                            .slice(0, -1)}
                    </a>
                    <CopyBtn />
                </li>
                <li>
                    <a href={githubLink} target="_blank">
                        {/* Avant d'être affichés, on enlève sur cette instance les schémas d'url */}
                        {githubLink
                            .replace("https://", "")
                            .replace("www.", "")
                            .slice(0, -1)}
                    </a>
                    <CopyBtn />
                </li>
            </ul>
        </section>
    )
}

export default Contact
