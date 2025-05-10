"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "@/lib/motion-wrapper";
import { BookOpen, Award, Users, Heart } from "lucide-react";

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Rainbow English School</h2>
            <p className="text-lg text-muted-foreground">
              Established with a vision to provide quality education that nurtures creativity,
              knowledge, and values in children. Our holistic approach to education focuses on
              academic excellence while developing social, emotional, and physical abilities.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-2 border-primary/10 h-full overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 pt-6 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Academic Excellence</h3>
                <p className="text-muted-foreground">
                  Our curriculum is designed to foster critical thinking, problem-solving abilities, 
                  and a deep understanding of concepts beyond textbooks.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 border-primary/10 h-full overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 pt-6 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Values & Character</h3>
                <p className="text-muted-foreground">
                  We instill strong values, ethics, and cultural awareness, molding students into
                  responsible citizens who contribute positively to society.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-2 border-primary/10 h-full overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 pt-6 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Skilled Educators</h3>
                <p className="text-muted-foreground">
                  Our team of dedicated teachers is passionate about education and committed to
                  nurturing each child's unique potential and talents.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-2 border-primary/10 h-full overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 pt-6 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Supportive Environment</h3>
                <p className="text-muted-foreground">
                  We create a warm, inclusive atmosphere where every child feels safe, valued, and 
                  motivated to express themselves and grow.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-blue-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision & Mission</h3>
              <p className="text-muted-foreground mb-4">
                We envision a world where every child discovers their potential and develops the
                skills, knowledge, and character to thrive in an ever-changing global society.
              </p>
              <p className="text-muted-foreground">
                Our mission is to provide a stimulating educational environment that encourages
                intellectual curiosity, creativity, and personal growth, preparing students to be
                lifelong learners and responsible global citizens.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold mb-4 text-primary">School Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Recognized for Excellence in Education by State Board</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Consistent 95%+ results in Board Examinations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Award-winning extracurricular programs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>Certified Green Campus Initiative</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}