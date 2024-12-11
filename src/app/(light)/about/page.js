//= Page components
import AboutIntro from "@/components/AboutUs/AboutIntro";
import Clients from "@/components/Clients/Clients1";
import Footer from "@/components/Common/Footer";
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import PagesHeader from "@/components/Headers/PagesHeader";
import MinimalArea from "@/components/Others/MinimalArea1";
import Team from "@/components/Team/Team1";
import MessageFromExicutive from "@/components/Others/MessageFromExicutive";

export const metadata = {
  title: "GEMS Holdings - About",
};

function AboutLight() {
  return (
    <>
      <Loading />
      <Navbar theme="light" />
      <PagesHeader imageLink="/img/about/kabeli.jpg">
        BRIDGING <span className="fw-100 ">INDUSTRIES WITH </span>{" "}
        <span className="fw-100 ">INNOVATION AND</span> EXCELLENCE
      </PagesHeader>
      <AboutIntro />
      {/* <Services style="4item" /> */}
      {/* <TestimonialsWithVideo /> */}
      {/* <SkillsCircle from="aboutPage" /> */}
      <Team />
      <MinimalArea />
      <MessageFromExicutive />
      <Clients theme="light" />
      {/* <CallToAction /> */}
      <Footer />
    </>
  );
}

export default AboutLight;
