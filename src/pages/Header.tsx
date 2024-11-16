import BG_Vid from "../assets/images/placeholder_header.png"
import ImgLink from "../components/ImgLink"
import Chevron from "../assets/icons/chevron.svg"

const Header = () => {
    return (
        <header>
            <img src={BG_Vid} alt="Vidéo de fond" className="placeholder" />
            <h1>
                Arthur Jenck <span>Développeur Web Front-End</span>
            </h1>
            <div className="socials">
                <ImgLink for="linkedin" />
                <ImgLink for="github" />
                <ImgLink for="cv" />
            </div>
            <img src={Chevron} alt="Passer à la suite" />
        </header>
    )
}

export default Header
