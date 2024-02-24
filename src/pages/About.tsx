import Icard from "../Components/Icard";
import Shortcut from "../Components/Shortcut";
import "../styles/about.css";

export default function About({ route }: { route: (page: string) => void }) {
  return (
    <div className="about">
      <div className="icardContainer">
        <Icard route={route} />
      </div>
      <div className="sectionContainer">
        <section>
          <h1>Hello 👋</h1>
          <Shortcut className="fromAbout" route={route} />
          <article>
            I am currently working as a Software Developer at Paytm, a leading
            fintech company in India. With over 1.5+ years of experience in
            frontend development, I possess a robust skill set that includes
            expertise in HTML, CSS, JavaScript/TypeScript, and proficiency in
            frameworks such as React. My work experience extends to an agile
            environment, where I have demonstrated my abilities in adapting to
            dynamic development processes. I am well-versed in CI/CD pipelines
            and have experience in building robust web pages for scale.
          </article>
        </section>
      </div>
    </div>
  );
}
