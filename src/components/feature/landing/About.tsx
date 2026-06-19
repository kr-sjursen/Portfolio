export default function About() {
  // TODO: Write down what i am passionate about, and why that is.
  // TODO: Add something about my skillset, and what i enjoy building.
  // TODO: Add a location indicator.
  // TODO: Add a "currently doing this" widget.
  // TODO: Add a widget about my education.
  // TODO: Add a widget about the languages i speak and write.
  return (
    <section
      id="about"
      className="u-surface p-5 md:p-6"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading">
        About
      </h2>
      {/*<p className="section-copy muted">
        Share your background, what you enjoy building, and your strengths.
      </p>*/}
      <p className="t-copy u-muted">
        As a student of Digital Culture, I am passionate about creating engaging and accessible digital experiences.

        I am constantly learning and exploring new technologies to enhance my skills and stay updated with industry trends.
      </p>
      <p className="t-copy u-muted mt-3">
        I enjoy building web applications that prioritize accessibility and inclusivity, ensuring that everyone can interact with and benefit from the digital products I create.
      </p>
    </section>
  );
}