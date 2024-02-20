export default function Header({
  route,
  page,
}: {
  route: (page: string) => void;
  page: string;
}) {
  return (
    <header>
      <div className="heading">
        <h1 className="name">Anuj</h1>
        <div className="slash">/</div>
        <h2 className="designation">Software Engineer</h2>
      </div>
      <nav>
        <ul>
          <li onClick={() => route("about")}>ABOUT ME</li>
          <li onClick={() => route("resume")}>RESUME</li>
          <li onClick={() => route("projects")}>PROJECTS</li>
          <li onClick={() => route("contact")}>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
