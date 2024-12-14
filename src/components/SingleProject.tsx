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
    // Par défaut, les projets sont repliés dans l'accordéon
    const [isOpen, setIsOpen] = useState(false)
    // Dans les descriptions des projets, on remplace \n par des sauts de ligne
    const toUseDesc = desc.split("\n").filter((i) => {
        return i !== ""
    })
    // On regarde si l'appareil est mobile ou tablette pour sélectionner où mettre le onClick
    const isMobile = useMobile()

    useEffect(() => {
        // On check si l'appareil utilisé est un téléphone ou un ordinateur, pour afficher la photo correcte
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
                isMobile ? setIsOpen(!isOpen) : setIsOpen(false)
            }}
        >
            <span className="project-top"></span>
            <h3
                onClick={(e) => {
                    e.stopPropagation()
                    !isMobile && setIsOpen(!isOpen)
                }}
            >
                {name}
            </h3>
            <div
                className={
                    isOpen
                        ? "projects-item__content open"
                        : "projects-item__content"
                }
            >
                {/* Si le projet est déplié, cliquer dans le contenu ne doit pas le refermer */}
                <div
                    className="projects-item__details"
                    onClick={(e) => {
                        isOpen ? e.stopPropagation() : null
                    }}
                >
                    {/* On ajoute les tags des technologies utilisées */}
                    <ul className="projects-item__techs">
                        {techs.map((tech) => {
                            return (
                                <li key={tech.title}>
                                    <img src={tech.icon} alt="" aria-hidden />
                                    <span>{tech.title}</span>
                                </li>
                            )
                        })}
                    </ul>
                    {/* On utilise les paragraphes précédemment découpés dans la description */}
                    {toUseDesc.map((paraph, i) => {
                        return <p key={`paraph-${i}`}>{paraph}</p>
                    })}
                    {/* On vérifie qu'il existe un lien github ou vers le site avant d'afficher le bouton */}
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
                {/* On vérifie qu'au moins un lien soit présent avant de transformer l'image en lien externe */}
                {webLink || gitLink ? (
                    <a href={webLink ? webLink : gitLink} target="_blank">
                        <img
                            src={picSmol}
                            alt="Image du projet"
                            className="projects-item__pic"
                            // Cliquer sur l'image ne doit pas refermer le projet
                            onClick={(e) => {
                                isOpen ? e.stopPropagation() : null
                            }}
                        />
                    </a>
                ) : (
                    <img
                        src={picSmol}
                        alt="Image du projet"
                        className="projects-item__pic"
                        onClick={(e) => {
                            isOpen ? e.stopPropagation() : null
                        }}
                    />
                )}
            </div>
        </article>
    )
}

export default SingleProject
