import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import About from "@/components/home/about/about";
import ImageMarquee from "@/components/home/clients/ImageMarquee";
import Counter from "@/components/home/counter/counter";
// import ImageMarquee from "@/components/home/marque/ImageMarquee";

export default function HomePage() {
  const images = [
    "https://assets.codepen.io/16327/portrait-image-1.jpg",
    "https://assets.codepen.io/16327/portrait-image-2.jpg",
    "https://assets.codepen.io/16327/portrait-image-3.jpg",
    "https://assets.codepen.io/16327/portrait-image-4.jpg"
  ];
  return (
    <>
      <Hero />
      <Services />
      <About/>
      <ImageMarquee />
      <Counter/>
      <Projects />
    </>
  );
}