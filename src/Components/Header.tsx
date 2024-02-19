export default function Header() {
  return (
    <header>
      <div className="heading">
        <h1 className="name">Anuj</h1>
        <div className="slash">/</div>
        <h2 className="designation">Software Engineer</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a>ABOUT ME</a>
          </li>
          <li>
            <a>RESUME</a>
          </li>
          <li>
            <a>PROJECTS</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
