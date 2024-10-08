import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";

import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Our Story</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="If you can draw we can make it" />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
              {/* Decorative Dots */}
              <div
                className="decoration-2 d-none d-md-block"
                data-rellax-y=""
                data-rellax-speed="0.7"
                data-rellax-percentage="-0.2"
              >
                <Image
                  width="103"
                  height="223"
                  src="/assets/images/decoration-2.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}

              {onePage ? (
                <a
                  href="#team"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              ) : (
                <Link
                  href={`/about${dark ? "-dark" : ""}`}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              )}
            </div>
          </div>
          <About />
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        {" "}
        <Service />
      </section>

      <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-4 mb-md-60 mb-xs-50">
              <h2 className="section-title mb-20 wow fadeInUp">
                Our achivements
              </h2>
              <p
                className="section-descr mb-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                We deliver innovative and tailored solutions, empowering our clients to achieve remarkable success.
              </p>
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.2s">
                {onePage ? (
                  <a
                    href="#contact"
                    className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Request a Quote</span>
                  </a>
                ) : (
                  <Link
                    href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                    className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Request a Quote</span>
                  </Link>
                )}
              </div>
            </div>{" "}
            <Facts />
          </div>
        </div>
      </ParallaxContainer>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${
          dark ? "bg-dark-1 light-content z-index-1" : ""
        }`}
      >
        <div className="container position-relative">
          {/* Decorative Waves */}
          <div
            className="decoration-3 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed="-0.7"
            data-rellax-percentage="0.5"
          >
            <Image
              width={148}
              height={148}
              className="svg-shape"
              src="/assets/images/decoration-3.svg"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <p className="section-descr mb-50 mb-sm-30">
              Your vision, our craftsmanship. We turn your designs into reality, solving complex challenges with precision and expertise.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <a
                    href="#contact"
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Contact us</span>
                  </a>
                ) : (
                  <Link
                    href={`/contact${dark ? "-dark" : ""}`}
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Contact us</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Benefits />{" "}
      </section>
      <section
        className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}
      >
        {" "}
        {dark ? <Testimonials2 /> : <Testimonials />}
      </section>
      <section className={`page-section  ${dark ? " light-content" : ""}`}>
        {dark ? <Brands2 /> : <Brands />}
      </section>

      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      
      <section
        className="page-section bg-dark-1 bg-dark-alpha-90 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <NewsLetter />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />{" "}
      </section>
    </>
  );
}
