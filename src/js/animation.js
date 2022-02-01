gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero .line-l-1", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".hero",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  x: -100,
  opacity: 0,
  duration: 1,
  ease: ' Power2.easeOut'
});

gsap.from(".hero .line-l-2", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".hero",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  x: 100,
  opacity: 0,
  duration: 1,
  ease: ' Power2.easeOut'
});

gsap.from(".hero .line-l-3", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".hero",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  x: -200,
  opacity: 0,
  duration: 1,
  ease: ' Power2.easeOut'
});

gsap.from(".hero__content h1, .hero__content span, .hero__content p", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".hero",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  delay: .3,
  opacity: 0,
  duration: 1,
  stagger: .3,
  ease: ' Power2.easeOut'
});

gsap.from(".hero .line", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".hero",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  x: 100,
  opacity: 0,
  delay: 2,
  duration: 1,
  ease: ' Power2.easeOut'
});

gsap.from(".hero .scroll-container", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".hero",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  delay: 5,
  opacity: 0,
  duration: 2,
  ease: ' Power2.easeOut'
});


gsap.from(".about h2, .glide__slides", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".about",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2,
  stagger: .2,
  ease: 'back'
});

gsap.from(".offer h2", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".offer",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2,
  ease: 'back'
});