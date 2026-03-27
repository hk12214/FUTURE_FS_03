<script>
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // close others
    document.querySelectorAll('.accordion-content').forEach(c => {
      if (c !== content) c.style.maxHeight = null;
    });

    document.querySelectorAll('.accordion-header').forEach(h => {
      if (h !== header) h.classList.remove('active');
    });

    // toggle current
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      header.classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      header.classList.add('active');
    }
  });
});
</script>