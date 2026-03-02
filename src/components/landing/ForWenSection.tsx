import { ArrowRight } from "lucide-react";

const items = [
  {
    number: "001",
    title: "Führungskräfte & Teams",
    description:
      "Sie möchten in Videocalls, Präsentationen oder Online-Meetings souverän auftreten und Ihre Botschaft klar vermitteln.",
  },
  {
    number: "002",
    title: "Bewerbende & Fachkräfte",
    description:
      "Sie bereiten sich auf Bewerbungsgespräche, Moderationen oder wichtige Online-Auftritte vor und wollen überzeugend wirken.",
  },
  {
    number: "003",
    title: "Unternehmen & Organisationen",
    description:
      "Sie suchen effizientere digitale Abläufe, klarere Prozesse und produktivere Zusammenarbeit – von M365 bis nachhaltige Events.",
  },
];

const ForWenSection = () => {
  return (
    <section className="bg-background py-20 md:py-28 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
              Für wen ist dieses{" "}
              <em className="not-italic text-primary">Training?</em>
            </h2>
            <p className="mt-4 font-body text-base text-muted-foreground leading-relaxed">
              Ob Einzelperson oder Organisation – wenn Sie online wirkungsvoller auftreten und klarer kommunizieren möchten, sind Sie hier richtig.
            </p>
          </div>
          <a
            href="/buchen"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            Erstgespräch buchen
          </a>
        </div>

        {/* Subtitle */}
        <p className="mb-2 font-body text-sm font-medium text-foreground tracking-wide">
          Das Training ist für Sie, wenn&nbsp;↴
        </p>

        {/* Items */}
        <div className="divide-y divide-border">
          {items.map((item) => (
            <div
              key={item.number}
              className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[60px_1fr_1fr_auto] items-center gap-4 md:gap-8 py-10"
            >
              {/* Number */}
              <span className="font-body text-sm text-muted-foreground">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl text-foreground col-span-1">
                {item.title}
              </h3>

              {/* Description – hidden on mobile, shown below on small screens */}
              <p className="hidden md:block font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Arrow */}
              <a
                href="/buchen"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Description on mobile */}
              <p className="col-span-3 md:hidden font-body text-sm text-muted-foreground leading-relaxed -mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWenSection;
