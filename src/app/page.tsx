import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChoose";
import Gallery from "@/components/sections/Gallery";
// import StatsBanner from "@/components/sections/StatsBanner";
// import Testimonials from "@/components/sections/TestimonialSection";
import ClientShowcase from "@/components/sections/ClientShowcase";
import Footer from "@/components/sections/Footer";
// import Navbar from "@/components/sections/Navbar";
// import WhatevaSection from "@/components/sections/WhatevaSection";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center" >
      {/* <Navbar /> */}
      <Hero />
      {/* <WhatevaSection/> */}
      <About />
      <Services />
      <WhyChooseUs />
            {/* <StatsBanner /> */}
      <Gallery />

      {/* <Testimonials /> */}
      <ClientShowcase />
      <Footer />
    </main>
  );
}
