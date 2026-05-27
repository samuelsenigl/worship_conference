document.addEventListener('DOMContentLoaded', () => {

  // Fade-in / Slide-up Scroll Animations via Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });

  // --- New Features: Cursor Follower, Parallax & Interactive Elements ---
  const cursorFollower = document.querySelector('.cursor-follower');
  const heroContent = document.querySelector('.hero-content');
  const visionImage = document.querySelector('.vision-image img');
  
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = window.innerWidth / 2;
  let followerY = window.innerHeight / 2;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth follow for cursor glow
  function animateCursor() {
    followerX += (mouseX - followerX) * 0.08;
    followerY += (mouseY - followerY) * 0.08;
    
    if (cursorFollower) {
      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
    }
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();

});
