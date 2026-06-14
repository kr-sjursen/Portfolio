export default function Contact() {
  return (
    <section
      id="contact"
      className="u-surface p-5 md:p-6"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="t-title mb-2 text-[clamp(1.2rem,2.1vw,1.6rem)]"
      >
        Contact
      </h2>
      <p className="t-copy u-muted">
        Add your email, LinkedIn, GitHub, and availability.
      </p>
    </section>
  );
}