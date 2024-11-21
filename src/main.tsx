import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/main.scss"
import NavBar from "./components/NavBar"
// import App from "./pages/App"
import Header from "./pages/Header"
import Skills from "./pages/Skills"
import FastTravel from "./components/FastTravel"
import Projets from "./pages/Projets"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <NavBar />
        <FastTravel />
        <Header />
        <Skills />
        <Projets />
    </StrictMode>
)
