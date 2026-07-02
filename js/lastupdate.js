// SCRIPT to write date of last modification (update) where called on a page
// steviemeek
document.addEventListener('DOMContentLoaded', function() {
  const dateSpan = document.getElementById('auto-date');
  if (dateSpan) {
    dateSpan.textContent = new Date().toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
});
