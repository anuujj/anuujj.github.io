import Icard from "../Components/Icard";
import Shortcut from "../Components/Shortcut";

export default function About() {
  return (
    <div>
      <Icard />
      <section>
        <h1>Hello 👋</h1>
        <Shortcut className="fromAbout"/>
        <article>
          Anuj is currently working as a Software Developer at Paytm, a leading
          fintech company in India. With over 1.5+ years of experience in
          frontend development, Anuj possesses a robust skill set that includes
          expertise in HTML, CSS, JavaScript/TypeScript, and proficiency in
          frameworks such as React. His work experience extends to an agile
          environment, where he has demonstrated his abilities in adapting to
          dynamic development processes. He is well-versed in CI/CD pipelines.
          He has experience in building robust web pages for scale.
        </article>
      </section>
    </div>
  );
}
