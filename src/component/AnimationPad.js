import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FirstImg from "../Images/beautiful-woman-posing-studio-PhotoRoom 2.png";
import SecondImg from "../Images/2f89445eb1-PhotoRoom 1.png";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationPad() {
  useEffect(() => {
    // Scroll Trigger for both images
    gsap.to(".firstImges", {
      y: 300, // Move the first image up by 100 pixels
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".sectionTwo",
        start: "top 110%", // Start animation when the top of the trigger hits the center of the viewport
        end: "bottom 110%", // End animation when the bottom of the trigger hits the center of the viewport
        scrub: true, // Smoothly move the first image as you scroll
      },
    });

    gsap.to(".secondImage", {
      y: -250, // Move the second image down by 100 pixels
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".sectionTwo",
        start: "top 110%", // Start animation when the top of the trigger hits the center of the viewport
        end: "bottom 110%", // End animation when the bottom of the trigger hits the center of the viewport
        scrub: true, // Smoothly move the second image as you scroll
      },
    });
  }, []); // Run only once on component mount

  return (
    <>
      <section className="sectionOne"></section>
      <section className="sectionTwo">
        <img src={FirstImg} width={250} height={250} className="firstImges" />
        <img src={SecondImg} width={250} height={250} className="secondImage" />
      </section>
      <section className="sectionThree"></section>
    </>
  );
}