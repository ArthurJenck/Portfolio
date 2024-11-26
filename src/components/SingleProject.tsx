import ImgLink from "./ImgLink"

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
    pic: string
}

const SingleProject = ({
    name,
    desc,
    techs,
    gitLink,
    webLink,
    pic,
}: SingleProjectProps) => {
    return (
        <article>
            <h3>{name}</h3>
            <div className="project-content">
                <ul>
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
                <div className="project-links">
                    {gitLink ? (
                        <ImgLink
                            for="github"
                            link={gitLink}
                            otherAlt="Lien vers le repository GitHub du projet"
                        />
                    ) : null}
                    {webLink ? <ImgLink for="projet" link={webLink} /> : null}
                </div>
                <img
                    src={pic}
                    alt="Image du projet"
                    style={{ maxWidth: "100px" }}
                />
            </div>
            {/*

            <img
                src={placeholder}
                alt="image du projet"
                
            /> */}
        </article>
    )
}

export default SingleProject
