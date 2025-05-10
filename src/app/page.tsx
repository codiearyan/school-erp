import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import FeaturesSection from "@/components/sections/features-section";
import AdmissionsSection from "@/components/sections/admissions-section";
import ContactSection from "@/components/sections/contact-section";
import MapSection from "@/components/sections/map-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AdmissionsSection />
      <ContactSection />
      <MapSection />
    </>
  );
}
