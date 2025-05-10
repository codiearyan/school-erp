"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion-wrapper";
import { CalendarDays, ClipboardList, GraduationCap, FileText } from "lucide-react";

export default function AdmissionsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="admissions" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-40 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Admissions Open</h2>
          <p className="text-lg text-muted-foreground">
            Join our vibrant learning community for the academic session 2025-26. Begin your child's
            educational journey with Rainbow English School.
          </p>
          <div className="mt-6 inline-block bg-blue-100 rounded-lg px-4 py-2">
            <p className="font-medium text-blue-800">
              Now accepting applications for all grades from Pre-Primary to Class XII
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Admission Process</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600">1</span>
                  </div>
                  <div className="w-0.5 h-full bg-blue-100 mt-2"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Application Submission</h4>
                  <p className="text-muted-foreground mb-3">
                    Complete and submit the application form online or in person at our administrative office.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3 text-sm">
                    <span className="font-medium text-blue-800">Required documents:</span>
                    <ul className="mt-1 space-y-1 text-muted-foreground">
                      <li>• Birth certificate</li>
                      <li>• Previous school records (if applicable)</li>
                      <li>• Passport-sized photographs</li>
                      <li>• Address proof</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <div className="w-0.5 h-full bg-blue-100 mt-2"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Assessment</h4>
                  <p className="text-muted-foreground">
                    Students seeking admission to grades 1 and above may need to take an assessment
                    test to determine their academic level and learning needs.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600">3</span>
                  </div>
                  <div className="w-0.5 h-full bg-blue-100 mt-2"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Interview</h4>
                  <p className="text-muted-foreground">
                    A friendly interaction with the student and parents to understand expectations
                    and ensure alignment with our educational philosophy.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-bold text-blue-600">4</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Confirmation</h4>
                  <p className="text-muted-foreground">
                    Successful applicants will receive an admission offer. Complete the enrollment
                    by paying the applicable fees within the specified timeframe.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-blue-50 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">Key Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4 shrink-0">
                    <CalendarDays className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Important Dates</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Application Opens</span>
                        <span className="font-medium">October 15, 2024</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Application Deadline</span>
                        <span className="font-medium">January 30, 2025</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Assessment Tests</span>
                        <span className="font-medium">February 2025</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Final Results</span>
                        <span className="font-medium">March 15, 2025</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-4 shrink-0">
                    <GraduationCap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Age Criteria</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Pre-Primary</span>
                        <span className="font-medium">3+ years</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Class I</span>
                        <span className="font-medium">5+ years</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Other Classes</span>
                        <span className="font-medium">Age appropriate</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      Age calculated as of March 31, 2025
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mr-4 shrink-0">
                    <FileText className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">Fee Structure</h4>
                    <p className="text-muted-foreground mb-2">
                      Our fee structure is designed to be transparent and inclusive. Detailed 
                      information is available in the admissions brochure.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Includes tuition, development fee, and basic activities. Additional fees may apply for 
                      specialized programs, transportation, and extracurricular activities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Download Admission Form
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Take the first step towards providing your child with a quality education that nurtures
            their overall development and prepares them for future success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-blue-700 hover:text-blue-800 bg-white hover:bg-white/90"
            >
              Apply Online
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              Schedule a Visit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}