import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles/main.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./pages/App"
import CV from "./pages/CV"
import E404 from "./pages/404"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cv" element={<CV />} />
                <Route path="*" element={<E404 />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
