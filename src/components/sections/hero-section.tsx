"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion-wrapper";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-yellow-50" />

      {/* Rainbow-like decorative elements */}
      <div className="absolute top-20 -left-24 h-48 w-48 rounded-full bg-red-100 opacity-50 blur-3xl" />
      <div className="absolute top-32 left-40 h-72 w-72 rounded-full bg-yellow-100 opacity-40 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-60 w-60 rounded-full bg-blue-100 opacity-60 blur-3xl" />
      <div className="absolute right-1/4 bottom-40 h-48 w-48 rounded-full bg-green-100 opacity-50 blur-3xl" />

      <div className="z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-primary mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              Rainbow English School
            </h1>
            <h2 className="text-secondary-foreground mb-6 text-2xl font-medium md:text-3xl">
              Bright Education Bright Future
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg text-lg">
              Nurturing young minds with quality education, values, and skills
              for a successful future. Join us in creating a colorful learning
              journey for your child.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-primary hover:bg-primary/90 px-6 py-6 text-lg"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#admissions");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="px-6 py-6 text-lg"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#about");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More
              </Button>
            </div>
            <div className="bg-accent/80 mt-8 inline-block rounded-lg px-4 py-2">
              <p className="text-accent-foreground font-medium">
                Admissions Open for Session 2025-26
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rotate-3 transform rounded-3xl bg-gradient-to-br from-blue-500/20 to-yellow-500/20" />
              <div className="border-primary/20 absolute inset-0 flex -rotate-3 transform items-center justify-center rounded-3xl border-4 bg-white p-8 shadow-xl">
                <div className="text-center">
                  <div className="flex justify-center">
                    <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-r from-red-500 to-yellow-500">
                      <div className="absolute inset-1 rounded-full bg-white"></div>
                      <div className="absolute inset-2 rounded-full bg-gradient-to-r from-red-500 via-blue-500 via-green-500 via-yellow-500 to-purple-500"></div>
                      <div className="absolute inset-3 rounded-full bg-white"></div>
                      <div className="absolute inset-4 flex items-center justify-center">
                        <span className="text-primary text-2xl font-bold">
                          R
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-primary text-xl font-bold">
                    Nurturing Excellence Since 2015
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-primary text-3xl font-bold">500+</p>
                      <p className="text-muted-foreground text-sm">Students</p>
                    </div>
                    <div>
                      <p className="text-primary text-3xl font-bold">30+</p>
                      <p className="text-muted-foreground text-sm">Teachers</p>
                    </div>
                    <div>
                      <p className="text-primary text-3xl font-bold">15+</p>
                      <p className="text-muted-foreground text-sm">Programs</p>
                    </div>
                    <div>
                      <p className="text-primary text-3xl font-bold">98%</p>
                      <p className="text-muted-foreground text-sm">
                        Success Rate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
