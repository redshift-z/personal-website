export default function Display ({ display }) {
    if (display.type == "education") {
        return (<div>
            {display.contents.map((education) => <div>
                <h2>{education.place}</h2>
                <p>{education.time}</p>
                <p>{education.program}</p>
                <ul>{education.courseworks.map((coursework) => <li>
                    <p>{coursework.title}</p>
                    <div>
                        {coursework.tech.map((tech) => <div>{tech.tech}</div>)}
                    </div>
                </li>)}</ul>
            </div>)}
        </div>);
    } else if (display.type == "experiences") {
        return (<div>
            {display.contents.map((category) => <div>
                <h2>{category.category}</h2>
                <div>{category.contents.map((experience) => <div>
                    <h2>{experience.company}</h2>
                    <p>{experience.title}</p>
                    <p>{experience.time}</p>
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