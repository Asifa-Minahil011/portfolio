// ============================================
// SCRIPT.JS — Portfolio Website
// DecodeLabs Project 1 | JavaScript Logic
// ============================================


// ---- 1. HAMBURGER MENU (Mobile Nav) ----
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ---- 2. ACTIVE NAV LINK ON SCROLL ----
const sections = document.querySelectorAll('section');
const links    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#A5856F'; // mocha color
    }
  });
});


// ---- 3. CONTACT FORM VALIDATION ----
function sendMessage() {
  const name     = document.getElementById('name').value.trim();
  const email    = document.getElementById('email').value.trim();
  const message  = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');

  // Clear previous feedback
  feedback.textContent = '';
  feedback.style.color = '';

  // Basic validation
  if (!name) {
    feedback.textContent = '⚠️ Please enter your name.';
    feedback.style.color = '#e74c3c';
    return;
  }

  if (!email || !email.includes('@')) {
    feedback.textContent = '⚠️ Please enter a valid email address.';
    feedback.style.color = '#e74c3c';
    return;
  }

  if (!message) {
    feedback.textContent = '⚠️ Please enter a message.';
    feedback.style.color = '#e74c3c';
    return;
  }

  // Success
  feedback.textContent = '✅ Message sent! I will get back to you soon.';
  feedback.style.color = '#27ae60';

  // Clear the form
  document.getElementById('name').value    = '';
  document.getElementById('email').value   = '';
  document.getElementById('message').value = '';
}


// ---- 4. SCROLL REVEAL ANIMATION ----
// Cards fade in when they come into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity  = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Apply to project cards and skill cards
document.querySelectorAll('.project-card, .skill-card').forEach(card => {
  card.style.opacity   = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});


// ---- 5. NAVBAR SHADOW ON SCROLL ----
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
  } else {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
  }
});
