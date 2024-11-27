import SingleProject from "../components/SingleProject"
import techsAndProjects from "../data/projects"
import "../styles/Projets.scss"

const Projets = () => {
    const projectsArr = techsAndProjects.projectsArr
    const datedProjects = projectsArr.sort((a, b) => {
        return b.date.getTime() - a.date.getTime()
    })

    return (
        <section id="projets">
            {datedProjects.map((project, index) => {
                return (
                    <SingleProject
                        key={`projet-${index}`}
                        name={project.name}
                        desc={project.desc}
                        techs={project.techs}
                        gitLink={project.gitLink}
                        webLink={project.webLink}
                        picDesk={project.picDesk}
                        picMobile={project.picMobile}
                    />
                )
            })}
        </section>
    )
}

export default Projets
