document.addEventListener('DOMContentLoaded', function() {
  // Initialize all three carousels
  initCarousel('carouselA');
  initCarousel('carouselB');
  initCarousel('carouselC');
  
  // Function to initialize a carousel by ID
  function initCarousel(carouselId) {
    const container = document.getElementById(carouselId);
    if (!container) return;
    
    const slides = container.querySelector('.carousel-slides');
    const slideElements = container.querySelectorAll('.slide');
    const prevButton = container.querySelector('.carousel-button.prev');
    const nextButton = container.querySelector('.carousel-button.next');
    const dots = container.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const slideCount = slideElements.length;
    
    // Function to update the carousel position
    function updateCarousel() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update dots
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }
    
    // Next button click handler
    nextButton.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    });
    
    // Previous button click handler
    prevButton.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event bubbling
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateCarousel();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentIndex = parseInt(this.getAttribute('data-index'));
        updateCarousel();
      });
    });
    
    // Auto-play functionality
    function autoAdvance() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    }
    
    // Different intervals for each carousel to prevent simultaneous transitions
    let interval = 5000; // Default: 5 seconds
    if (carouselId === 'carouselB') interval = 6000; // 6 seconds
    if (carouselId === 'carouselC') interval = 7000; // 7 seconds
    
    let intervalId = setInterval(autoAdvance, interval);
    
    // Pause auto-play when mouse hovers over carousel
    container.addEventListener('mouseenter', function() {
      clearInterval(intervalId);
    });
    
    container.addEventListener('mouseleave', function() {
      intervalId = setInterval(autoAdvance, interval);
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    container.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - show next slide
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - show previous slide
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
      }
    }
  }
});