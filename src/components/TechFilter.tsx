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
export interface techArrayProps {
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
    // On vérifie que le composant soit rendu avec le hook isMounted
    const isMounted = useIsMounted()
    // Le composant est replié par défaut
    const [isOpen, setIsOpen] = useState(false)
    // On crée un nouveau tableau à partir de l'initial pour ne pas perdre la base
    const updatedTechArr = [...toUseTechs]

    // Au chargement du composant, on indique qu'il faut utiliser le tableau initial de techs à utiliser
    useEffect(() => {
        setToUseTechs(toUseTechs)
    }, [isMounted])

    const handleClickTech = (tech: techArrayProps) => {
        // Si aucun filtre n'est cliqué, comme au chargement, toutes les techs sont considérées comme inactive mais les projets seront affichés malgré tout
        noFiltersClicked
            ? updatedTechArr.forEach((tech) => {
                  tech.active = false
              })
            : null
        // Au clic d'un bouton, on indique qu'un filtre a bien été cliqué
        isMounted ? setNoFiltersClicked(false) : null
        // On change le statut active de la tech qui a été cliquée
        updatedTechArr[tech.order - 1].active =
            !updatedTechArr[tech.order - 1].active
        // Si aucune tech n'est active, on les active toutes et on confirme qu'aucun filtre n'est cliqué
        if (updatedTechArr.every((tech) => !tech.active)) {
            updatedTechArr.forEach((tech) => {
                tech.active = true
            })
            setNoFiltersClicked(true)
        }
        // Enfin, on passe le nouveau tableau de techs à utiliser
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
                        // Chaque bouton lance la fonction identifiant les nouvelles techs à utiliser
                        <li
                            key={tech.order}
                            onClick={() => {
                                handleClickTech(tech)
                            }}
                        >
                            {/* On affiche l'icone correspondante selon si le composant est actif ou non */}
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
