import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/main.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./pages/App"
import CV from "./pages/CV"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cv" element={<CV />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
