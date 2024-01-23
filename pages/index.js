import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import { BsLinkedin, BsGithub, BsInstagram, BsMedium, BsEnvelopeAt} from "react-icons/bs";
import Display from '@components/Display';
export default function Home() {
  const education = { type: "education", contents: [
    {
      place: "University of Indonesia",
      time: "Expected May 2024",
      program: "Bachelor of Science in Computer Science (GPA 3.55/4.00)",
      courseworks: [
        {title: 'Data Structures & Algorithms', tech: [{tech: 'Java', img: '/logos/java.svg'}]},
        {title: 'Operating Systems', tech: [{tech: 'C', img: '/logos/c.svg'}]},
        {title: 'Introduction to AI & Data Science', tech: [{tech: 'Python', img: '/logos/python.svg'}]},
        {title: 'Computer Networks', tech: [{tech: 'Python', img: '/logos/python.svg'}, 
                                            {tech: 'GCP', img: '/logos/gcp.svg'}, 
                                            {tech: 'Docker', img: '/logos/docker.svg'}]},
        {title: 'Advanced Databases', tech: [{tech: 'PostgreSQL', img: '/logos/postgresql.svg'}, 
                                             {tech: 'MySQL', img: '/logos/mysql.svg'}]},
        {title: 'Parallel Programming', tech: [{tech: 'C', img: '/logos/c.svg'}, {tech: 'C++', img: '/logos/cpp.svg'}, 
                                               {tech: 'CUDA', img: '/logos/cuda.svg'}]},
        {title: 'Distributed Systems', tech: [{tech: 'Python', img: '/logos/python.svg'}, {tech: 'Kafka', img: '/logos/kafka.svg'}]}
      ]
    },
    {
      place: "Newcastle University",
      time: "September 2023 - January 2024",
      program: "Study Abroad Math Program",
      courseworks: [
        {title: 'Introductory Astrophysics', tech: []},
        {title: 'Computational Probability and Statistics with R', tech: [{tech: 'R', img: 'logos/r.svg'}]},
        {title: 'Problem Solving with Python', tech: [{tech: 'Python', img: 'logos/python.svg'}]},
        {title: 'Interconnected World: Foundations of Human & Development Geographies', tech: []},
        {title: 'Order and Disorder: The Shaping of the 21st Century', tech: []}
      ]
    }
  ]};

  const experiences = { type: "experiences", contents: [
    {
      category: "Computing",
      contents: [
        {
          company: "University of Indonesia",
          title: "Teaching Assistant of Advanced Programming",
          time: "January 2023 - June 2023",
          details: [
            "Created problem sets on advanced programming concepts such as design patterns, clean code, deployments, concurrency, and microservices.",
            "Advised 3 student groups on their website projects.",
            "Graded and gave feedbacks on assignments related to advanced programming concepts."
          ],
          tech: [
            {tech: 'JavaScript', img: 'logos/javascript.svg'}, {tech: 'Java', img: 'logos/java.svg'}, 
            {tech: 'Spring Boot', img: 'logos/springboot.svg'}, {tech: 'GCP', img: 'logos/gcp.svg'}, 
            {tech: 'Next.js', img: 'logos/next.svg'}
          ]
        },
        {
          company: "Alumni Association for Indonesian National Astronomy Olympiad Team (TOASTI)",
          title: "Web Development Lead",
          time: "January 2022 - January 2023",
          details: [
            "Initiated the organization's website project.",
            "Led the decision making process for the technological stack choice.",
            "Conducted interviews for UX research and designed the UI of the website.",
            "Built and managed the project's CI/CD pipeline using GitHub Actions.",
            "Developed an astronomical event calendar that allows users to get reminders through Google Calendar's API."
          ],
          tech: [
            {tech: 'JavaScript', img: 'logos/javascript.svg'}, {tech: 'React.js', img: 'logos/react.svg'}, 
            {tech: 'Gatsby', img: 'logos/gatsby.svg'}, {tech: 'Strapi', img: 'logos/strapi.svg'}, 
            {tech: 'Firebase', img: 'logos/firebase.svg'}, {tech: 'GraphQL', img: 'logos/graphql.svg'}
          ]
        },
        {
          company: "University of Indonesia",
          title: "Teaching Assistant of Statistics & Probability",
          time: "February 2022 - June 2022",
          details: [
            "Graded and gave feedbacks on statistics and probability assignments."
          ],
          tech: []
        }
      ]
    },
    {
      category: "Astronomy/Astrophysics",
      contents: [
        {
          company: "Freelance",
          title: "Astronomy/Astrophysics Tutor",
          time: "September 2019 - September 2022",
          details: [
            "Taught astronomy/astrophysics to high school students who are preparing for competitions at various levels (from regional to international).",
            "Written original problem sets on astronomy/astrophysics.",
            "Helped 20+ students achieve awards in national/international competitions."
          ],
          tech: []
        },
        {
          company: "Bersains",
          title: "Astronomy Content Creator",
          time: "August 2020 - July 2021",
          details: [
            "Written introductory course materials on mathematics, physics, celestial coordinate systems, and celestial mechanics.",
            "Written introductory problem sets on astronomy/astrophysics."
          ],
          tech: []
        },
        {
          company: "Edufia",
          title: "Astronomy Instructor",
          time: "May 2020 - May 2021",
          details: [
            "Written introductory course materials on astronomical time systems, galactic/extragalactic astrophysics, and cosmology.",
            "Written problem sets & solutions on introductory astronomy/astrophysics.",
            "Held astronomy/astrophysics tutoring session for high school students that are preparing for competitions."
          ],
          tech: []
        }
      ]
    },
    {
      category: "Others",
      contents: [
        {
          company: "Indonesian International Student Mobility Awards (IISMA)",
          title: "Student Representative",
          time: "April 2023 - January 2024",
          details: [
            "Led a group of IISMA awardees who are studying at Newcastle University.",
            "Managed & kept track of their departure/arrival preparations (funding requests, visa applications, insurance, university applications, accommodations & flights).",
            "Organized events to introduce Indonesian culture to Newcastle University students.",
            "Managed the communications between Newcastle University IISMA awardees and various stakeholders."
          ],
          tech: []
        },
        {
          company: "Alumni Association for Indonesian National Astronomy Olympiad Team (TOASTI)",
          title: "Social Media Coordinator",
          time: "November 2020 - January 2022",
          details: [
            "Managed the Instagram account of TOASTI.",
            "Grew the Instagram follower base by 30%.",
            "Created promotional contents for their events.",
            "Created design systems for their Instagram content."
          ],
          tech: [{tech: 'Figma', img: 'logos/figma.svg'}, {tech: 'Canva', img: 'logos/canva.svg'}, 
                 {tech: 'Photoshop', img: 'logos/photoshop.svg'}]
        }
      ]
    }
  ]};

  const projects = { type: "projects", contents: [
    {
      category: "Ongoing",
      contents: [
        {
          title: "Undergraduate Final Project",
          details: [
            "Identifies value redundancies due to the usage of Kokkos functions on the most recent release of LAMMPS (Large-Scale Atomic/Molecular Massively Parallel Simulator) using GVProf, a state-of-art GPU profiler.",
            "Develops solutions for the identified value redundancies.",
            "Analyzes the effects of the identified value redundancy on the performance of LAMMPS on an NVIDIA GPU cluster."
          ],
          tech: [{tech: 'C++', img: 'logos/cpp.svg'}, {tech: 'CUDA', img: 'logos/cuda.svg'}, 
                 {tech: 'Kokkos', img: 'logos/kokkos.png'}, {tech: 'LAMMPS', img: 'logos/lammps.svg'}]
        },
        {
          title: "Thriftin",
          details: [
            "Designed a questionnaire website for a personal stylist/shopper to help identify their client’s needs and preferences.",
            "Implements the website design on the specified tech stack.",
            "Integrates payment service to the website"
          ],
          tech: [{tech: 'TypeScript', img: 'logos/typescript.svg'}, {tech: 'Next.js', img: 'logos/next.svg'}, 
          {tech: 'Netlify', img: '/logo-netlify.svg'}, {tech: 'Tailwind CSS', img: 'logos/tailwindcss.svg'}, 
          {tech: 'Contentful', img: 'logos/contentful.svg'}]
        }
      ]
    },
    {
      category: "Past",
      contents: [
        {
          title: "Onion Routing Simulator",
          details: [
            "Developed a log-based simulator to help visualize the process of sending web requests and responses through an onion routing scheme."
          ],
          tech: [{tech: 'Python', img: 'logos/python.svg'}]
        },
        {
          title: "KapalTech Vessel Maintenance System",
          details: [
            "Contributed in the development of a website to monitor ship/vessel health and manage their maintenance processes.",
            "Created a dashboard to display lists of vessels owned by a company and the health status of all their components.",
            "Created database models and APIs for the vessels and their component information.",
            "Achieved 99% test coverage and ensured 0 security hotspots/technical debts for all the modules I contributed in.",
            "Actively participated in code review processes along with the other team members, reviewing at least one person's work in a week.",
            "Implemented the Scrum framework and became the team's Scrum master for a development sprint."
          ],
          tech: [{tech: 'Python', img: 'logos/python.svg'}, {tech: 'Django', img: 'logos/django.svg'}, 
                 {tech: 'JavaScript', img: 'logos/javascript.svg'}, {tech: 'React.js', img: 'logos/react.svg'}, 
                 {tech: 'Jest', img: 'logos/jest.svg'}, {tech: 'SonarQube', img: 'logos/sonarqube.svg'}]
        }
      ]
    }
  ]};

  const skills = {type: "skills", contents: [
    {
      category: "Languages",
      contents: [
        {tech: "C", img: 'logos/c.svg'}, {tech: "C++", img: 'logos/cpp.svg'}, {tech: "Python", img: 'logos/python.svg'}, 
        {tech: "SQL", img: 'logos/sql.svg'}, {tech: "Java", img: 'logos/java.svg'}, {tech: "JavaScript", img: 'logos/javascript.svg'}, 
        {tech: "Matlab", img: 'logos/matlab.png'}, {tech: "HTML", img:'logos/html.svg'}, {tech: "TypeScript", img: 'logos/typescript.svg'}, 
        {tech: "R", img: 'logos/r.svg'}, {tech: "GraphQL", img: 'logos/graphql.svg'}
      ]
    },
    {
      category: "Operating Systems",
      contents: [
        {tech: "Windows", img: 'logos/windows.svg'}, {tech: "Ubuntu", img:'logos/ubuntu.svg'}, {tech: "Debian", img:'logos/debian.svg'}
      ]
    },
    {
      category: "Technologies",
      contents: [
        {tech: "React.js", img: 'logos/react.svg'}, {tech: "Next.js", img: 'logos/next.svg'}, {tech: "Gatsby", img: 'logos/gatsby.svg'}, 
        {tech: "Contentful", img: 'logos/contentful.svg'}, {tech: "Strapi", img: 'logos/strapi.svg'}, 
        {tech: "Django", img: 'logos/django.svg'}, {tech: "Spring Boot", img: 'logos/springboot.svg'}, {tech: "jQuery", img: 'logos/jquery.svg'}, 
        {tech: "Bootstrap", img:'logos/bootstrap.svg'}, {tech: "Tailwind CSS", img: 'logos/tailwindcss.svg'}, 
        {tech: "Node.js", img: 'logos/node.png'}, {tech: "Docker", img: 'logos/docker.svg'}, {tech: "GCP", img: 'logos/gcp.svg'}, 
        {tech: "CUDA", img: 'logos/cuda.svg'}, {tech: "Kafka", img: 'logos/kafka.svg'}
      ]
    }
  ]};

  const [experienceDisplay, setExperienceDisplay] = useState({display: education, educationButton: "experience-toggle-on",
                                                    experienceButton: "experience-toggle-off", projectButton: "experience-toggle-off",
                                                    skillButton: "experience-toggle-off"});

  return (
    <div className="container">
      <Head>
        <title>hey!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-2 gap-10'>
        <Image
          src="/me.jpg"
          width={580}
          height={580}
          alt="Picture of the author"
          className='intro-pic'
        />
        <div>
          <Header title="hey!"/>
          <p className="description">
            I'm <b>Razita Nuriyan</b>, but please do call me <b>Zita</b>!! Currently, I'm a Jakarta-based final year <b>Computer 
            Science </b> student at the University of Indonesia, having just recently came back from a semester at the Newcastle 
            University under the IISMA (Indonesian International Student Mobility Awards) 2023 scheme. During my study, I've had 
            the chance to explore a broad range of subjects related to computing, but my experiences focused on <b>Web Development</b>, 
            <b> Computational Statistics</b>, and <b>High Performance Computing</b>. I'm currently doing research on a high-performance 
            molecular dynamics simulator, as I've always been passionate about science for as long as I can remember (I've 
            represented Indonesia in an international astrophysics competition in high school and went on to teach <b>astrophysics </b> 
            for 3 years, helping 20++ students win medals at national and international levels). I can probably still name the stars 
            at the night sky if we go stargazing 🔭.
          </p>
          <div className='grid grid-cols-5 gap-20'>
            <a href='https://www.linkedin.com/in/razita-afrina-nuriyan/' target="_blank" rel="noopener noreferrer">
              <BsLinkedin className='intro-icon' />
            </a>
            <a href='https://github.com/redshift-z' target="_blank" rel="noopener noreferrer">
              <BsGithub className='intro-icon' />
            </a>
            <a href='https://www.instagram.com/redshift.z/' target="_blank" rel="noopener noreferrer">
              <BsInstagram className='intro-icon' />
            </a>
            <a href='https://medium.com/@razita.afrina' target="_blank" rel="noopener noreferrer">
              <BsMedium className='intro-icon' />
            </a>
            <a href='mailto:razita.afrina@gmail.com' target="_blank" rel="noopener noreferrer">
              <BsEnvelopeAt className='intro-icon'/>
            </a>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-cols-4'>
            <h1 className='experience-title col-span-3'>curious about what I do?</h1>
            <div>
              <button className='btn-primary'>Download CV</button>
              <p className="btn-other-action">or scroll below</p>
            </div>
          </div>
          <div className='experience-container'>
            <div className='grid grid-cols-4 gap-20 experience-toggle-container'>
              <button className={experienceDisplay.educationButton} onClick={() => setExperienceDisplay({display: education, 
                                          educationButton: "experience-toggle-on", experienceButton: "experience-toggle-off", 
                                          projectButton: "experience-toggle-off",skillButton: "experience-toggle-off"})}>Education</button>
              <button className={experienceDisplay.experienceButton} onClick={() => setExperienceDisplay({display: experiences, 
                                          educationButton: "experience-toggle-off", experienceButton: "experience-toggle-on", 
                                          projectButton: "experience-toggle-off", skillButton: "experience-toggle-off"})}>Experiences</button>
              <button className={experienceDisplay.projectButton} onClick={() => setExperienceDisplay({display: projects, 
                                          educationButton: "experience-toggle-off", experienceButton: "experience-toggle-off", 
                                          projectButton: "experience-toggle-on", skillButton: "experience-toggle-off"})}>Projects</button>
              <button className={experienceDisplay.skillButton} onClick={() => setExperienceDisplay({display: skills, 
                                          educationButton: "experience-toggle-off", experienceButton: "experience-toggle-off", 
                                          projectButton: "experience-toggle-off", skillButton: "experience-toggle-on"})}>Skills</button>
            </div>
            <div>
              <Display display={experienceDisplay.display}></Display>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
