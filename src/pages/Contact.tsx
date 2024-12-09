import React from "react"
import "../styles/Contact.scss"
import CopyBtn from "../components/CopyBtn"

const Contact = ({
    spiralTurn = (e: React.MouseEvent) => {
        e
    },
}) => {
    const mail = import.meta.env.VITE_MAIL
    const tel = import.meta.env.VITE_PHONE

    return (
        <section
            id="contact"
            onMouseMove={(e) => {
                spiralTurn(e)
            }}
        >
            <h2>On va boire un verre ?</h2>
            <ul className="about-links">
                <li>
                    <a href={`mailto:${mail}`} target="_blank">
                        {mail}
                    </a>
                    <CopyBtn />
                </li>
                <li>
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
