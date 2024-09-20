"use client";

import { portfolios12 } from "@/data/portfolio";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const filters = [
  { name: "All", category: "all" },
  { name: "CNC", category: "cnc" },
  { name: "Laser", category: "laser" },
  { name: "Cutting & Saw", category: "cutting" },
  { name: "Welding", category: "welding" },
];

export default function Portfolio({ gridClass = "" }) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const isotopContainer = useRef();
  const isotope = useRef();

  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".work-item",
      layoutMode: "masonry",
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      isotope.current.layout();
    });
  };

  const updateCategory = (val) => {
    setCurrentCategory(val);
    isotope.current.arrange({
      filter: val == "all" ? "*" : "." + val,
    });
  };

  useEffect(() => {
    initIsotop();
  }, []);

  return (
    <div className="container">
      <div className="works-filter text-center mb-60 mb-sm-40 z-index-1">
        {filters.map((elm, i) => (
          <a
            onClick={() => updateCategory(elm.category)}
            key={i}
            className={`filter ${
              currentCategory == elm.category ? "active" : ""
            }`}
          >
            {elm.name}
          </a>
        ))}
      </div>
      <ul
        ref={isotopContainer}
        className={`works-grid ${gridClass} work-grid-gut-lg masonry`}
        id="work-grid"
      >
        <Gallery>
          {portfolios12.map((item, index) => (
            <li key={index} className={`work-item ${item.className}`}>
              <div className={item.linkClassName}>
                <div className="work-img">
                  <div className="work-img-bg" />
                  <Item
                    original={item.imgSrc}
                    thumbnail={item.imgSrc}
                    width={650}
                    height={773}
                  >
                    {({ ref, open }) => (
                      <Image
                        width={650}
                        height={773}
                        ref={ref}
                        onClick={open}
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        data-wow-delay={item.delay}
                      />
                    )}
                  </Item>
                </div>
                <div className="work-intro text-start">
                  <h3 className="work-title">{item.title}</h3>
                  <div className="work-descr">{item.description}</div>
                </div>
              </div>
            </li>
          ))}
        </Gallery>
      </ul>
    </div>
  );
}