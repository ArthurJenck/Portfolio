import NavBar from "../components/NavBar"
import Header from "../pages/Header"
import Skills from "../pages/Skills"
import FastTravel from "../components/FastTravel"
import Projets from "../pages/Projets"
import About from "./About"
import Contact from "./Contact"
import { useState } from "react"
import Footer from "../components/Footer"

const App = () => {
    // La fonction de rotation de la spirale de la section À propos est située ici pour être transmise également à la section Contact. Par défaut, la rotation est à 0
    const [spiralRotate, setSpiralRotate] = useState(0)
    const spiralTurn = () => {
        // On fait tourner la spirale de 2 degrés anti-horaire à chaque lancement de la fonction
        setSpiralRotate(spiralRotate - 2)
        // Une fois un tour complet effectué, on repasse à 0 pour éviter d'avoir des nombres trop grands
        spiralRotate === -360 ? setSpiralRotate(0) : null
        const spiralImg = document.querySelector(
            ".about-content>img"
        ) as HTMLImageElement
        spiralImg!.style.transform = `rotate(${spiralRotate}deg)`
    }

    return (
        <>
            <NavBar />
            <FastTravel />
            <Header />
            <Skills />
            <Projets />
            <About spiralTurn={spiralTurn} />
            <Contact spiralTurn={spiralTurn} />
            <Footer />
        </>
    )
}

export default App
