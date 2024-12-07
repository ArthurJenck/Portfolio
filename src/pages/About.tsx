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
    const spiralTurnMobile = () => {
        const spiralImg = document.querySelector(
            ".about-content>img"
        ) as HTMLImageElement
        spiralImg.style.transform = `rotate(-${scrollY / 2}deg)`
    }

    useEffect(() => {
        if (isMobile) {
            spiralTurnMobile()
            window.addEventListener("scroll", spiralTurnMobile)
        }
    }, [])

    return (
        <section
            id="about"
            onMouseMove={
                isMobile
                    ? (e) => {
                          spiralTurn(e)
                      }
                    : () => {}
            }
        >
            <span className="about-top"></span>
            <h2>À propos</h2>
            <div className="about-content">
                <img src={spiral} aria-hidden />
                <div className="about-content__text">
                    <h3>Je sais centrer une div</h3>
                    <p>
                        Fou amoureux du développement web, j'y pense le jour et
                        j'en rêve la nuit. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Quisque gravida leo non
                        facilisis fermentum. Nulla facilisi. Vivamus ac erat
                        eget nisl sodales porta.
                    </p>
                    <p>
                        Mauris sed dignissim arcu. Donec rutrum nisi ut neque
                        viverra ultrices. Aussi, je consomme des spaghettis
                        bolognaises en quantités inquiétantes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
