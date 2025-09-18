// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll spy – highlight active menu item
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 70;
  document.querySelectorAll('nav a').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Contact form validation
const contactForm = document.querySelector('.contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[placeholder="Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
  });
}