import NavBar from "../components/NavBar"
// import App from "./pages/App"
import Header from "../pages/Header"
import Skills from "../pages/Skills"
import FastTravel from "../components/FastTravel"
import Projets from "../pages/Projets"
import About from "./About"
import Contact from "./Contact"

const App = () => {
    return (
        <>
            <NavBar />
            <FastTravel />
            <Header />
            <Skills />
            <Projets />
            <About />
            <Contact />
        </>
    )
}

export default App
