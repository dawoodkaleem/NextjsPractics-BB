// import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructurs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    
       <main className="min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.02]">
          
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChooseUs/>
        <MusicSchoolTestimonials/>
        <UpcomingWebinars/>
        <Instructors/>
        <Footer/>
       </main>
  );
}
