let scroll_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".slider-images",
        start: "top center",
        pin: true,
        scrub: true,
        end: "+=300",
        markers: true,
    }
}),
    facts = [...document.querySelectorAll(".img-wrapper")]
scroll_tl.to("h1", {
    scale: 1.5,
    duration: 1,
    ease: "slow"
})
scroll_tl.to(facts, {
    xPercent: -85 * (facts.length - 1),
    scrollTrigger: {
        trigger: ".image-box-list",
        start: "center center",
        pin: true,
        horizontal: true,
        pinSpacing:false,
        markers: true,
        scrub: 1,
        snap: 1 / (facts.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: () => `+=${smallFactsContainer.offsetWidth}`
        end: () => "+=4320"
    }
});


// same codes for



gsap.registerPlugin(ScrollTrigger);

var sliderImages = gsap.utils.toArray(".image-box-list");

var getTotalWidth = () => {
  totalWidth = 0;
  sliderImages.forEach((image) => totalWidth += image.offsetWidth);
};

getTotalWidth();
ScrollTrigger.addEventListener("revert", getTotalWidth);

gsap.to(sliderImages, {
  scrollTrigger: {
    trigger: ".image-box-list",
    start: "top top",
    end: () => "+=${totalWidth}",
    pin: true,
    scrub: true,
    invalidateOnRefresh: true
  },
  x: () => (totalWidth - document.documentElement.clientWidth) * -1,
  ease: "none"
});

