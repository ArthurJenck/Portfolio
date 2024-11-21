import ImgLink from "../components/ImgLink"
import Chevron from "../assets/icons/chevron.svg"
import { useScroll } from "../hooks"
import "../styles/Header.scss"
import HeroVid from "../components/HeroVid"

const Header = () => {
    const handleH1Wght = (e: React.MouseEvent) => {
        document.documentElement.style.setProperty(
            "--h1-weight",
            JSON.stringify(e.pageY)
        )
    }

    return (
        <header
            onClick={() => useScroll(window.innerHeight)}
            onMouseMove={(e) => handleH1Wght(e)}
            onMouseOver={(e) => handleH1Wght(e)}
        >
            <h1>
                Arthur Jenck <span>Développeur Web Front-End</span>
            </h1>
            <div className="socials" onClick={(e) => e.stopPropagation()}>
                <ImgLink for="linkedin" />
                <ImgLink for="github" />
                <ImgLink for="cv" />
            </div>
            <img src={Chevron} alt="Passer à la suite" className="chevron" />
            <HeroVid />
        </header>
    )
}

export default Header
