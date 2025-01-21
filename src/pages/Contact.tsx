import React from "react"
import "../styles/Contact.scss"
import CopyBtn from "../components/CopyBtn"

const Contact = ({
    spiralTurn = (e: React.MouseEvent) => {
        e
    },
}) => {
    // Les adresse-mail et numéro de téléphone sont ajoutés dans le .env pour être rapidement modifiés globalement si besoin
    const mail = import.meta.env.VITE_MAIL
    const tel = import.meta.env.VITE_PHONE

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
                    <a
                        href={import.meta.env.VITE_LINKEDIN_LINK}
                        target="_blank"
                    >
                        {/* Avant d'être affichés, on enlève sur cette instance les schémas d'url */}
                        {import.meta.env.VITE_LINKEDIN_LINK.replace(
                            "https://",
                            ""
                        )
                            .replace("www.", "")
                            .slice(0, -1)}
                    </a>
                    <CopyBtn />
                </li>
                <li>
                    <a href={import.meta.env.VITE_GITHUB_LINK} target="_blank">
                        {/* Avant d'être affichés, on enlève sur cette instance les schémas d'url */}
                        {import.meta.env.VITE_GITHUB_LINK.replace(
                            "https://",
                            ""
                        )
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
