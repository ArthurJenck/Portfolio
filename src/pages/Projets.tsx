import { lazy, useState } from "react"
const SingleProject = lazy(() => import("../components/SingleProject"))
import TechFilter, { techArrayProps } from "../components/TechFilter"
import techsAndProjects from "../data/projects"
import "../styles/Projets.scss"

const Projets = () => {
    const projectsArr = [...techsAndProjects.projectsArr]
    const datedProjects = projectsArr.sort((a, b) => {
        return b.date.getTime() - a.date.getTime()
    })
    const baseTechs = [
        ...techsAndProjects.techsArr.sort((a, b) => {
            return a.order - b.order
        }),
    ]
    const [toUseTechs, setToUseTechs] = useState(baseTechs)
    const [noFiltersClicked, setNoFiltersClicked] = useState(true)
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
            {datedProjects.map((project, index) => {
                activeTechs.length = 0
                toUseTechs.forEach((tech) => {
                    tech.active ? activeTechs.push(tech) : null
                })
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
