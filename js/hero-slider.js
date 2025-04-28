// Hero Slider
document.addEventListener("DOMContentLoaded", () => {
  const heroSlider = document.querySelector(".hero-slider")
  if (!heroSlider) return

  const slides = heroSlider.querySelectorAll(".hero-slide")
  const prevBtn = heroSlider.querySelector(".hero-slider-nav.prev")
  const nextBtn = heroSlider.querySelector(".hero-slider-nav.next")
  const dots = heroSlider.querySelectorAll(".hero-slider-dot")

  let currentSlide = 0
  const slideCount = slides.length
  let autoplayInterval

  // Initialize slider
  //updateSlider()
  //startAutoplay()

  // Previous slide
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount
      //updateSlider()
      //resetAutoplay()
    })
  }

  // Next slide
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slideCount
      //updateSlider()
      //resetAutoplay()
    })
  }

  // Dots navigation
  //if (dots) {
  //  dots.forEach((dot, index) => {
  //    dot.addEventListener("click", () => {
  //      currentSlide = index
  //      updateSlider()
  //      resetAutoplay()
  //    })
  //  })
  //}

  // Update slider
  //function updateSlider() {
  //  // Update slides
  //  slides.forEach((slide, index) => {
  //    if (index === currentSlide) {
  //      slide.classList.add("active")
  //    } else {
  //      slide.classList.remove("active")
  //    }
  //  })

  //  // Update dots
  //  if (dots) {
  //    dots.forEach((dot, index) => {
  //      if (index === currentSlide) {
  //        dot.classList.add("active")
  //      } else {
  //        dot.classList.remove("active")
  //      }
  //    })
  //  }
  //}

  // Autoplay
  //function startAutoplay() {
  //  autoplayInterval = setInterval(() => {
  //    currentSlide = (currentSlide + 1) % slideCount
  //    updateSlider()
  //  }, 7000) // Change slide every 7 seconds
  //}

  // Reset autoplay
  //function resetAutoplay() {
  //  clearInterval(autoplayInterval)
  //  startAutoplay()
  //}

  // Pause autoplay on hover
  //heroSlider.addEventListener("mouseenter", () => {
  //  clearInterval(autoplayInterval)
  //})

  // Resume autoplay on mouse leave
  //heroSlider.addEventListener("mouseleave", () => {
  //  startAutoplay()
  //})

  // Touch events for mobile
  let touchStartX = 0
  let touchEndX = 0

  heroSlider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  heroSlider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  })

  function handleSwipe() {
    const swipeThreshold = 50 // Minimum distance for swipe

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left - next slide
      //currentSlide = (currentSlide + 1) % slideCount
      //updateSlider()
      //resetAutoplay()
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right - previous slide
      //currentSlide = (currentSlide - 1 + slideCount) % slideCount
      //updateSlider()
      //resetAutoplay()
    }
  }
  // Hero Slider Implementation
  const heroSlides = document.querySelectorAll(".hero-slide")
  const heroSliderDots = document.querySelectorAll(".hero-slider-dot")
  currentSlide = 0
  let slideInterval

  // Initialize the slider
  const initSlider = () => {
    // Set the first slide as active
    heroSlides[0].classList.add("active")
    heroSliderDots[0].classList.add("active")

    // Start the automatic slideshow
    startSlideshow()
  }

  // Change to a specific slide
  const goToSlide = (slideIndex) => {
    // Remove active class from all slides and dots
    heroSlides.forEach((slide) => slide.classList.remove("active"))
    heroSliderDots.forEach((dot) => dot.classList.remove("active"))

    // Add active class to the current slide and dot
    heroSlides[slideIndex].classList.add("active")
    heroSliderDots[slideIndex].classList.add("active")

    // Update the current slide index
    currentSlide = slideIndex
  }

  // Go to the next slide
  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % heroSlides.length
    goToSlide(newIndex)
  }

  // Start the automatic slideshow
  const startSlideshow = () => {
    slideInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
  }

  // Stop the automatic slideshow
  const stopSlideshow = () => {
    clearInterval(slideInterval)
  }

  // Add click event listeners to the slider dots
  heroSliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index)
      stopSlideshow()
      startSlideshow()
    })
  })

  // Pause slideshow when hovering over the slider
  heroSlider.addEventListener("mouseenter", stopSlideshow)
  heroSlider.addEventListener("mouseleave", startSlideshow)

  // Initialize the slider
  initSlider()
})
