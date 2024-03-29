import Handles from "./Handles";
import Shortcut from "./Shortcut";
import "../styles/icard.css";

export default function Icard({ route }: { route: (page: string) => void }) {
  return (
    <div className="icard">
      <div className="avatar"></div>
      <h1 className="name">Anuj</h1>
      <div className="ruler"></div>
      <h2 className="designation">Software Engineer</h2>
      <Shortcut className="fromIdCard" route={route} />
      <Handles className="handleIdCard" />
    </div>
  );
}
