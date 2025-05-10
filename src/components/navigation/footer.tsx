import Link from "next/link";
import { SchoolLogo } from "@/components/ui/school-logo";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <SchoolLogo className="h-10 w-10 mr-2 text-primary-foreground" />
              <span className="text-xl font-bold">Rainbow English School</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Bright Education Bright Future
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#admissions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Student Handbook
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                <span>
                  Rainbow English School, Meghpar Kumbhardi, Anjar, Kutch
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <span>+91 9825298878</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 shrink-0" />
                <span>rainbowengschool@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Rainbow English School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}