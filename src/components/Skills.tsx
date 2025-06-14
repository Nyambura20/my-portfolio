import { useState } from "react";

type Skill = {
  name: string;
  level: string;
};

const initialSkills: Skill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "HTML5", level: "Advanced" },
  { name: "CSS3", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" },
  { name: "Responsive Design", level: "Advanced" },
];

function Skills() {
  const [skills] = useState<Skill[]>(initialSkills);

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
