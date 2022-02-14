gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo-wrap", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: "section",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2.6,
  ease: ' Power2.easeOut'
});

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

gsap.from(".hero__content h1, .hero__content span, .hero__content p, .hero .scroll-container", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".hero",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  delay: .3,
  opacity: 0,
  duration: 1,
  stagger: .25,
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
  ease: 'Power2.easeOut'
});

gsap.from(".about .up-text, .about h2, .about p", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".about",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2,
  stagger: .3,
  ease: 'Power2.easeOut'
});

gsap.from(".about .img-p", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".about",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  y: 100,
  opacity: 0,
  delay: 1,
  duration: .8,
  ease: 'Power3.easeOut'
});

gsap.from(".service .up-text, .service h2, .glide__slides", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".service",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2,
  stagger: .2,
  ease: 'Power2.easeOut'
});

gsap.from(".realisation .up-text, .realisation h2, .glide-2", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".realisation",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2,
  stagger: .2,
  ease: 'Power2.easeOut'
});

gsap.from(".opinion .up-text, .opinion h2, .glide-3", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".opinion",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2,
  stagger: .2,
  ease: 'Power2.easeOut'
});

gsap.from(".contact .up-text, .contact h2, .contact-form", {
  scrollTrigger: {
    scroller: ".scroll-wrapper",
    trigger: ".contact",
    start: 'center 55%',
    toggleActions: 'play complete restart reverse'
  }, 
  opacity: 0,
  duration: 2,
  stagger: .2,
  ease: 'Power2.easeOut'
});