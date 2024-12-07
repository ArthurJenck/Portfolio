import NavBar from "../components/NavBar"
import Header from "../pages/Header"
import Skills from "../pages/Skills"
import FastTravel from "../components/FastTravel"
import Projets from "../pages/Projets"
import About from "./About"
import Contact from "./Contact"
import { useState } from "react"

const App = () => {
    const [spiralRotate, setSpiralRotate] = useState(0)
    const spiralTurn = () => {
        setSpiralRotate(spiralRotate - 2)
        spiralRotate === -360 ? setSpiralRotate(0) : null
        const spiralImg = document.querySelector(
            ".about-content>img"
        ) as HTMLImageElement
        spiralImg!.style.transform = `rotate(${spiralRotate}deg)`
        console.log(spiralImg.style.transform)
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
        </>
    )
}

export default App
