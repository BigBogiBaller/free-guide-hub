import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
            Lernen Sie Elisabeth kennen
          </h2>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video border-2 border-primary-foreground/10">
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
      </div>
    </section>
  );
};

export default VideoSection;
