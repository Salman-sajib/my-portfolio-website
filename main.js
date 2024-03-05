import { gsap } from 'gsap';

// Animate each letter of the greeting
gsap.from('.greeting span', {
  opacity: 0,
  duration: 1, // Animation duration in seconds
  ease: 'power2.inOut', // Easing function
  stagger: 0.2, // Stagger the animations for a more natural look
});

// Additional animation for the about-me section
gsap.from('.about-me', {
  opacity: 0,
  x: 100, // Move 100 pixels down (adjust as needed)
  duration: 1.3, // Animation duration in seconds
  ease: 'power2.inOut', // Easing function
  delay: 1, // Delay the animation for a stagger effect
});

// lenis for smooth scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  console.log(e);
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
