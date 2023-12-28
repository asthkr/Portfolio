gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.image-wrap1',
  { yPercent: 50, },
  {
    opacity: 1,
    yPercent:0,
    ease: "none",
    scrollTrigger: {
      pin:true,
      trigger: '.intro',
      start: '-10% 10%',
      end: 'bottom 10%',
     
scrub:true,
    }
  });

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.image-wrap2',
  { yPercent: 0, },
  {
    opacity: 1,
    yPercent:50,
    ease: "none",
    scrollTrigger: {
      
      trigger: '.intro',
      start: '-10% 10%',
      end: 'bottom 10%',
scrub:true,
    }
  });

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