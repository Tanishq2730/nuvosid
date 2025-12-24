import AboutImg from "@/components/About/aboutImg/aboutImg";
import AboutSection from "@/components/About/aboutSection/aboutSection";
import HeadSection from "@/components/About/headSection/headSection";

export const metadata = {
  title: "About | Nuvosid",
};

export default function AboutPage() {
  return (
    <>
    <HeadSection/>
    <AboutSection/>
    <AboutImg/>
    </>
  );
}


