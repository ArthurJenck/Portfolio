import skillsArr from "../data/skills.ts"
import SkillDiv from "./SkillDiv"
import "../styles/SkillType.scss"

interface SkillTypeProps {
    categ: string
}

const SkillType = ({ categ }: SkillTypeProps) => {
    return (
        <div className="skill-type">
            <h3>{categ}</h3>
            <ul>
                {skillsArr.map((skill, id) => {
                    return skill.categ === categ ? (
                        <SkillDiv
                            key={`skill-${id}`}
                            name={skill.name}
                            pic={skill.pic}
                            desc={skill.desc}
                        />
                    ) : null
                })}
            </ul>
        </div>
    )
}

export default SkillType
