import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import { boldOnepage } from "@/data/menu";
import dynamic from "next/dynamic";
const onePage = false;
const dark = false;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Features from "@/components/homes/home-1/Features";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/data/menu";
import Portfolio from "@/components/portfolio/Portfolio";

export const metadata = {
  title: "Inox Metal Structure Systems - About",
  description:
    "Turning artists and architects visions into reality with 3D modeling and high-precision surface shaping.",
};
export default function MainAboutPage3() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar">
          <Header2 links={boldOnepage} />{" "}
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/portfolio/THE-LAKHTA-CENTER/THE-LAKHTA-CENTER-1.jpg)",
                }}
              >
                <div className="container position-relative pt-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s"
                        >
                          We are Inox
                        </h2>
                        <h1 className="hs-title-1 mb-40">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="We have our signature on design masterpiece projects." />
                          </span>
                        </h1>
                        {/* Feature List */}
                        <div
                          className="mt-n10 wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="1.2s"
                        >
                          {/* Features List Item */}
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              Based in Turkey
                            </div>
                          </div>
                          {/* End Features List Item */}
                          {/* Features List Item */}
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              Established in 2013
                            </div>
                          </div>
                          {/* End Features List Item */}
                          {/* Features List Item */}
                          <div className="d-inline-flex mt-10 mx-3">
                            <div className="features-list-icon">
                              <i className="mi-check" />
                            </div>
                            <div className="features-list-text">
                              50+ Projects Done
                            </div>
                          </div>
                          {/* End Features List Item */}
                        </div>
                        {/* End Feature List */}
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            <section className="page-section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 mb-xs-50">
                    <div className="call-action-4-images">
                      <div className="call-action-4-image-1">
                        <Image
                          src="/assets/images/demo-strong/section-image-1.jpg"
                          alt="Image description"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                        />
                      </div>
                      <div
                        className="call-action-4-image-2"
                        data-rellax-y=""
                        data-rellax-speed="0.7"
                        data-rellax-percentage="0.25"
                      >
                        <Image
                          src="/assets/images/demo-strong/section-image-2.jpg"
                          alt="Image description"
                          width={500}
                          height={692}
                          className="wow scaleOutIn"
                          data-wow-duration="1.2s"
                          data-wow-offset={0}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7 col-xl-6 offset-xl-1 mt-n10">
                    <div className="wow linesAnimIn" data-splitting="lines">
                      <p className="lead mt-0 mb-40">
                        To be an innovative and continuously developing company
                        in harmony with evolving technology, and to always offer
                        our customers new, affordable, high-quality, and
                        reliable products and services with the knowledge and
                        experience we possess.
                      </p>
                      <p className="text-gray mb-40">
                        To be a reliable and leading organization in the field
                        of machining and mechanical assembly for the aerospace
                        and aviation industry, both domestically and
                        internationally.
                      </p>
                    </div>
                    <div
                      className="local-scroll wow fadeInUp"
                      data-wow-offset={0}
                    >
                      <Link
                        href={`/main-pages-services-1`}
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>Our Services</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="page-section bg-dark bg-dark-alpha-70 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/VHI-SCOTS-CHURCH-EXTENSION_2.jpg)",
              }}
            >
              <Features />
            </section>
            <>
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              <section className="page-section">
                <div className="container position-relative">
                  {/* Grid */}
                  <div className="row mb-n30">
                    {/* Text */}
                    <div className="col-md-12 col-lg-3 mb-md-50">
                      <h2 className="section-title-small mb-20">
                        How we works?
                      </h2>
                      <p className="text-gray mb-0">
                      Inox delivers high-quality stainless steel products with precision. Our expert team ensures efficiency, attention to detail, and on-time delivery, prioritizing customer satisfaction.
                      </p>
                    </div>
                    {/* End Text */}
                    {/* Item */}
                    <div className="col-md-4 col-lg-3 mb-30">
                      <div className="work-process-item text-center pt-20">
                        <div className="work-process-icon">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M20 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m-3 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1m5.415 4.946c-1 .256-1.989.482-3.324.482-3.465 0-7.091-2.065-7.091-5.423 0-3.128 3.14-5.672 7-5.672 3.844 0 7 2.542 7 5.672 0 1.591-.646 2.527-1.481 3.527l.839 2.686-2.943-1.272zm-13.373-3.375l-4.389 1.896 1.256-4.012c-1.121-1.341-1.909-2.665-1.909-4.699 0-4.277 4.262-7.756 9.5-7.756 5.018 0 9.128 3.194 9.467 7.222-1.19-.566-2.551-.889-3.967-.889-4.199 0-8 2.797-8 6.672 0 .712.147 1.4.411 2.049-.953-.126-1.546-.272-2.369-.483m17.958-1.566c0-2.172-1.199-4.015-3.002-5.21l.002-.039c0-5.086-4.988-8.756-10.5-8.756-5.546 0-10.5 3.698-10.5 8.756 0 1.794.646 3.556 1.791 4.922l-1.744 5.572 6.078-2.625c.982.253 1.932.407 2.85.489 1.317 1.953 3.876 3.314 7.116 3.314 1.019 0 2.105-.135 3.242-.428l4.631 2-1.328-4.245c.871-1.042 1.364-2.384 1.364-3.75" />
                          </svg>
                        </div>
                        <h3 className="work-process-title">1. Disscussion.</h3>
                      </div>
                    </div>
                    {/* End Item */}
                    {/* Item */}
                    <div className="col-md-4 col-lg-3 mb-30">
                      <div className="work-process-item text-center pt-20">
                        <div className="work-process-icon">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M6 3.447h-1v-1.447h19v16h-7.731l2.731 4h-1.311l-2.736-4h-1.953l-2.736 4h-1.264l2.732-4h-2.732v-1h8v-1h3v1h3v-14h-17v.447zm2.242 17.343c-.025.679-.576 1.21-1.256 1.21-.64 0-1.179-.497-1.254-1.156l-.406-4.034-.317 4.019c-.051.656-.604 1.171-1.257 1.171-.681 0-1.235-.531-1.262-1.21l-.262-6.456-.308.555c-.241.437-.8.638-1.265.459-.404-.156-.655-.538-.655-.951 0-.093.012-.188.039-.283l1.134-4.098c.17-.601.725-1.021 1.351-1.021h4.096c.511 0 1.012-.178 1.285-.33.723-.403 2.439-1.369 3.136-1.793.394-.243.949-.147 1.24.217.32.396.286.95-.074 1.297l-3.048 2.906c-.375.359-.595.849-.617 1.381-.061 1.397-.3 8.117-.3 8.117zm-5.718-10.795c-.18 0-.34.121-.389.294-.295 1.04-1.011 3.666-1.134 4.098l1.511-2.593c.172-.295.623-.18.636.158l.341 8.797c.01.278.5.287.523.002 0 0 .269-3.35.308-3.944.041-.599.449-1.017.992-1.017.547.002.968.415 1.029 1.004.036.349.327 3.419.385 3.938.043.378.505.326.517.022 0 0 .239-6.725.3-8.124.033-.791.362-1.523.925-2.061l3.045-2.904c-.661.492-2.393 1.468-3.121 1.873-.396.221-1.07.457-1.772.457h-4.096zm16.476 1.005h-5v-1h5v1zm2-2h-7v-1h7v1zm-15.727-4.994c-1.278 0-2.315 1.038-2.315 2.316 0 1.278 1.037 2.316 2.315 2.316s2.316-1.038 2.316-2.316c0-1.278-1.038-2.316-2.316-2.316zm0 1c.726 0 1.316.59 1.316 1.316 0 .726-.59 1.316-1.316 1.316-.725 0-1.315-.59-1.315-1.316 0-.726.59-1.316 1.315-1.316zm15.727 1.994h-7v-1h7v1z" />
                          </svg>
                        </div>
                        <h3 className="work-process-title">2. Prototyping.</h3>
                      </div>
                    </div>
                    {/* End Item */}
                    {/* Item */}
                    <div className="col-md-4 col-lg-3 mb-30">
                      <div className="work-process-item text-center pt-20">
                        <div className="work-process-icon">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M15.551 14.703c.474 1.372 2.049 2.459 3.801 1.868l.021-.007c1.565-.544 2.391-2.242 1.854-3.807-.187-.546-.425-1.137-.695-1.757h-5.967c.299 1.366.625 2.647.986 3.703m2.264-9.232l-4.051 1.388c.183 1.037.379 2.103.59 3.141h5.726c-.655-1.404-1.445-2.94-2.265-4.529m.492-1.226c1.524 2.958 3.086 5.915 3.866 8.187.598 1.744-.045 3.895-2.028 4.874l1.211 3.529c.291.812 1.322.926 2.392.808l.252.735-4.728 1.622-.272-.788c.903-.479 1.688-1.215 1.41-2.054l-1.208-3.52c-2.162.439-3.994-.861-4.596-2.61-.791-2.304-1.405-5.566-1.976-8.837l5.677-1.946zm-8.872 6.755h-5.967c-.27.62-.508 1.211-.695 1.757-.536 1.565.289 3.263 1.854 3.807l.021.007c1.753.591 3.328-.496 3.801-1.868.362-1.056.688-2.337.986-3.703m-5.515-1h5.726c.211-1.038.407-2.104.591-3.141l-4.051-1.388c-.821 1.589-1.611 3.125-2.266 4.529m7.45-3.809c-.571 3.271-1.185 6.533-1.976 8.837-.602 1.749-2.434 3.049-4.596 2.61l-1.208 3.52c-.278.839.507 1.575 1.41 2.054l-.271.788-4.729-1.622.252-.735c1.07.118 2.102.004 2.392-.808l1.211-3.529c-1.983-.979-2.625-3.13-2.028-4.874.78-2.272 2.342-5.229 3.867-8.187l5.676 1.946zm7.13 7.811c.414 0 .75.336.75.75 0 .413-.336.75-.75.75s-.75-.337-.75-.75c0-.414.336-.75.75-.75m-14.5.248c0 .414.336.75.75.75s.75-.336.75-.75c0-.413-.336-.75-.75-.75s-.75.337-.75.75m3.25-2.25c.414 0 .75.337.75.75 0 .414-.336.75-.75.75s-.75-.336-.75-.75c0-.413.336-.75.75-.75m10.5-.499c.414 0 .75.336.75.751 0 .413-.336.75-.75.75s-.75-.337-.75-.75c0-.415.336-.751.75-.751m-5.249-7.977v-3.023c0-.277-.223-.5-.5-.5-.275 0-.499.223-.499.5v3.023c0 .276.224.5.499.5.277 0 .5-.224.5-.5m1.932.462l1.641-2.79c.142-.238.062-.545-.176-.685-.239-.139-.544-.062-.684.177l-1.643 2.79c-.14.238-.06.545.176.685.08.047.167.069.254.069.172 0 .339-.088.432-.246m-4.552.246c-.171 0-.337-.088-.432-.246l-1.642-2.79c-.14-.238-.061-.545.177-.685.237-.14.544-.061.685.177l1.643 2.79c.139.238.061.545-.178.685-.08.047-.166.069-.253.069" />
                          </svg>
                        </div>
                        <h3 className="work-process-title">3. Production.</h3>
                      </div>
                    </div>
                    {/* End Item */}
                  </div>
                  {/* End Grid */}
                </div>
              </section>
            </>
            <>{/* Divider */}</>
            <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
            <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content z-index-1" : ""
              }`}
            >
              <div className="container position-relative">
                {/* Decorative Waves */}
                <div
                  className="decoration-21 d-none d-lg-block"
                  data-rellax-y
                  data-rellax-speed="0.7"
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
              </div>
            </section>
            <h2 class="section-title text-center">Our Machinery Park</h2>
            <section className="page-section mt-0 pt-0">
              <Portfolio />
            </section>

            <div className="row text-center wow fadeInUp">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <p className="section-descr mb-50 mb-sm-30">
                  The power of design help us to solve complex problems and
                  cultivate business solutions.
                </p>
              </div>
            </div>
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
