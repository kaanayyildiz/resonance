import React from "react";
import Image from "next/image";
export default function Brands() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h2 className="section-title-tiny mb-30">
          Our Collaborations
          </h2>

          <div className="logo-grid">
            <Image
              className="logo-grid-img image-filter"
              src="/assets/images/clients-logos/logo-grid/skymark.png"
              width="150"
              height="33"
              alt="Skymark Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
