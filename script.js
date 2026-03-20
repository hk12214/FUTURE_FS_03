const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;

      // Collapse all other accordion items
      document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) {
          c.style.maxHeight = null;
        }
      });

      // Toggle current accordion
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
