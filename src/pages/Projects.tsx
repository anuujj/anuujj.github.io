import Project from "../Components/Project";

export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      description: "This is a project",
      img: ["", "", ""],
    },
    {
      name: "Project 2",
      description: "This is a project",
      img: ["", "", ""],
    },
    {
      name: "Project 3",
      description: "This is a project",
      img: ["", "", ""],
    },
  ];
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          img={project.img}
        />
      ))}
    </div>
  );
}
