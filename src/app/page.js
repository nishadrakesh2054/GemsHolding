import Script from "next/script";
//= Page components
import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Cursor from "@/components/Common/Cursor";
import Clients from "@/components/Clients/Clients2";
import Footer from "@/components/Common/Footer";
import LoadingScreen from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import SliderHeader from "@/components/Headers/SliderHeader";
import Works from "@/components/Works/Works2";

export const metadata = {
  title: "GEMS HOLDINGS",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    other: generateStylesheetObject([
      "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
      "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap",
      "https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap",
      "/css/light.css",
    ]),
  },
};

export default function Home6() {
  return (
    <>
      <LoadingScreen />
      <Cursor />

      <Navbar />
      <SliderHeader />
      <div className="main-content">
        {/* <Services serviceMB50 /> */}
        {/* <AboutUs /> */}
        {/* <Numbers /> */}
        <Works />
        {/* <Testimonials /> */}
        {/* <Blogs /> */}
        {/* <CallToAction img="/img/patrn1.png" /> */}
        <Clients theme="light" />

        <Footer />
      </div>

      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/simpleParallax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/wowInit.js"></Script>
    </>
  );
}
