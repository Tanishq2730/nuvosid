import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import About from "@/components/home/about/about";
import ImageMarquee from "@/components/home/clients/ImageMarquee";
import Counter from "@/components/home/counter/counter";
import Team from "@/components/home/team/team";
import Marquee from "@/components/home/marquee/marquee";
import { HeroParallaxDemo } from "@/components/home/project/HeroParallaxDemo";
import Video from "@/components/home/video/video";
import Testimonial from "@/components/home/testimonial/testimonial";

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
      <Video/>
      <Team/>
      <Marquee/>
      <HeroParallaxDemo/>
      <Testimonial/>
    </>
  );
}