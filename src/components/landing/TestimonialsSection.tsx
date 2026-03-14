import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import avatarSubramanya from "@/assets/avatar-subramanya.png";
import avatarMaria from "@/assets/avatar-maria.png";
import linkedinLogo from "@/assets/linkedin-logo.png";

const testimonials = [
  {
    quote:
      "I had the pleasure of working with Elisabeth in her role as a Management Assistant, and I was consistently impressed by her dedication and approach to work. She was always proactive, ready to help, and truly service-oriented. Her expertise in IT was particularly valuable, and she often took on the role of a trainer, sharing her knowledge with others in a clear and approachable way.",
    name: "Subramanya Matam",
    source: "LinkedIn",
    avatar: avatarSubramanya,
    stars: 5,
  },
  {
    quote:
      "Elisabeth has a great methodology for planning and executing projects on time and with truly successful results. She has a great ability to communicate and explain her requirements.",
    name: "Maria Eugenia",
    source: "LinkedIn",
    avatar: avatarMaria,
    stars: 5,
  },
  {
    quote:
      "Sie war stets freundlich, motivierend und fachlich sehr kompetent. Sie geht auf die Fragen und Bedürfnisse der Teilnehmer ein und holt die Teilnehmer bei deren Kenntnisstand ab. Sie konnte einen sehr guten Überblick der einzelnen Programme und deren Verzahnung vermitteln. Auch in hektischen Situationen bewahrte sie Ruhe und agierte sehr selbständig immer das Seminarziel im Blick.",
    name: "Anonym",
    source: "ProvenExpert",
    sourceLink: "https://www.provenexpert.com/de-de/elisabeth-brommer-kern/",
    avatar: null,
    stars: 5,
  },
  {
    quote:
      "Hervorragende Betreuung und kompetente Schulung. Absolut empfehlenswert.",
    name: "Anonym",
    source: "ProvenExpert",
    sourceLink: "https://www.provenexpert.com/de-de/elisabeth-brommer-kern/",
    avatar: null,
    stars: 4.8,
  },
];

// Double the array for seamless loop
const doubledTestimonials = [...testimonials, ...testimonials];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-stars text-stars" />
      ))}
      {hasHalf && <StarHalf className="h-4 w-4 fill-stars text-stars" />}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Was Kunden & Teilnehmende
            <br />
            <span className="text-primary">sagen</span>
          </h2>
          <p className="mt-4 max-w-md font-body text-base text-muted-foreground sm:text-lg">
            Echte Stimmen von Menschen, mit denen Elisabeth zusammengearbeitet hat.
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {doubledTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[340px] flex-shrink-0 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <StarRating rating={t.stars} />
                  {t.sourceLink ? (
                    <a
                      href={t.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t.source} ↗
                    </a>
                  ) : (
                    <span className="font-body text-xs text-muted-foreground">
                      {t.source}
                    </span>
                  )}
                </div>
                <span className="font-display text-5xl leading-none text-primary/30">
                  „
                </span>
                <p className="mt-2 font-body text-sm leading-relaxed text-foreground">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-body text-sm font-semibold text-muted-foreground">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
