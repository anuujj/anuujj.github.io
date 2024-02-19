import Shortcut from "./Shortcut"

export default function Icard() {
  return (
    <div className="icard">
      <div>
        <img className="pfp" src="" />
      </div>
      <h1 className="name">Anuj</h1>
      <h2 className="designation">Software Engineer</h2>
      <Shortcut className="fromIdCard"/>
      <div className="handles">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/anuj-singh-9b7a5a1a0/">
              <img src="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anuj-singh-9b7a5a1a0/">
              <img src="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/anuj-singh-9b7a5a1a0/">
              <img src="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
