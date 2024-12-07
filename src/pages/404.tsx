import ImgLink from "../components/ImgLink"
import "../styles/404.scss"

const error404 = () => {
    return (
        <div id="page-404">
            <h1>
                Erreur <span>404</span>
            </h1>

            <div>
                <p>Vous êtes perdu ?</p>
                <a href="/">Revenir en lieu sûr</a>
            </div>
            <ImgLink for="logo" link="/" />
        </div>
    )
}

export default error404
