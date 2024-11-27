import ImgLink from "./ImgLink"
import "../styles/SingleProject.scss"
import { useEffect, useRef } from "react"
import { useMobile } from "../hooks"

interface SingleProjectProps {
    name: string
    desc: string
    techs: {
        title: string
        icon: string
        order: number
    }[]
    gitLink?: string
    webLink?: string
    picDesk: string
    picMobile: string
}

const SingleProject = ({
    name,
    desc,
    techs,
    gitLink,
    webLink,
    picDesk,
    picMobile,
}: SingleProjectProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (useMobile()) {
            ref.current!.style.setProperty(
                "--project-pic",
                ` linear-gradient(rgba(44, 37, 62, 0.7), rgba(44, 37, 62, 0.7)), url(${picMobile})`
            )
            ref.current!.style.setProperty("--background-size", "90%")
        } else {
            ref.current!.style.setProperty(
                "--project-pic",
                ` linear-gradient(rgba(44, 37, 62, 0.7), rgba(44, 37, 62, 0.7)), url(${picDesk})`
            )
        }
    }, [ref.current])

    return (
        <article className="projects-item" ref={ref}>
            <h3>{name}</h3>
            <div className="projects-item__content">
                <div>
                    <ul className="projects-item__techs">
                        {techs.map((tech) => {
                            return (
                                <li key={tech.title}>
                                    <img src={tech.icon} aria-hidden />
                                    {tech.title}
                                </li>
                            )
                        })}
                    </ul>
                    <p>{desc}</p>
                    <div className="project-item__links">
                        {gitLink ? (
                            <ImgLink
                                for="github"
                                link={gitLink}
                                otherAlt="Lien vers le repository GitHub du projet"
                            />
                        ) : null}
                        {webLink ? (
                            <ImgLink for="projet" link={webLink} />
                        ) : null}
                    </div>
                </div>
                <img
                    src={picDesk}
                    alt="Image du projet"
                    className="projects-item__pic"
                />
            </div>
        </article>
    )
}

export default SingleProject
