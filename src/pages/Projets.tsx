import { useState } from "react"
import SingleProject from "../components/SingleProject"
// import TechFilter from "../components/TechFilter"
import techsAndProjects from "../data/projects"
import "../styles/Projets.scss"

const Projets = () => {
    const projectsArr = techsAndProjects.projectsArr
    const datedProjects = projectsArr.sort((a, b) => {
        return b.date.getTime() - a.date.getTime()
    })
    const baseTechs = techsAndProjects.techsArr.sort((a, b) => {
        return a.order - b.order
    })
    const [toUseTechs, setToUseTechs] = useState(baseTechs)
    console.log(setToUseTechs)

    return (
        <section id="projets">
            <h2>Projets</h2>
            {/* <TechFilter
                toUseTechs={toUseTechs}
                setToUseTechs={setToUseTechs}
                baseTechs={baseTechs}
            /> */}
            {datedProjects.map((project, index) => {
                if (project.techs.some((tech) => toUseTechs.includes(tech))) {
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
                } else {
                    console.log(
                        project.name + " ne contient pas les techs demandées"
                    )
                }
            })}
        </section>
    )
}

export default Projets
