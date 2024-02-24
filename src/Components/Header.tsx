import "../styles/header.css";
import Navlist from "./Navlist";
export default function Header({
  route,
  page,
  openMenu,
}: {
  route: (page: string) => void;
  page: string;
  openMenu: () => void;
}) {
  return (
    <div className="headerContainer">
      <header>
        <div className="heading">
          <h1 className="name">Anuj</h1>
          <div className="slash">/</div>
          <h2 className="designation">Software Engineer</h2>
          <div className="hamburger">
            <button onClick={openMenu}>
              <img src="hamburger.svg" alt="menu" />
            </button>
          </div>
        </div>
        <nav>
          <Navlist route={route} page={page} />
        </nav>
      </header>
    </div>
  );
}
