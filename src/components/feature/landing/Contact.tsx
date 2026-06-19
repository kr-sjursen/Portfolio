export default function Contact() {
  // TODO: Add links to contact info.
  // TODO: Add a contact form with name, email, topic (full-time role, freelance project, just saying hi, bug report, other), and a message. Also Make sure to add a "I agree that my submitted data is collected and stored to respond to my inquiry" checkbox.
  // TODO: Add a "book an appointment" contact form for a 30 min meeting over google meet. Make sure to have a date and time picker (and only allow available slots).
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