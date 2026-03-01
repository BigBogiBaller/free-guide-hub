import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIdx = (prev + 1) % testimonials.length;
      scrollToIndex(nextIdx);
      return nextIdx;
    });
  }, [scrollToIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIdx = (prev - 1 + testimonials.length) % testimonials.length;
      scrollToIndex(prevIdx);
      return prevIdx;
    });
  }, [scrollToIndex]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  };

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Was Teilnehmer:innen
              <br />
              <span className="text-primary">sagen</span>
            </h2>
            <p className="mt-4 max-w-md font-body text-base text-muted-foreground sm:text-lg">
              Stimmen von Menschen, die ihre Online-Wirkung nachhaltig
              verbessert haben.
            </p>
          </motion.div>

          {/* Navigation arrows */}
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => { prev(); resetInterval(); }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
              aria-label="Zurück"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => { next(); resetInterval(); }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-foreground text-card transition-colors hover:bg-foreground/90"
              aria-label="Weiter"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Cards carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="min-w-[300px] max-w-[340px] flex-shrink-0 snap-start rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Quote icon */}
              <div>
                <span className="font-display text-5xl leading-none text-primary/30">
                  „
                </span>
                <p className="mt-2 font-body text-base leading-relaxed text-foreground">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
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
            </motion.div>
          ))}
          {/* Spacer to prevent last card from being cut off */}
          <div className="min-w-[1px] flex-shrink-0" />
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); scrollToIndex(i); resetInterval(); }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/50"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
