import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/main.scss"
import NavBar from "./components/NavBar"
import App from "./pages/App"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <NavBar />
        <App />
    </StrictMode>
)
