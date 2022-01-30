gsap.registerPlugin(ScrollTrigger);

gsap.from(".about h2", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".about",
    start: 'center 55%',
    markers: true,
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2,
  ease: 'back'
});

gsap.from(".about img", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".offer",
    start: 'center 55%',
    markers: true,
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2,
  ease: 'back'
});