import { BiSolidChevronDownCircle, BiSolidChevronUpCircle } from "react-icons/bi";
import Detail from "./Detail";

export default function Display ({ display }) {
    if (display.type == "education") {
        return (<div>
            {display.contents.map((education) => <div>
                <div className="sm:grid sm:grid-cols-2">
                    <h2 className="experience-title">{education.place}</h2>
                    <p className="education-time">{education.time}</p>
                </div>
                <p className="experience-subtitle">{education.program}</p>
                <div>
                    <Detail detailType="education" details={education.courseworks}></Detail>
                </div>
            </div>)}
        </div>);
    } else if (display.type == "experiences") {
        return (<div>
            {display.contents.map((category) => <div>
                <h2 className="experience-category">{category.category}</h2>
                <div>{category.contents.map((experience, index) => <div>
                    <div className="sm:grid sm:grid-cols-2">
                        <h2 className="experience-title">{experience.company}</h2>
                    </div>
                    {experience.roles.map((role) => <>
                        <div className="sm:grid sm:grid-cols-2">
                            <p className="experience-subtitle">{role.title}</p>
                            <p className="experience-time">{role.time}</p>
                        </div>
                        <div>
                            <Detail detailType="experience" details={role.details}></Detail>
                        </div>
                    </>)}
                    <div className="experience-tech-container flex flex-wrap justify-center sm:justify-start gap-4 gap-y-4">
                        {experience.tech.map((tech) => <a href={tech.url} target="_blank" rel="noopener noreferrer" className="grid grid-cols-5 experience-tech-card">
                            <img className="experience-tech-icon" src={tech.img} width={24} height={24} alt="Logo" />
                            <div className="col-span-4 experience-tech-name">{tech.tech}</div>
                        </a>)}
                    </div>
                </div>)}
                </div>
            </div>)}
        </div>);
    } else if (display.type == "projects"){
        return (<div>
            {display.contents.map((category) => <div>
                <h2 className="experience-category">{category.category}</h2>
                <div>{category.contents.map((project) => <div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <h2 className="project-title experience-title">{project.title}</h2>
                    </a>
                <div>
                    <Detail detailType="project" details={project.details}></Detail>
                </div>
                <div className="experience-tech-container flex flex-wrap justify-center sm:justify-start gap-4 gap-y-4">
                    {project.tech.map((tech) => 
                    <a href={tech.url} target="_blank" rel="noopener noreferrer" className="grid grid-cols-5 experience-tech-card">
                        <img className="experience-tech-icon" src={tech.img} width={24} height={24} alt="Logo" />
                        <div className="col-span-5 sm:col-span-4 experience-tech-name">{tech.tech}</div>
                    </a>)}
                </div>
                </div>)}
                </div>
            </div>)}
        </div>);
    } else {
        return (<div>
            {display.contents.map((category) => <div>
                <h2 className="experience-category">{category.category}</h2>
                <div className="skill-container flex flex-wrap justify-center gap-4 gap-y-4">
                    {category.contents.map((skill) => 
                    <a href={skill.url} target="_blank" rel="noopener noreferrer" className="grid grid-cols-5 experience-tech-card">
                        <img className="experience-tech-icon" src={skill.img} width={24} height={24} alt="Logo" />
                        <div className="col-span-4 experience-tech-name">{skill.tech}</div>
                    </a>)}</div>
            </div>)}
        </div>);
    }
}