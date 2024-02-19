export default function Shortcut({ className }: { className: string }) {
  return (
    <div className={`${className} shortcut`}>
      <button id="resume">RESUME</button>
      <button id="projects">PROJECTS</button>
    </div>
  );
}
