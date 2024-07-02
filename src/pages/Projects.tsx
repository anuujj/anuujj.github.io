import Project from "../Components/Project";
import "../styles/projects.css";
export default function Projects() {
  const projects = [
    {
      name: "Voyager",
      subheading: "Starknet Block Explorer",
      description:
        " A block explorer for Starknet, a permissionless, open-source, and decentralized Layer 2 scaling solution for Ethereum. Voyager is a tool that allows users to explore the Starknet blockchain, view transactions, and interact with smart contracts. Voyager is built using React, TypeScript, node and expressjs.",
      img: ["Voyager.png", "Voyager.png"],
      link: "https://voyager-anuujj.vercel.app/",
    },
    // {
    //   name: "Project 2",
    //   subheading: "A travel blog",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, odio sed dictum congue, elit metus viverra nisi, id tempus eros velit id justo. Nullam scelerisque vestibulum leo. Integer commodo sapien sit amet mauris ultricies varius. Fusce euismod fermentum ",
    //   img: ["", "", ""],
    //   link: "",
    // },
    // {
    //   name: "Project 3",
    //   subheading: "A travel blog",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, odio sed dictum congue, elit metus viverra nisi, id tempus eros velit id justo. Nullam scelerisque vestibulum leo. Integer commodo sapien sit amet mauris ultricies varius. Fusce euismod fermentum ",
    //   img: ["", "", ""],
    //   link: "",
    // },
  ];
  return (
    <div className="bodyContainer">
      <div className="body">
        <h1>Projects</h1>
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            subheading={project.subheading}
            description={project.description}
            img={project.img}
            onProjectClick={() => window.open(project.link, "_blank")?.focus()}
          />
        ))}
      </div>
    </div>
  );
}
