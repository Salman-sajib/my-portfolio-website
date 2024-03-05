import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

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

// GSAP animation for the title
gsap.from('.title', {
  opacity: 0,
  y: -50,
  duration: 1,
  scrollTrigger: {
    trigger: '.title',
    start: 'top 80%', // Adjust the start position as needed
    end: 'bottom 20%', // Adjust the end position as needed
    scrub: 1, // Smoothly animate the position during the scroll
  },
});

// GSAP animation for the technology logos
gsap.from('.technology-logos img', {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: '.technology-logos',
    start: 'top 80%', // Adjust the start position as needed
    end: 'bottom 80%', // Adjust the end position as needed
    scrub: 1, // Smoothly animate the position during the scroll
  },
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

document.addEventListener('DOMContentLoaded', function () {
  // Select the "Skills" navigation link
  const skillsLink = document.querySelector('a[href="#skills"]');

  // Add a click event listener to the "Skills" link
  skillsLink.addEventListener('click', function (event) {
    event.preventDefault();

    // Get the target element (Skills section)
    const skillsSection = document.getElementById('skills');

    // Scroll to the target element smoothly
    skillsSection.scrollIntoView({ behavior: 'smooth' });
  });
});
