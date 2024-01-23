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
                <div className="grid grid-cols-2">
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
                        <ul className="experience-toggle-list">{education.courseworks.map((coursework) => <li><div className="grid grid-cols-2 experience-details">
                            <p className="experience-detail-name">{coursework.title}</p>
                            <div className="experience-tech">{coursework.tech.map((tech) => <div className="grid grid-cols-5 experience-tech-card">
                            <img src={tech.img} width={24} height={24} alt="Logo" />
                            <div className="col-span-4 experience-tech-name">{tech.tech}</div></div>)}
                        </div>
                    </div></li>)}</ul> : <div></div>
                    }
                </div>
            </div>)}
        </div>);
    } else if (display.type == "experiences") {
        return (<div>
            {display.contents.map((category) => <div>
                <h2>{category.category}</h2>
                <div>{category.contents.map((experience) => <div>
                    <div className="grid grid-cols-2">
                        <div>
                            <h2>{experience.company}</h2>
                            <p>{experience.title}</p>
                        </div>
                        <p>{experience.time}</p>
                    </div>
                    <ul>{experience.details.map((detail) => <li>{detail}</li>)}</ul>
                    <div>{experience.tech.map((tech) => <div>{tech.tech}</div>)}</div></div>)}
                </div>
            </div>)}
        </div>);
    } else if (display.type == "projects"){
        return (<div>
            {display.contents.map((category) => <div>
                <h2>{category.category}</h2>
                <div>{category.contents.map((project) => <div>
                <h2>{project.title}</h2>
                <ul>{project.details.map((detail) => <li>{detail}</li>)}</ul>
                <div>{project.tech.map((tech) => <div>{tech.tech}</div>)}</div></div>)}
                </div>
            </div>)}
        </div>);
    } else {
        return (<div>
            {display.contents.map((category) => <div>
                <h2>{category.category}</h2>
                <div>{category.contents.map((skill) => <div>{skill.tech}</div>)}</div>
            </div>)}
        </div>);
    }
}