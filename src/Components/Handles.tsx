export default function Handles({className}:{ className: string}) {
  return (
    <div className={`${className} handles`}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/anuj-singh-9b7a5a1a0/">
            <img src="linkedin.svg" alt="linkedin"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anuj-singh-9b7a5a1a0/">
            <img src="twitter.svg" alt="X(twitter)" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anuj-singh-9b7a5a1a0/">
            <img src="github.svg" alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anuj-singh-9b7a5a1a0/">
            <img src="instagram.svg" alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}
