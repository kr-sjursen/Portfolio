export default function About() {
  return (
    <section
      id="about"
      className="u-surface p-5 md:p-6"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="t-title mb-2 text-[clamp(1.2rem,2.1vw,1.6rem)]"
      >
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