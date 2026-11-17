import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { PopularRoutes } from "@/components/PopularRoutes";
import { RentalPackages } from "@/components/RentalPackages";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Testimonials } from "@/components/Testimonials";
import { VehicleGallery } from "@/components/VehicleGallery";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <VehicleGallery />
      <Features />
      <RentalPackages />
      <PopularRoutes />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
