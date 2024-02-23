export default function Shortcut({ className }: { className: string }) {
  return (
    <div className={`${className} shortcut`}>
      <button id="resumeBtn">RESUME</button>
      <button id="projectsBtn">PROJECTS</button>
    </div>
  );
}
