export default function Hero() {
  return (
    <section
      className="flex min-h-[calc(100svh-5.5rem)] flex-col items-center justify-center gap-4 py-12 text-center"
      aria-label="Intro"
    >
      <h1 className="t-title order-2 text-[clamp(2.2rem,5vw,4.5rem)]">
        Building polished digital experiences.
      </h1>
      <p className="t-eyebrow u-muted order-1">Full-Stack Developer</p>
      <p className="t-copy u-muted order-3 mx-auto max-w-[62ch] text-[clamp(1rem,1.8vw,1.2rem)]">
        I design and build fast, accessible web interfaces with strong
        attention to visual detail and user experience.
      </p>
    </section>
  );
}