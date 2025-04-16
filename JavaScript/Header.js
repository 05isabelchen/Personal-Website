document.addEventListener('DOMContentLoaded', function() {
  // Get all dropdown elements
  const dropdowns = document.querySelectorAll('.dropdown');
  
  // Add click listener for mobile/touch devices
  dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    // For touch devices, toggle dropdown on click
    dropdownToggle.addEventListener('click', function(e) {
      // Only prevent default if we're on a touch device and dropdown isn't open
      if (window.innerWidth <= 768 && !dropdown.classList.contains('show')) {
        e.preventDefault();
        dropdown.classList.toggle('show');
      }
    });
    
    // Add keyboard accessibility
    dropdownToggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dropdown.classList.toggle('show');
      }
    });
    
    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
  });
});