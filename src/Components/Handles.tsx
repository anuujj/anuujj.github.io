export default function Handles({ className }: { className: string }) {
  return (
    <div className={`${className} handles`}>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/anuj18-kumar/"
          >
            <img src="linkedin.svg" alt="linkedin" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/anxuj"
          >
            <img src="twitter.svg" alt="X(twitter)" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/anuujj"
          >
            <img src="github.svg" alt="github" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/anuj_kumar220/"
          >
            <img src="instagram.svg" alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}
