import React from "react";
import "../stylingFiles/Skills.css";

const Skills = () => {
  const skills = [
    "JavaScript", "Java", "HTML", "CSS", "ReactJs", "Tailwind CSS", "Bootstrap",
    "Windows", 
    "SQL", 
    "Eclipse", "VSCode", "IntelliJ IDEA", "MySQL Workbench"
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
