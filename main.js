import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline()
  .from(".page", { opacity: 0, duration: 1, ease: "power3.in" })
  .from("#name", { opacity: 0, scale: 0, ease: "elastic.inOut(1, 0.3)" })
  .to("#nuage1", {
    scrollTrigger: {
      scrub: 1,
    },
    x: -3000,
  })
  .to("#nuage2", {
    scrollTrigger: {
      scrub: 1,
    },
    x: 3000,
  })
  .to("#nuage3", {
    scrollTrigger: {
      scrub: 1,
    },
    x: 3000,
  })
  .to("#soleil", {
    scrollTrigger: {
      scrub: 1,
    },
    y: -800,
  })
  .to("#couche1", {
    scrollTrigger: {
      scrub: 1,
    },
    scale: 1.2,
  })
  .to("#couche2", {
    scrollTrigger: {
      scrub: 1,
    },
    scale: 1.3,
  })
  .to("#couche3", {
    scrollTrigger: {
      scrub: 1,
    },
    scale: 1.4,
  })
  .to("#couche4", {
    scrollTrigger: {
      scrub: 1,
    },
    scale: 1.5,
  })
  .to("#couche5", {
    scrollTrigger: {
      scrub: 1,
    },
    scale: 1.6,
  })
