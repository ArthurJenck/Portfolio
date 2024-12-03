import { Dispatch, SetStateAction } from "react"

interface TechFilterProps {
    toUseTechs: techArrayProps[]
    setToUseTechs: Dispatch<SetStateAction<techArrayProps[]>>
}
interface techArrayProps {
    title: string
    icon: string
    order: number
}

const TechFilter = ({ toUseTechs, setToUseTechs }: TechFilterProps) => {
    console.log(toUseTechs, setToUseTechs)
    return <div className="tech-filter">img</div>
}

export default TechFilter
