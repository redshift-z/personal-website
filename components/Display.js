import { useState } from "react";
import { BiSolidChevronDownCircle, BiSolidChevronUpCircle } from "react-icons/bi";

export default function Display ({ display }) {
    const toggles = [];
    display.contents.forEach(element => {
        toggles.push(false);
    });
    const [detailToggle, setDetailToggle] = useState(toggles);


    if (display.type == "education") {
        return (<div>
            {display.contents.map((education, index) => <div>
                <div className="sm:grid sm:grid-cols-2">
                    <h2 className="experience-title">{education.place}</h2>
                    <p className="experience-time">{education.time}</p>
                </div>
                <p className="experience-subtitle">{education.program}</p>
                <p className="experience-subheader">
                    <button className="dropdown-toggle" onClick={() => {
                        const newToggle = detailToggle.slice();
                        newToggle[index] = !newToggle[index];
                        setDetailToggle(newToggle);}}>
                        Coursework {detailToggle[index] ? <BiSolidChevronUpCircle className="dropdown-toggle-icon"/> : <BiSolidChevronDownCircle className="dropdown-toggle-icon"/>}
                    </button>
                </p>
                <div>
                    {detailToggle[index] ? 
                        <ul className="education-toggle-list">{education.courseworks.map((coursework) => <li><div className="sm:grid sm:grid-cols-2 experience-details">
                            <p className="education-detail-name experience-detail-name">{coursework.title}</p>
                            <div className="experience-tech flex flex-wrap justify-center sm:justify-start gap-5 gap-y-4">
                                {coursework.tech.map((tech) =>
                                    <a href={tech.url} target="_blank" rel="noopener noreferrer" className="justify-item-center grid grid-cols-5 experience-tech-card education-tech-card">
                                        <img className="experience-tech-icon" src={tech.img} width={24} height={24} alt="Logo" />
                                        <div className="col-span-4 experience-tech-name">{tech.tech}</div>
                                    </a>)}
                                </div>
                            </div></li>)}
                        </ul> : <div></div>
                    }
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
                        <p className="experience-time">{experience.time}</p>
                    </div>
                    <p className="experience-subtitle">{experience.title}</p>
                    <p className="experience-subheader">
                        <button className="dropdown-toggle" onClick={() => {
                            const newToggle = detailToggle.slice();
                            newToggle[index] = !newToggle[index];
                            setDetailToggle(newToggle);}}>
                            Details {detailToggle[index] ? <BiSolidChevronUpCircle className="dropdown-toggle-icon"/> : <BiSolidChevronDownCircle className="dropdown-toggle-icon"/>}
                        </button>
                    </p>
                    <div>
                        {detailToggle[index] ? 
                            <ul className="experience-bullet-list list-disc list-inside">{experience.details.map((detail) => <li className="experience-detail-name">{detail}</li>)}</ul> 
                            : <div></div>
                        }
                    </div>
                    <div className="experience-tech-container flex flex-wrap justify-center sm:justify-start gap-4 gap-y-4">
                        {experience.tech.map((tech) => 
                        <a href={tech.url} target="_blank" rel="noopener noreferrer" className="grid grid-cols-5 experience-tech-card">
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
                <div>{category.contents.map((project, index) => <div>
                <a href={project.url} target="_blank" rel="noopener noreferrer"><h2 className="project-title experience-title">{project.title}</h2></a>
                <p className="experience-subheader">
                    <button className="dropdown-toggle" onClick={() => {
                        const newToggle = detailToggle.slice();
                        newToggle[index] = !newToggle[index];
                        setDetailToggle(newToggle);}}>
                        Details {detailToggle[index] ? <BiSolidChevronUpCircle className="dropdown-toggle-icon"/> : <BiSolidChevronDownCircle className="dropdown-toggle-icon"/>}
                    </button>
                </p>
                <div>
                    {detailToggle[index] ? 
                        <ul className="experience-bullet-list list-disc list-inside">{project.details.map((detail) => <li className="experience-detail-name">{detail}</li>)}</ul> 
                        : <div></div>
                    }
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