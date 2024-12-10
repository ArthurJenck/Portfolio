import ImgLink from "./ImgLink"
import "../styles/Footer.scss"

const Footer = () => {
    return (
        <footer>
            <ImgLink for="logo" />
            <p>
                Merci d'être passé, ça vous a plu ?
                <span>N'hésitez pas à me le dire !</span>
            </p>
            <div className="socials">
                <ImgLink for="linkedin" />
                <ImgLink for="github" />
            </div>
        </footer>
    )
}

export default Footer
