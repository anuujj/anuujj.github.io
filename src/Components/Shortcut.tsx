export default function Shortcut({
  className,
  route,
}: {
  className: string;
  route: (page: string) => void;
}) {
  return (
    <div className={`${className} shortcut`}>
      <button id="resumeBtn" onClick={() => route("resume")}>
        RESUME
      </button>
      <button id="projectsBtn" onClick={() => route("projects")}>
        PROJECTS
      </button>
    </div>
  );
}
