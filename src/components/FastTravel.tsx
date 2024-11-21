import { useState } from "react"
import "../styles/FastTravel.scss"

const FastTravel = () => {
    const [fastTravOpacity, setFastTravOpacity] = useState(0)
    const isDesktop = window.matchMedia("(min-width: 768px)").matches

    window.onscroll = () => {
        if (scrollY <= window.innerHeight - window.innerHeight / 3) {
            setFastTravOpacity(0)
        } else {
            setFastTravOpacity(1)
        }
    }

    return isDesktop ? (
        <ul className="fast-travel" style={{ opacity: fastTravOpacity }}>
            <li>
                <a href="#"></a>
            </li>
            <li>
                <a href="#skills"></a>
            </li>
            <li>
                <a href="#projets"></a>
            </li>
            <li>
                <a href="#about"></a>
            </li>
            <li>
                <a href="#contact"></a>
            </li>
        </ul>
    ) : null
}

export default FastTravel
