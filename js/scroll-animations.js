// Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal animation
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal")

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight
      const elementTop = reveals[i].getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active")
      } else {
        reveals[i].classList.remove("active")
      }
    }
  }

  // Navbar scroll effect
  function handleNavbarScroll() {
    const header = document.querySelector(".header")
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  }

  // Initialize scroll animations
  window.addEventListener("scroll", revealOnScroll)
  window.addEventListener("scroll", handleNavbarScroll)

  // Trigger on initial load
  revealOnScroll()
  handleNavbarScroll()
})
