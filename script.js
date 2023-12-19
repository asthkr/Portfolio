




const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scrollContainer", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".scrollContainer").style.transform
    ? "transform"
    : "none",
});

// locomoitve script above

gsap.set(".traditional h3", {
  opacity: 0,
  scale: 1,
  x: 0,
  yPercent: 50,
});

gsap.set(".traditional img ", {
  opacity: 0,
  scale: 1,
  xPercent: 0,
  yPercent: 100,
});

var pinOnly = ScrollTrigger.create({
  scroller: ".scrollContainer",
  trigger: ".traditional-wrap",
  pin: true,
  start: "top top",
  end: "+=600%",
});

var tl01 = gsap.timeline({
  scrollTrigger: {
    scroller: ".scrollContainer",
    trigger: ".trigger-wrap",
    start: "top top",
    end: "+=100%",
    ease: Bounce.easeOut,
    toggleActions: "play reverse play reverse",
  },
});

tl01.to(".traditional1 img", {
  opacity: 1,
  xPercent: 0,
  yPercent: 0,
  scale: 1,
});
tl01.to(".traditional1 h3", { opacity: 1, scale: 1, x: 0, yPercent: 0 });

var tl02 = gsap.timeline({
  scrollTrigger: {
    scroller: ".scrollContainer",
    trigger: ".trigger-wrap",
    start: "top top-=100%",
    end: "+=100%",
    ease: Bounce.easeOut,
    toggleActions: "play reverse play reverse",
  },
});

tl02.to(".traditional2 img", {
  opacity: 1,
  xPercent: 0,
  yPercent: 0,
  scale: 1,
});
tl02.to(".traditional2 h3", { opacity: 1, scale: 1, x: 0, yPercent: 0 });
var tl03 = gsap.timeline({
  scrollTrigger: {
    scroller: ".scrollContainer",
    trigger: ".trigger-wrap",
    start: "top top-=200%",
    end: "+=100%",
    ease: Bounce.easeOut,
    toggleActions: "play reverse play reverse",
  },
});

tl03.to(".traditional3 img", {
  opacity: 1,
  xPercent: 0,
  yPercent: 0,
  scale: 1,
});
tl03.to(".traditional3 h3", { opacity: 1, scale: 1, x: 0, yPercent: 0 });
var tl04 = gsap.timeline({
  scrollTrigger: {
    scroller: ".scrollContainer",
    trigger: ".trigger-wrap",
    start: "top top-=300%",
    end: "+=100%",
    ease: Bounce.easeOut,
    toggleActions: "play reverse play reverse",
  },
});

tl04.to(".traditional4 img", {
  opacity: 1,
  xPercent: 0,
  yPercent: 0,
  scale: 1,
});
tl04.to(".traditional4 h3", { opacity: 1, scale: 1, x: 0, yPercent: 0 });
var tl05 = gsap.timeline({
  scrollTrigger: {
    scroller: ".scrollContainer",
    trigger: ".trigger-wrap",
    start: "top top-=400%",
    end: "+=100%",
    ease: Bounce.easeOut,
    toggleActions: "play reverse play reverse",
  },
});

tl05.to(".traditional5 img", {
  opacity: 1,
  xPercent: 0,
  yPercent: 0,
  scale: 1,
});
tl05.to(".traditional5 h3", { opacity: 1, scale: 1, x: 0, yPercent: 0 });

var tl06 = gsap.timeline({
  scrollTrigger: {
    scroller: ".scrollContainer",
    trigger: ".trigger-wrap",
    start: "top top-=501%",
    end: "+=100%",
    ease: Bounce.easeOut,
    toggleActions: "play reverse play reverse",
  },
});

tl06.to(".traditional6 img", {
  opacity: 1,
  xPercent: 0,
  yPercent: 0,
  scale: 1,
});
tl06.to(".traditional6 h3", { opacity: 1, scale: 1, x: 0, yPercent: 0 });
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
