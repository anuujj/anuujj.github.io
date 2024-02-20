import Handles from "./Handles";
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
      <Handles/>
    </div>
  );
}
