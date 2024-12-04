import { Dispatch, SetStateAction } from "react"
import filterIcon from "../assets/icons/techs/filter-icon.svg"
import "../styles/TechFilter.scss"

interface TechFilterProps {
    toUseTechs: techArrayProps[]
    setToUseTechs: Dispatch<SetStateAction<techArrayProps[]>>
    baseTechs: techArrayProps[]
}
interface techArrayProps {
    title: string
    icon: string
    order: number
}

const TechFilter = ({
    toUseTechs,
    setToUseTechs,
    baseTechs,
}: TechFilterProps) => {
    console.log(toUseTechs, setToUseTechs)
    return (
        <div className="tech-filter">
            <button>
                <img src={filterIcon} aria-hidden />
            </button>
            <ul>
                {baseTechs.map((tech) => {
                    return (
                        <li key={`tech-${tech.order}`}>
                            <img src={tech.icon} aria-hidden />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TechFilter
