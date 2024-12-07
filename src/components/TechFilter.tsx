import { Dispatch, SetStateAction, useEffect, useState } from "react"
import filterIcon from "../assets/icons/techs/filter-icon.svg"
import "../styles/TechFilter.scss"
import { useIsMounted } from "../hooks"

interface TechFilterProps {
    toUseTechs: techArrayProps[]
    setToUseTechs: Dispatch<SetStateAction<techArrayProps[]>>
    noFiltersClicked: boolean
    setNoFiltersClicked: Dispatch<SetStateAction<boolean>>
}
interface techArrayProps {
    title: string
    icon: string
    activeIcon: string
    inactiveIcon: string
    order: number
    active: boolean
}

const TechFilter = ({
    toUseTechs,
    setToUseTechs,
    noFiltersClicked,
    setNoFiltersClicked,
}: TechFilterProps) => {
    const isMounted = useIsMounted()

    useEffect(() => {
        setToUseTechs(toUseTechs)
    }, [isMounted])

    const [isOpen, setIsOpen] = useState(false)
    const updatedTechArr = [...toUseTechs]

    const handleClickTech = (tech: techArrayProps) => {
        noFiltersClicked
            ? updatedTechArr.forEach((tech) => {
                  tech.active = false
              })
            : null
        isMounted ? setNoFiltersClicked(false) : null
        updatedTechArr[tech.order - 1].active =
            !updatedTechArr[tech.order - 1].active
        if (updatedTechArr.every((tech) => !tech.active)) {
            updatedTechArr.forEach((tech) => {
                tech.active = true
            })
            setNoFiltersClicked(true)
        }
        setToUseTechs(updatedTechArr)
    }

    return (
        <div className="tech-filter">
            <button
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                <img src={filterIcon} aria-hidden />
            </button>
            <ul className={isOpen ? "open" : ""}>
                {toUseTechs.map((tech) => {
                    return (
                        <li
                            key={tech.order}
                            onClick={() => {
                                handleClickTech(tech)
                            }}
                        >
                            <img
                                src={
                                    noFiltersClicked || !tech.active
                                        ? tech.inactiveIcon
                                        : tech.activeIcon
                                }
                                aria-hidden
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TechFilter
