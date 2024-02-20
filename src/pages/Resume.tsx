import Experience from "../Components/Experience";

const experience = [
  {
    date: "June 2021 - Present",
    title: "Software Developer",
    company: "Paytm",
    location: "Noida, India",
    description: `Working as a Software Developer at Paytm, a leading fintech company in India. With over 1.5+ years of experience in frontend development, Anuj possesses a robust skill set that includes expertise in HTML, CSS, JavaScript/TypeScript, and proficiency in frameworks such as React. His work experience extends to an agile environment, where he has demonstrated his abilities in adapting to dynamic development processes. He is well-versed in CI/CD pipelines. He has experience in building robust web pages for scale.`,
  },
];
const education = [
  {
    date: "June 2018 - May 2022",
    title: "B.Tech",
    company: "Indraprastha Institute of Information Technology, Delhi",
    location: "Delhi, India",
    description: `B.Tech in Computer Science and Applied Mathematics`,
  },
];
export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <div>
        <h3>Experience</h3>
        <button>DOWNLOAD CV</button>
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
        <h3>Education</h3>
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
        <div>
          <h3>Technical Skillset</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript/TypeScript</li>
            <li>React</li>
            <li>CI/CD Pipelines</li>
          </ul>
          <h3>Languages</h3>
          <ul>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </div>
      </div>
    </>
  );
}
