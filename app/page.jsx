import Footer1 from "@/components/footers/Footer1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Hero6 from "@/components/homes/home-1/heros/Hero6";
import Header2 from "@/components/headers/Header2";
import { boldOnepage } from "@/data/menu";

export const metadata = {
  title:
    "Inox Metal Structure Systems",
  description:
    "Turning artists and architects visions into reality with 3D modeling and high-precision surface shaping.",
};
export default function Home1BGVideoMultiPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
          <Header2 links={boldOnepage} />{" "}
          </nav>{" "}
          <main id="main">
            <ParallaxContainer
              className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-1.jpg)",
              }}
              id="home"
            >
              <Hero6 />
            </ParallaxContainer>
            <Home1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
