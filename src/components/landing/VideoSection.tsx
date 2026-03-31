import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import elisabethPortrait from "@/assets/elisabeth-portrait-2.png";

const VideoSection = () => {
  return (
    <section id="ueber-mich" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Ein persönlicher Gruss für alle, die professionell wirken wollen.
              </h2>
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-video border border-border">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  <source src="https://aqifvotqvtwhsgigodau.supabase.co/storage/v1/object/public/videos/elisabeth-begruessung.mp4" type="video/mp4" />
                  <track
                    kind="subtitles"
                    src="/videos/elisabeth-begruessung.vtt"
                    srcLang="de"
                    label="Deutsch"
                  />
                  Ihr Browser unterstützt kein Video.
                </video>
              </div>
            </motion.div>

            {/* Right: Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
                Coaching & Training · SJP Development GmbH
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Elisabeth Brommer-Kern M.A.
              </h3>
              <p className="mb-4 font-body text-base leading-relaxed text-muted-foreground">
                Ich bin Trainerin, systemischer Coach und Beraterin an der Schnittstelle von Kommunikation,
                Organisation und digitaler Zusammenarbeit. Seit Jahren begleite ich Menschen und Teams dabei,
                professionell aufzutreten, klarer zu kommunizieren und Meetings so zu gestalten, dass sie wirklich
                etwas bewegen.
              </p>
              <p className="mb-6 font-body text-base leading-relaxed text-muted-foreground">
                Mein Fokus liegt auf zwei Themen: wie Menschen im Online-Umfeld sicher und kompetent wirken — und
                wie Meetings, Webinare und Events so geplant werden, dass alle Beteiligten wirklich dabei sind. Mein
                Motto: <em>When you walk the talk, people follow you.</em>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold px-6"
                  asChild
                >
                  <a href="https://www.sjpdevelopment.ch/ueber-mich.html" target="_blank" rel="noopener noreferrer">
                    Mehr über mich
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold px-6"
                  asChild
                >
                  <a href="/buchen">
                    <Calendar className="mr-2 h-4 w-4" />
                    Kostenloses Gespräch vereinbaren
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
