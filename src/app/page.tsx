import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChoose";
import Gallery from "@/components/sections/Gallery";
import StatsBanner from "@/components/sections/StatsBanner";
// import Testimonials from "@/components/sections/TestimonialSection";
import ClientShowcase from "@/components/sections/ClientShowcase";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center" style={{ backgroundColor: '#111827' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <StatsBanner />
      {/* <Testimonials /> */}
      <ClientShowcase />
      <Footer />
    </main>
  );
}
