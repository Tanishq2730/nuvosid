import AboutUs from "@/components/Academy/aboutUs";
import AcademyBanner from "@/components/Academy/academyBanner";
import HeadSection from "@/components/Academy/headerSection";
import How from "@/components/Academy/how";
import Learn from "@/components/Academy/learn";
import Started from "@/components/Academy/started";
import VisionMission from "@/components/Academy/visionMission";
import ImageMarquee from "@/components/home/clients/ImageMarquee";

export const metadata = {
  title: "Academy | Nuvosid",
};

export default function AcademyPage() {
  return (
    <>
    {/* <HeadSection/> */}
    <AcademyBanner/>
    <AboutUs/>
    <VisionMission/>
    <How/>
    <Started/>
    <Learn/>
    <ImageMarquee />
    </>
  );
}


