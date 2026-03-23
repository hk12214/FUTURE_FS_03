// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // --- TYPEWRITER ---
  const typewriter = new Typewriter('#wel', {
    strings: ['Welcome to Campus Cravings'],
    autoStart: true,
    loop: true,
    delay: 75, // Optional: typing speed
    deleteSpeed: 50
  });

  // --- ACCORDION ---
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;

      // Collapse all other items
      document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) {
          c.style.maxHeight = null;
        }
      });

      // Toggle current
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});