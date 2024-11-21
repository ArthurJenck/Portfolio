import "../styles/SkillDiv.scss"

interface SkillDivProps {
    pic: string
    name: string
    desc: string
}

const SkillDiv = ({ pic, name, desc }: SkillDivProps) => {
    return (
        <li className="skill-div">
            <img src={pic} alt={`Logo ${name}`} title={name} />
            <p>{desc}</p>
        </li>
    )
}

export default SkillDiv
