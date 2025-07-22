import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <AboutSection />
    </>
  );
}
