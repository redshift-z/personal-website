import { useState } from "react";
import { BiSolidChevronDownCircle, BiSolidChevronUpCircle } from "react-icons/bi";

export default function Detail ({ detailType, details}) {
  const [isOpen, setIsOpen] = useState(false);

  switch (detailType) {
    case "education":
      return <>
        <p className="experience-subheader">
          <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
            Coursework { isOpen ? 
              <BiSolidChevronUpCircle className="dropdown-toggle-icon" /> 
              : <BiSolidChevronDownCircle className="dropdown-toggle-icon" />
            }
          </button>
        </p>
        {isOpen && <ul className="education-toggle-list">{details.map((detail) => 
          <li>
            <div className="sm:grid sm:grid-cols-2 experience-details">
              <p className="education-detail-name experience-detail-name">{detail.title}</p>
              <div className="experience-tech flex flex-wrap justify-center sm:justify-start gap-5 gap-y-4">
                {detail.tech.map((tech) => <a href={tech.url} target="_blank" rel="noopener noreferrer" className="justify-item-center grid grid-cols-5 experience-tech-card education-tech-card">
                  <img className="experience-tech-icon" src={tech.img} width={24} height={24} alt="Logo" />
                  <div className="col-span-4 experience-tech-name">{tech.tech}</div>
                </a>)}
              </div>
            </div>
          </li>)}
        </ul>}
      </>
      case "experience":
        return <>
          <p className="experience-subheader">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
              Details { isOpen ? 
                <BiSolidChevronUpCircle className="dropdown-toggle-icon" /> 
                : <BiSolidChevronDownCircle className="dropdown-toggle-icon" />
              }
            </button>
          </p>
          {isOpen && <ul className="experience-bullet-list list-disc list-inside">
            {details.map((detail) => <li className="experience-detail-name">{detail}</li>)}
          </ul>}
        </>
      case "project":
        return <>
          <p className="experience-subheader">
            <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
              Details { isOpen ? 
                <BiSolidChevronUpCircle className="dropdown-toggle-icon" /> 
                : <BiSolidChevronDownCircle className="dropdown-toggle-icon" />
              }
            </button>
          </p>
          {isOpen && <ul className="experience-bullet-list list-disc list-inside">
            {details.map((detail) => <li className="experience-detail-name">{detail}</li>)}
          </ul>}
        </>
      default:
        return <></>
    }
}