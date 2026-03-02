import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const testimonials = [
  {
    quote:
      "Seit dem Training fühle ich mich endlich sicher vor der Kamera. Meine Online-Meetings laufen jetzt ganz anders — souverän und authentisch.",
    name: "Sandra M.",
    role: "Teamleiterin",
    avatar: avatar1,
  },
  {
    quote:
      "Elisabeth hat mir gezeigt, wie ich online wirklich wirke. Das Feedback war ehrlich, konkret und sofort umsetzbar.",
    name: "Thomas K.",
    role: "Berater",
    avatar: avatar2,
  },
  {
    quote:
      "Ich hätte nie gedacht, dass man seine Online-Präsenz so stark verbessern kann. Jetzt bekomme ich regelmäßig positives Feedback.",
    name: "Julia R.",
    role: "Projektmanagerin",
    avatar: avatar3,
  },
  {
    quote:
      "Das Training war ein echtes Aha-Erlebnis. Endlich weiß ich, worauf es bei virtuellen Präsentationen ankommt.",
    name: "Markus L.",
    role: "Geschäftsführer",
    avatar: avatar1,
  },
];

// Double the array for seamless loop
const doubledTestimonials = [...testimonials, ...testimonials];

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
            Was Teilnehmende
            <br />
            <span className="text-primary">sagen</span>
          </h2>
          <p className="mt-4 max-w-md font-body text-base text-muted-foreground sm:text-lg">
            Stimmen von Menschen, die ihre Online-Wirkung nachhaltig
            verbessert haben.
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
              className="w-[320px] flex-shrink-0 rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-5xl leading-none text-primary/30">
                  „
                </span>
                <p className="mt-2 font-body text-base leading-relaxed text-foreground">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {t.role}
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
