export default function Experience({
  date,
  title,
  company,
  location,
  description,
}: {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
}) {
  return (
    <div className="experienceTab">
      <h3>{date}</h3>
      <div>{title}</div>
      <div>{company}</div>
      <div>{location}</div>
      <p>{description}</p>
    </div>
  );
}
