import SkillType from "../components/SkillType"
import skillsArr from "../data/skills.ts"

const Skills = () => {
    const categs = [...new Set(skillsArr.map((skill) => skill.categ))]

    return (
        <section id="skills">
            <h2>Compétences</h2>
            {categs.map((categ, id) => {
                return <SkillType categ={categ} key={`categ-${id}`} />
            })}
        </section>
    )
}

export default Skills
