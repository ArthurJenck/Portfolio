import { lazy, useState } from "react"
const SingleProject = lazy(() => import("../components/SingleProject"))
import TechFilter from "../components/TechFilter"
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
                if (project.techs.some((tech) => tech.active)) {
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
