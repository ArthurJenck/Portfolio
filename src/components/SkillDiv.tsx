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
            <div className="skill-div__desc">
                <h4>{name}</h4>
                <p>{desc}</p>
            </div>
        </li>
    )
}

export default SkillDiv
