import { getSelectedClassName } from "../utils";

export default function Navlist({
  route,
  page,
}: {
  route: (page: string) => void;
  page: string;
}) {
  return (
    <ul className="navlist">
      <li
        className={getSelectedClassName(page, "about")}
        onClick={() => route("about")}
      >
        ABOUT ME
      </li>
      <li
        className={getSelectedClassName(page, "resume")}
        onClick={() => route("resume")}
      >
        RESUME
      </li>
      <li
        className={getSelectedClassName(page, "projects")}
        onClick={() => route("projects")}
      >
        PROJECTS
      </li>
      <li
        className={getSelectedClassName(page, "contact")}
        onClick={() => route("contact")}
      >
        CONTACT
      </li>
    </ul>
  );
}
