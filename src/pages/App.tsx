// import { useEffect } from "react"

import NavBar from "../components/NavBar"
// import App from "./pages/App"
import Header from "../pages/Header"
import Skills from "../pages/Skills"
import FastTravel from "../components/FastTravel"
import Projets from "../pages/Projets"

const App = () => {
    // useEffect(() => {
    //     const link = document.querySelector(
    //         "link[rel~='icon']"
    //     ) as HTMLLinkElement
    //     link.href = "./src/assets/icons/logo.svg"
    // }, [])
    return (
        <>
            <NavBar />
            <FastTravel />
            <Header />
            <Skills />
            <Projets />
        </>
    )
}

export default App
