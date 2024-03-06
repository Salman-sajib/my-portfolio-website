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
  y: 100, // Move 100 pixels down (adjust as needed)
  duration: 1.3, // Animation duration in seconds
  ease: 'power2.inOut', // Easing function
  delay: 1, // Delay the animation for a stagger effect
});

// GSAP animation for the title
gsap.from('.skills-title', {
  opacity: 0,
  y: -20,
  duration: 1,
  scrollTrigger: {
    trigger: '.skills-title',
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

// animate projects
// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Set up animation for the main projects title
  gsap.from('.projects-title', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.projects-title',
      start: 'top 80%', // Adjust as needed
      end: 'bottom 20%', // Adjust as needed
      toggleActions: 'play none none reverse',
    },
  });

  // Set up animations for project cards
  gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%', // Adjust as needed
        end: 'bottom 20%', // Adjust as needed
        toggleActions: 'play none none reverse',
      },
    });
  });
});

// lenis for smooth scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // console.log(e);
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// for smoothly jump to the element when clicked on the link
document.addEventListener('DOMContentLoaded', function () {
  // Select all navigation links
  const navLinks = document.querySelectorAll('nav a');

  // Add a click event listener to each navigation link
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // Get the target element based on the link's href
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element smoothly
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// added the functionality for the nav on small screen

const sidebar = document.querySelector('.sidebar');
const burgerMenu = document.querySelector('.burger-menu');
const closeSidebar = document.querySelector('.close-sidebar');
const sidebarNavItem = document.querySelectorAll('.sidebar .nav-item');

burgerMenu.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

sidebarNavItem.forEach((item) => {
  item.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});
