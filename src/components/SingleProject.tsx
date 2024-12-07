import ImgLink from "./ImgLink"
import "../styles/SingleProject.scss"
import { useEffect, useRef, useState } from "react"
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
    picSmol: string
    picMobile: string
}

const SingleProject = ({
    name,
    desc,
    techs,
    gitLink,
    webLink,
    picDesk,
    picSmol,
    picMobile,
}: SingleProjectProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const toUseDesc = desc.split("\n").filter((i) => {
        return i !== ""
    })

    useEffect(() => {
        if (useMobile()) {
            ref.current!.style.setProperty(
                "--project-pic",
                ` linear-gradient(rgba(44, 37, 62, 0.8), rgba(44, 37, 62, 0.8)), url(${picMobile})`
            )
            ref.current!.style.setProperty("--background-size", "90%")
        } else {
            ref.current!.style.setProperty(
                "--project-pic",
                ` linear-gradient(rgba(44, 37, 62, 0.8), rgba(44, 37, 62, 0.8)), url(${picDesk})`
            )
        }
    }, [ref.current])

    return (
        <article
            className={isOpen ? "projects-item open" : "projects-item"}
            ref={ref}
            onClick={() => {
                setIsOpen(!isOpen)
            }}
        >
            <span className="project-top"></span>
            <h3>{name}</h3>
            <div
                className={
                    isOpen
                        ? "projects-item__content open"
                        : "projects-item__content"
                }
            >
                <div
                    className="projects-item__details"
                    onClick={(e) => {
                        isOpen ? e.stopPropagation() : null
                    }}
                >
                    <ul className="projects-item__techs">
                        {techs.map((tech) => {
                            return (
                                <li key={tech.title}>
                                    <img src={tech.icon} aria-hidden />
                                    <span>{tech.title}</span>
                                </li>
                            )
                        })}
                    </ul>
                    {toUseDesc.map((paraph, i) => {
                        return <p key={`paraph-${i}`}>{paraph}</p>
                    })}
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
                    src={picSmol}
                    alt="Image du projet"
                    className="projects-item__pic"
                    onClick={(e) => {
                        isOpen ? e.stopPropagation() : null
                    }}
                />
            </div>
        </article>
    )
}

export default SingleProject
