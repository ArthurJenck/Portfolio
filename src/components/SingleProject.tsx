import placeholderIcon from "../assets/icons/techs/html-css.svg"
import placeholder from "../assets/images/bergamotte_desk.webp"
import gitIcon from "../assets/icons/github-icon.svg"

const SingleProject = () => {
    return (
        <article>
            <h3>Bergamotte</h3>
            <div className="project-content">
                <ul>
                    <li>
                        <img src={placeholderIcon} aria-hidden />
                        HTML / CSS
                    </li>
                    <li>
                        <img src={placeholderIcon} aria-hidden />
                        Sass / Scss
                    </li>
                    <li>
                        <img src={placeholderIcon} aria-hidden />
                        Javascript / TS
                    </li>
                    <li>
                        <img src={placeholderIcon} aria-hidden />
                        Node.js
                    </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Beatae saepe nemo quae obcaecati odit, qui laborum suscipit
                    inventore minima aspernatur ratione eveniet nulla in tenetur
                    nam tempora, molestias recusandae harum adipisci?
                    <br />
                    Exercitationem iusto temporibus expedita perspiciatis illum,
                    quas repellendus nihil soluta dolores voluptate
                    reprehenderit, nesciunt, possimus asperiores! Quas, iusto
                    nesciunt.
                </p>
                <div className="project-links">
                    <a
                        href="https://github.com/ArthurJenck/ECV_Bergamotte"
                        className="project-link__git"
                        target="_blank"
                    >
                        <img
                            src={gitIcon}
                            alt="Icone GitHub"
                            title="Lien du repo GitHub"
                        />
                    </a>
                    <a
                        href="https://arthurjenck.github.io/ECV_Bergamotte/"
                        className="project-link__website"
                        target="_blank"
                    >
                        <img
                            src={gitIcon}
                            alt="Icone de site externe"
                            title="Lien du site"
                        />
                    </a>
                </div>
            </div>
            <img
                src={placeholder}
                alt="image du projet"
                style={{ maxWidth: "300px" }}
            />
        </article>
    )
}

export default SingleProject
