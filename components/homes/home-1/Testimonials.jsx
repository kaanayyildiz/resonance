"use client";
import { testimonials } from "@/data/testimonials";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="container position-relative">
      <div className="pt-80 pb-80 pt-sm-70 pb-sm-70 px-4 bg-gray-light-1">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 wow fadeInUp">
            <div className="row">
              <div className="col-md-10 offset-md-1 text-center">
                <h2 className="section-title mb-sm-40">
                  Inox is trusted by <span className="mark-decoration-1">500+</span>
                  customers.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
