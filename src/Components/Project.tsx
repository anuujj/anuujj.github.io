export default function Project({
  name,
  subheading,
  description,
  img,
  onProjectClick,
}: {
  name: string;
  subheading: string;
  description: string;
  img: string[];
  onProjectClick: () => void;
}) {
  return (
    <div className="project">
      <div className="projectTitle">
        <h2>{name}</h2>
        <h3>{subheading}</h3>
      </div>
      <p>{description}</p>
      <picture className="projectImg" onClick={onProjectClick} >
        <source srcSet={img[2]} media="(min-width:  800px)" />
        <source srcSet={img[1]} media="(min-width:  500px)" />
        <img src={img[0]} alt="project"/>
      </picture>
    </div>
  );
}
