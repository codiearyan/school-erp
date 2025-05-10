"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "@/lib/motion-wrapper";
import { Lightbulb, BookText, Trophy, Microscope, Music, Palette } from "lucide-react";

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="features" className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Programs</h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive curriculum that nurtures intellectual, physical, social, 
            and emotional development, preparing students for future success.
          </p>
        </motion.div>

        <Tabs defaultValue="academic" className="mx-auto max-w-5xl">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/80 p-1">
              <TabsTrigger value="academic" className="text-sm md:text-base px-4 py-2">Academic Programs</TabsTrigger>
              <TabsTrigger value="extracurricular" className="text-sm md:text-base px-4 py-2">Extracurricular</TabsTrigger>
              <TabsTrigger value="facilities" className="text-sm md:text-base px-4 py-2">Facilities</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="academic">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-white border-none shadow-md h-full overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                        <BookText className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">Primary Education</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      A strong foundation in literacy, numeracy, and essential skills through an
                      engaging, interactive curriculum for students from grades 1-5.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>English and regional language proficiency</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Mathematical reasoning and problem-solving</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span>Environmental studies and social awareness</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white border-none shadow-md h-full overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mr-3">
                        <Lightbulb className="h-5 w-5 text-yellow-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">Middle School</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Expanding knowledge and critical thinking abilities through comprehensive
                      subject exploration for students in grades 6-8.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        <span>Advanced language arts and literature</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        <span>Mathematics, science, and social studies</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        <span>Technology and computer literacy</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-white border-none shadow-md h-full overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                        <Trophy className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">Secondary Education</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Preparing students for board examinations and higher education with
                      specialized subject streams for grades 9-12.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span>Science stream (Physics, Chemistry, Biology/Math)</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span>Commerce stream with Business Studies</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span>Board exam preparation and career guidance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="extracurricular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-white border-none shadow-md h-full overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                        <Trophy className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">Sports & Athletics</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive sports program promoting physical fitness, teamwork, and 
                      competitive excellence across various disciplines.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        <span>Team sports: Cricket, Basketball, Volleyball</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        <span>Individual sports: Athletics, Badminton</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        <span>Annual sports meets and competitions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white border-none shadow-md h-full overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mr-3">
                        <Palette className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">Arts & Culture</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Fostering creativity, cultural appreciation, and artistic expression 
                      through diverse programs and activities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        <span>Visual arts: Drawing, painting, crafts</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        <span>Performing arts: Dance, drama, music</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        <span>Cultural festivals and annual showcases</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-white border-none shadow-md h-full overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center mr-3">
                        <Microscope className="h-5 w-5 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">STEM Activities</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Engaging projects and competitions that develop critical thinking, 
                      innovation, and technical skills in science and technology.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                        <span>Science clubs and innovation labs</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                        <span>Robotics and coding workshops</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                        <span>Science fairs and olympiads</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="facilities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-white border-none shadow-md h-full overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Academic Facilities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-blue-600 text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Modern Classrooms</span>
                          <p className="text-sm text-muted-foreground">
                            Well-lit, spacious classrooms with digital smartboards and multimedia capabilities.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-blue-600 text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Science Laboratories</span>
                          <p className="text-sm text-muted-foreground">
                            Fully equipped physics, chemistry, and biology labs for practical learning.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-blue-600 text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Computer Lab</span>
                          <p className="text-sm text-muted-foreground">
                            State-of-the-art computer lab with high-speed internet and latest software.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-blue-600 text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Library</span>
                          <p className="text-sm text-muted-foreground">
                            Extensive collection of books, periodicals, and digital resources.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white border-none shadow-md h-full overflow-hidden hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">Sports & Activity Facilities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Playground</span>
                          <p className="text-sm text-muted-foreground">
                            Extensive open area for outdoor sports like cricket, football, and athletics.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Indoor Sports Hall</span>
                          <p className="text-sm text-muted-foreground">
                            Facility for badminton, table tennis, chess, and other indoor games.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Music Room</span>
                          <p className="text-sm text-muted-foreground">
                            Dedicated space with instruments for music classes and practice.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Multipurpose Hall</span>
                          <p className="text-sm text-muted-foreground">
                            Spacious auditorium for assemblies, cultural events, and performances.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}