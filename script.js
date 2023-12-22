// gsap.registerPlugin(ScrollTrigger);

// gsap.to('.work-slider', {
//   opacity: 1,
//   y: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '.work-slider',
//     start: 'top 80%',
//     end: 'bottom 20%', 
//     scrub: true, 
//   }
// });

gsap.registerPlugin(ScrollTrigger);

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("article").forEach((article, i) => {
  article.slide_image = article.querySelector(".slide_image"); 

 
  // the first image (i === 0) should be handled differently because it should start at the very top.
  // use function-based values in order to keep things responsive
  gsap.fromTo(article.slide_image, {
    backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(article)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(article))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: article,
      start: () => i ? "top bottom" : "top top", 
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true // to make it responsive
    }
  });

});