import Project from "../Components/Project";
import "../styles/projects.css";
export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      img: ["", "", ""],
    },
    {
      name: "Project 2",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      img: ["", "", ""],
    },
    {
      name: "Project 3",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
      img: ["", "", ""],
    },
  ];
  return (
    <div className="bodyContainer">
      <div className="body">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
}
