"use client";

import { useState, useEffect } from "react";
import { motion } from "@/lib/motion-wrapper";

export default function MapSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="map" className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-[400px] w-full md:h-[500px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8776706700355!2d70.06637037602626!3d23.06494597914418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950b8684d989ce5%3A0xb51810ae666ba2f6!2sRainbow%20English%20School!5e0!3m2!1sen!2sin!4v1746902301666!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Rainbow English School Location"
          className="contrast-[1.1] grayscale-[0.2] filter"
        />
      </motion.div>

      <div className="absolute top-4 left-1/2 z-10 -translate-x-1/2 transform rounded-full bg-white px-6 py-3 shadow-md">
        <h3 className="text-primary font-semibold">
          Rainbow English School, Meghpar Kumbhardi, Anjar, Kutch
        </h3>
      </div>
    </section>
  );
}
