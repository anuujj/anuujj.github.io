export default function Project({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: string[];
}) {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <picture>
        <source srcSet={img[2]} media="(min-width:  800px)" />
        <source srcSet={img[1]} media="(min-width:  500px)" />
        <img src={img[0]} alt="project" />
      </picture>
    </div>
  );
}
