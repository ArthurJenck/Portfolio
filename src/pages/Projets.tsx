import SingleProject from "../components/SingleProject"
import techsAndProjects from "../data/projects"

const Projets = () => {
    const projectsArr = techsAndProjects.projectsArr

    return (
        <section id="projets">
            {projectsArr.map((project, index) => {
                return (
                    <SingleProject
                        key={`projet-${index}`}
                        name={project.name}
                        desc={project.desc}
                        techs={project.techs}
                        gitLink={project.gitLink}
                        webLink={project.webLink}
                        pic={project.picDesk}
                    />
                )
            })}
        </section>
    )
}

export default Projets
