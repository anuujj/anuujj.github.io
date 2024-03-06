import Project from "../Components/Project";
import "../styles/projects.css";
export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, odio sed dictum congue, elit metus viverra nisi, id tempus eros velit id justo. Nullam scelerisque vestibulum leo. Integer commodo sapien sit amet mauris ultricies varius. Fusce euismod fermentum ",
      img: ["", "", ""],
    },
    {
      name: "Project 2",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, odio sed dictum congue, elit metus viverra nisi, id tempus eros velit id justo. Nullam scelerisque vestibulum leo. Integer commodo sapien sit amet mauris ultricies varius. Fusce euismod fermentum ",
      img: ["", "", ""],
    },
    {
      name: "Project 3",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, odio sed dictum congue, elit metus viverra nisi, id tempus eros velit id justo. Nullam scelerisque vestibulum leo. Integer commodo sapien sit amet mauris ultricies varius. Fusce euismod fermentum ",
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
