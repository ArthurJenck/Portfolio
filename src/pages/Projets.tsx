import { useState } from "react"
import SingleProject from "../components/SingleProject"
import TechFilter, { techArrayProps } from "../components/TechFilter"
import { projectsArr } from "../data/projects"
import { techsArr } from "../data/techs"
import "../styles/Projets.scss"

const Projets = () => {
    // On trie ensuite ces projets par date
    const datedProjects = projectsArr.sort((a, b) => {
        return b.date.getTime() - a.date.getTime()
    })

    // Les techs sont récupérées et triées par ordre d'apparition (indiqué manuellement dans les données d'objet)
    const baseTechs = [
        ...techsArr.sort((a, b) => {
            return a.order - b.order
        }),
    ]

    // Le tableau de techs à utiliser sera ensuite mis à jour
    const [toUseTechs, setToUseTechs] = useState(baseTechs)
    // Quand aucun filtre n'a été cliqué, c'est un cas particulier nécessitant d'afficher tous les projets
    const [noFiltersClicked, setNoFiltersClicked] = useState(true)
    // Les techs indiquées comme actives et donc comme filtres seront ajoutées dans ce tableau
    const activeTechs = [] as Array<techArrayProps>

    return (
        <section id="projets">
            <h2>Projets</h2>
            <TechFilter
                toUseTechs={toUseTechs}
                setToUseTechs={setToUseTechs}
                noFiltersClicked={noFiltersClicked}
                setNoFiltersClicked={setNoFiltersClicked}
            />
            {/* Sur chaque rendu, on vérifie les filtres actifs */}
            {datedProjects.map((project, index) => {
                activeTechs.length = 0
                toUseTechs.forEach((tech) => {
                    tech.active ? activeTechs.push(tech) : null
                })
                // Si le projet contient tous les filtres demandés, ou bien qu'aucun filtre n'est cliqué, alors le projet est affiché
                if (
                    activeTechs.every((tech) => project.techs.includes(tech)) ||
                    noFiltersClicked
                ) {
                    return (
                        <SingleProject
                            key={`projet-${index}`}
                            name={project.name}
                            desc={project.desc}
                            techs={project.techs}
                            gitLink={project.gitLink}
                            webLink={project.webLink}
                            picDesk={project.picDesk}
                            picSmol={project.picSmol}
                            picMobile={project.picMobile}
                        />
                    )
                }
            })}
        </section>
    )
}

export default Projets
