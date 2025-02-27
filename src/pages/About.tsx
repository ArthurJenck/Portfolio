import spiral from "../assets/images/spiral.svg"
import { useEffect } from "react"
import { useMobile } from "../hooks"
import "../styles/About.scss"

const About = ({
    spiralTurn = (e: React.MouseEvent) => {
        e
    },
}) => {
    const isMobile = useMobile()

    // En mobile et tablette, l'animation de la spirale est déclenchée au scroll
    const spiralTurnMobile = () => {
        const spiralImg = document.querySelector(
            ".about-content>img"
        ) as HTMLImageElement
        spiralImg.style.transform = `rotate(-${scrollY / 2}deg)`
    }

    // L'écouteur d'événement est ajouté qu'en mobile ou tablette
    useEffect(() => {
        if (isMobile) {
            spiralTurnMobile()
            window.addEventListener("scroll", spiralTurnMobile)
        }
    }, [])

    return (
        <section
            id="about"
            // En version tablette, une autre fonction fait tourner la spirale lors du déplacement de la souris
            onMouseMove={
                !isMobile
                    ? (e) => {
                          spiralTurn(e)
                      }
                    : () => {}
            }
        >
            <h2>À propos</h2>
            <div className="about-content">
                <img src={spiral} alt="" aria-hidden />
                <div className="about-content__text">
                    <h3>Je sais centrer une div</h3>
                    <p>
                        Fou amoureux du développement web, j'y pense le jour et
                        j'en rêve la nuit. Ma relation avec le dev a débuté il y
                        a plusieurs années, et ma soif d'apprendre s'intensifie
                        au fil du savoir que j'assimile. Mon parcours à l'ECV
                        Paris en tant que Chef de Projet Digital, ainsi que mon
                        parcours OpenClassrooms de Développeur Web m'ont permis
                        de déployer mes ailes.
                    </p>
                    <p>
                        Né en 2002, en région parisienne, je suis aussi grand
                        adepte du cinéma thriller, d'escalade, de natation et de
                        spaghettis bolognaises que je consomme en quantités
                        inquiétantes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
