"use client";

import { useState } from "react";

export default function Map() {
  const [mapOpen, setMapOpen] = useState(false);
  return (
    <>
      <a href="#" className={`map-section ${mapOpen ? "js-active" : ""}`}>
        <div className="map-toggle wow fadeInUpShort" aria-hidden="true">
          <div className="mt-icon">
            <i className="mi-location"></i>
          </div>
          <div className="mt-text">
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-open">
              Open the map <i className="mt-open-icon"></i>
            </div>
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-close">
              Close the map <i className="mt-close-icon"></i>
            </div>
          </div>
        </div>
      </a>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159325.14665752015!2d28.58576051495504!3d41.06106963499102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55ad4c407fcab%3A0x323100f545768f98!2s%C4%B0NOKSMETAL%20SB%20FABRIKA!5e0!3m2!1str!2str!4v1724674884847!5m2!1str!2str"
        width={600}
        height={450}
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </>
  );
}
