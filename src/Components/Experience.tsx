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
      <div className="expInfo">
        <h3>{date}</h3>
        <div className="title">{title}</div>
        <div className="company">{company}</div>
        <div className="location">{location}</div>
      </div>
      <p>{description}</p>
    </div>
  );
}
