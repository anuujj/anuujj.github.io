import Experience from "../Components/Experience";
import "../styles/resume.css";

const experience = [
  {
    date: "June 2021 - Present",
    title: "Software Developer",
    company: "Paytm",
    location: "Noida, India",
    description: `Developed a web-app for 13k+ field service agents (FSE) to view their incentives and task history. This reduced incentive visibility wait from T+10 to T+1 days. Reduced number of incentive queries raised to 5%, thus reducing manual efforts of the stakeholders. Reduced Attrition from 30% MOM to 25%. Developed an admin panel for business team to create salary plans for field agents. Reduced manual payout effort by 70 %.`,
  },
];
const education = [
  {
    date: "June 2018 - May 2022",
    title: "B.Tech",
    company: "Indraprastha Institute of Information Technology, Delhi",
    location: "Delhi, India",
    description: `I have graduated from Indraprastha Institute of Information Technology, Delhi in Computer Science and Applied Mathematics. I got a strong hold over fundamentals like Data Structures and Algorithms, Object Oriented Programming, Discrete Mathematics, Operating Systems, Network Security`,
  },
];
export default function Resume() {
  return (
    <div className="bodyContainer">
      <div className="body">
        <h1>Resume</h1>
        <div className="expHeading">
          <h3>Experience</h3>
          <button>DOWNLOAD CV</button>
        </div>
        {experience.map((exp) => (
          <Experience
            key={exp.date}
            date={exp.date}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            description={exp.description}
          />
        ))}
        <h3 className="eduHeading">Education</h3>
        {education.map((edu) => (
          <Experience
            key={edu.date}
            date={edu.date}
            title={edu.title}
            company={edu.company}
            location={edu.location}
            description={edu.description}
          />
        ))}
        <div className="techSkills">
          <h3>Technical Skillset</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript/TypeScript</li>
            <li>React Js</li>
            <li>Redux Toolkit</li>
            <li>Java</li>
            <li>MongoDB</li>
            <li>Jenkins</li>
          </ul>
          <h3>Languages</h3>
          <ul>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
