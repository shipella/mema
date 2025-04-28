// Main JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components
  initHeader()
  initHeroSlider()
  initCustomCursor()
  initParallax()
  initScrollReveal()
  initProductSlider()
  initAnimations()
  initModals()
  initCart()
  initChatbot()
  initWaveAnimation()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()
})

// Header Scroll Effect
function initHeader() {
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Mobile Menu Toggle
  const mobileToggle = document.querySelector(".mobile-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")
  const mobileClose = document.querySelector(".mobile-menu-close")
  const overlay = document.querySelector(".overlay")

  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    overlay.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    overlay.classList.remove("active")
    document.body.style.overflow = ""
  })

  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    overlay.classList.remove("active")
    document.body.style.overflow = ""
  })

  // Mobile Nav Links
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      overlay.classList.remove("active")
      document.body.style.overflow = ""
    })
  })
}

// Hero Slider
function initHeroSlider() {
  const heroSlider = document.querySelector(".hero-slider")
  if (!heroSlider) return

  const slides = heroSlider.querySelectorAll(".hero-slide")
  const prevBtn = heroSlider.querySelector(".hero-slider-nav.prev")
  const nextBtn = heroSlider.querySelector(".hero-slider-nav.next")
  const pagination = heroSlider.querySelector(".hero-slider-pagination")

  let currentSlide = 0
  const slideCount = slides.length
  let slideInterval

  // Create pagination dots
  if (pagination) {
    slides.forEach((_, index) => {
      const dot = document.createElement("div")
      dot.className = `hero-slider-dot ${index === 0 ? "active" : ""}`
      dot.addEventListener("click", () => {
        goToSlide(index)
        resetInterval()
      })
      pagination.appendChild(dot)
    })
  }

  // Initialize slider
  goToSlide(0)
  startInterval()

  // Previous slide
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide((currentSlide - 1 + slideCount) % slideCount)
      resetInterval()
    })
  }

  // Next slide
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide((currentSlide + 1) % slideCount)
      resetInterval()
    })
  }

  // Go to specific slide
  function goToSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active")
    })
    slides[index].classList.add("active")
    currentSlide = index

    // Update pagination
    const dots = pagination.querySelectorAll(".hero-slider-dot")
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index)
    })
  }

  // Auto slide
  function startInterval() {
    slideInterval = setInterval(() => {
      goToSlide((currentSlide + 1) % slideCount)
    }, 7000)
  }

  function resetInterval() {
    clearInterval(slideInterval)
    startInterval()
  }

  // Pause on hover
  heroSlider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval)
  })

  heroSlider.addEventListener("mouseleave", () => {
    startInterval()
  })
}

// Custom Cursor
function initCustomCursor() {
  const cursor = document.createElement("div")
  cursor.className = "cursor-dot"
  document.body.appendChild(cursor)

  const cursorFollower = document.createElement("div")
  cursorFollower.className = "cursor-outline"
  document.body.appendChild(cursorFollower)

  document.body.classList.add("custom-cursor-active")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`
    cursor.style.top = `${e.clientY}px`

    setTimeout(() => {
      cursorFollower.style.left = `${e.clientX}px`
      cursorFollower.style.top = `${e.clientY}px`
    }, 100)
  })

  // Add hover effect for interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, .btn, .slider-nav, .slider-dot, .nav-link, .package-tab, .chatbot-option, .social-link",
  )

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active")
      cursorFollower.classList.add("cursor-hover")
    })

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active")
      cursorFollower.classList.remove("cursor-hover")
    })
  })

  // Hide cursor when leaving window
  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0"
    cursorFollower.style.opacity = "0"
  })

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1"
    cursorFollower.style.opacity = "1"
  })

  // Disable custom cursor on mobile devices
  function checkMobile() {
    if (window.innerWidth <= 768) {
      document.body.classList.remove("custom-cursor-active")
      cursor.style.display = "none"
      cursorFollower.style.display = "none"
    } else {
      document.body.classList.add("custom-cursor-active")
      cursor.style.display = "block"
      cursorFollower.style.display = "block"
    }
  }

  // Check on load and resize
  checkMobile()
  window.addEventListener("resize", checkMobile)
}

// Parallax Effect
function initParallax() {
  // Hero Parallax
  const heroSection = document.querySelector(".hero")
  if (heroSection) {
    // Create particles
    createParticles(heroSection)

    // Mouse move parallax
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      const parallaxElements = document.querySelectorAll(".parallax")
      parallaxElements.forEach((el, index) => {
        const speed = 0.03 * (index + 1)
        const x = (mouseX - windowWidth / 2) * speed
        const y = (mouseY - windowHeight / 2) * speed

        el.style.transform = `translate(${x}px, ${y}px)`
      })
    })

    // Scroll parallax
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY

      const heroImage = document.querySelector(".hero-image")
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollY * 0.2}px)`
      }

      const particles = document.querySelectorAll(".particle")
      particles.forEach((particle, index) => {
        const speed = 0.05 * ((index % 3) + 1)
        particle.style.transform = `translateY(${scrollY * speed}px)`
      })
    })
  }
}

// Create Particles
function createParticles(container) {
  const particlesContainer = document.createElement("div")
  particlesContainer.className = "hero-particles"

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"

    // Random size
    const size = Math.random() * 15 + 5
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`

    // Random position
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`

    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1

    particlesContainer.appendChild(particle)
  }

  container.appendChild(particlesContainer)
}

// Scroll Reveal Animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal")

  function checkReveal() {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.classList.add("active")
      }
    })
  }

  // Initial check
  checkReveal()

  // Check on scroll
  window.addEventListener("scroll", checkReveal)
}

// Product Slider
function initProductSlider() {
  const productSlider = document.querySelector(".product-slider")
  if (!productSlider) return

  const slides = productSlider.querySelectorAll(".product-slide")
  const prevBtn = productSlider.querySelector(".slider-nav.prev")
  const nextBtn = productSlider.querySelector(".slider-nav.next")
  const dots = productSlider.querySelectorAll(".slider-dot")

  let currentSlide = 0
  const slideCount = slides.length

  // Initialize slider
  updateSlider()

  // Previous slide
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount
      updateSlider()
    })
  }

  // Next slide
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slideCount
      updateSlider()
    })
  }

  // Dots navigation
  if (dots) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentSlide = index
        updateSlider()
      })
    })
  }

  function updateSlider() {
    // Update slides
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.display = "block"
      } else {
        slide.style.display = "none"
      }
    })

    // Update dots
    if (dots) {
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add("active")
        } else {
          dot.classList.remove("active")
        }
      })
    }
  }
}

// Animations
function initAnimations() {
  // 3D Tilt Effect for Cards
  const cards = document.querySelectorAll(".product-card, .package-card, .benefit-card")

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const cardRect = card.getBoundingClientRect()
      const cardX = e.clientX - cardRect.left
      const cardY = e.clientY - cardRect.top

      const centerX = cardRect.width / 2
      const centerY = cardRect.height / 2

      const angleX = (cardY - centerY) / 20
      const angleY = (centerX - cardX) / 20

      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
    })
  })

  // Scroll to section animation
  const scrollLinks = document.querySelectorAll('a[href^="#"]')
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const targetId = link.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Wave Animation for Featured Product
function initWaveAnimation() {
  const featuredProduct = document.querySelector(".featured-product")

  if (featuredProduct) {
    // Create background elements
    const featuredProductBg = document.createElement("div")
    featuredProductBg.className = "featured-product-bg"

    const waveContainer = document.createElement("div")
    waveContainer.className = "wave-container"

    // Create waves
    for (let i = 1; i <= 3; i++) {
      const wave = document.createElement("div")
      wave.className = i > 1 ? `wave wave-${i}` : "wave"
      waveContainer.appendChild(wave)
    }

    // Insert elements at the beginning of featured product section
    featuredProduct.insertBefore(waveContainer, featuredProduct.firstChild)
    featuredProduct.insertBefore(featuredProductBg, featuredProduct.firstChild)

    // Add gradient animation class
    featuredProductBg.classList.add("gradient-bg")
  }
}

// Modals
function initModals() {
  // Login Modal
  const loginBtn = document.querySelector(".login-btn")
  const loginModal = document.querySelector(".login-modal")
  const loginClose = document.querySelector(".login-modal .modal-close")
  const overlay = document.querySelector(".overlay")

  if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", () => {
      loginModal.classList.add("active")
      overlay.classList.add("active")
      document.body.style.overflow = "hidden"
    })

    loginClose.addEventListener("click", () => {
      loginModal.classList.remove("active")
      overlay.classList.remove("active")
      document.body.style.overflow = ""
    })
  }

  // Cart Sidebar
  const cartBtn = document.querySelector(".cart-btn")
  const cartSidebar = document.querySelector(".cart-sidebar")
  const cartClose = document.querySelector(".cart-sidebar .cart-close")

  if (cartBtn && cartSidebar) {
    cartBtn.addEventListener("click", () => {
      cartSidebar.classList.add("active")
      overlay.classList.add("active")
      document.body.style.overflow = "hidden"
    })

    cartClose.addEventListener("click", () => {
      cartSidebar.classList.remove("active")
      overlay.classList.remove("active")
      document.body.style.overflow = ""
    })
  }

  // Close modals when clicking overlay
  if (overlay) {
    overlay.addEventListener("click", () => {
      if (loginModal) loginModal.classList.remove("active")
      if (cartSidebar) cartSidebar.classList.remove("active")
      overlay.classList.remove("active")
      document.body.style.overflow = ""
    })
  }
}

// Cart Functionality
function initCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  updateCartCount()
  updateCartDisplay()

  // Add to cart buttons
  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn")
  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id")
      const name = btn.getAttribute("data-name")
      const price = Number.parseFloat(btn.getAttribute("data-price"))

      // Check if product is already in cart
      const existingItem = cart.find((item) => item.id === id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        cart.push({
          id,
          name,
          price,
          quantity: 1,
        })
      }

      // Save cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart))

      // Update cart count and display
      updateCartCount()
      updateCartDisplay()

      // Show notification
      showNotification(`${name} added to cart!`, "success")

      // Open cart sidebar
      const cartSidebar = document.querySelector(".cart-sidebar")
      const overlay = document.querySelector(".overlay")

      if (cartSidebar) {
        cartSidebar.classList.add("active")
        overlay.classList.add("active")
        document.body.style.overflow = "hidden"
      }
    })
  })

  // Update cart count
  function updateCartCount() {
    const cartCount = document.querySelector(".cart-count")
    if (!cartCount) return

    const itemCount = cart.reduce((total, item) => total + item.quantity, 0)
    cartCount.textContent = itemCount

    if (itemCount > 0) {
      cartCount.style.display = "flex"
    } else {
      cartCount.style.display = "none"
    }
  }

  // Update cart display
  function updateCartDisplay() {
    const emptyCart = document.querySelector(".empty-cart")
    const cartItems = document.querySelector(".cart-items")
    const cartSummary = document.querySelector(".cart-summary")

    if (!emptyCart || !cartItems || !cartSummary) return

    if (cart.length === 0) {
      emptyCart.style.display = "flex"
      cartItems.style.display = "none"
      cartSummary.style.display = "none"
      return
    }

    emptyCart.style.display = "none"
    cartItems.style.display = "block"
    cartSummary.style.display = "block"

    // Clear cart items
    cartItems.innerHTML = ""

    // Add cart items
    cart.forEach((item) => {
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"

      cartItem.innerHTML = `
        <div class="cart-item-image">
          <img src="/placeholder.svg?height=80&width=80" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <p class="cart-item-price">${item.price.toLocaleString()} TZS</p>
        </div>
        <div class="cart-item-quantity">
          <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">
          <i class="fas fa-trash"></i>
        </button>
      `

      cartItems.appendChild(cartItem)
    })

    // Add event listeners to quantity buttons
    const decreaseBtns = document.querySelectorAll(".decrease-btn")
    const increaseBtns = document.querySelectorAll(".increase-btn")
    const removeBtns = document.querySelectorAll(".cart-item-remove")

    decreaseBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id")
        const item = cart.find((item) => item.id === id)

        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          cart = cart.filter((item) => item.id !== id)
        }

        localStorage.setItem("cart", JSON.stringify(cart))
        updateCartCount()
        updateCartDisplay()
      })
    })

    increaseBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id")
        const item = cart.find((item) => item.id === id)

        item.quantity += 1

        localStorage.setItem("cart", JSON.stringify(cart))
        updateCartCount()
        updateCartDisplay()
      })
    })

    removeBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id")
        cart = cart.filter((item) => item.id !== id)

        localStorage.setItem("cart", JSON.stringify(cart))
        updateCartCount()
        updateCartDisplay()
      })
    })

    // Update total
    const totalAmount = document.querySelector(".cart-total-value")
    if (totalAmount) {
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
      totalAmount.textContent = `${total.toLocaleString()} TZS`
    }
  }

  // Checkout form
  const checkoutForm = document.getElementById("checkout-form")
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(checkoutForm)
      const name = formData.get("name")

      // Clear cart
      cart = []
      localStorage.setItem("cart", JSON.stringify(cart))
      updateCartCount()
      updateCartDisplay()

      // Close cart sidebar
      const cartSidebar = document.querySelector(".cart-sidebar")
      const overlay = document.querySelector(".overlay")

      if (cartSidebar) {
        cartSidebar.classList.remove("active")
        overlay.classList.remove("active")
        document.body.style.overflow = ""
      }

      // Show success notification
      showNotification(`Thank you, ${name}! Your order has been placed.`, "success")
    })
  }
}

// Chatbot Functionality
function initChatbot() {
  const chatbotBtn = document.querySelector(".chatbot-button")
  const chatbotContainer = document.querySelector(".chatbot-container")
  const chatbotClose = document.querySelector(".chatbot-close")

  if (!chatbotBtn || !chatbotContainer) return

  chatbotBtn.addEventListener("click", () => {
    chatbotContainer.classList.toggle("active")
  })

  if (chatbotClose) {
    chatbotClose.addEventListener("click", () => {
      chatbotContainer.classList.remove("active")
    })
  }

  // Chatbot options
  const chatbotOptions = document.querySelectorAll(".chatbot-option")
  chatbotOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const text = option.textContent
      sendMessage(text, true)

      // Simple responses based on option
      setTimeout(() => {
        let response = ""

        switch (text.toLowerCase()) {
          case "package information":
            response =
              "We offer various 4G and 5G packages starting from 50,000 TZS per month. All packages come with unlimited data and no contract."
            break
          case "router setup":
            response =
              "Setting up your router is easy! Just plug it in, wait for the lights to stabilize, and connect to the WiFi network. The default WiFi name and password are printed on the bottom of your router."
            break
          case "billing questions":
            response =
              "We accept payments via M-Pesa, Tigo Pesa, Airtel Money, and bank transfer. Payments are due on the 1st of each month."
            break
          case "technical support":
            response =
              "If you're experiencing connectivity issues, try restarting your router. For persistent issues, please contact our technical support team at 0753221868."
            break
          default:
            response = "How else can I assist you today?"
        }

        sendMessage(response, false)
      }, 1000)
    })
  })

  // Send message function
  function sendMessage(message, isUser) {
    const chatMessages = document.querySelector(".chatbot-messages")
    if (!chatMessages) return

    const messageElement = document.createElement("div")
    messageElement.className = `chat-message ${isUser ? "user" : "bot"}`

    const now = new Date()
    const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`

    messageElement.innerHTML = `
      <div class="chat-bubble">${message}</div>
      <div class="chat-time">${timeString}</div>
    `

    chatMessages.appendChild(messageElement)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  // Send message on input
  const chatbotInput = document.querySelector(".chatbot-input input")
  const chatbotSend = document.querySelector(".chatbot-send")

  if (chatbotInput && chatbotSend) {
    chatbotSend.addEventListener("click", () => {
      const message = chatbotInput.value.trim()
      if (message) {
        sendMessage(message, true)
        chatbotInput.value = ""

        // Simple response
        setTimeout(() => {
          sendMessage("Thank you for your message. Our team will get back to you shortly.", false)
        }, 1000)
      }
    })

    chatbotInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const message = chatbotInput.value.trim()
        if (message) {
          sendMessage(message, true)
          chatbotInput.value = ""

          // Simple response
          setTimeout(() => {
            sendMessage("Thank you for your message. Our team will get back to you shortly.", false)
          }, 1000)
        }
      }
    })
  }
}

// Show Notification
function showNotification(message, type = "info") {
  // Create notification container if it doesn't exist
  let notificationContainer = document.querySelector(".notification-container")

  if (!notificationContainer) {
    notificationContainer = document.createElement("div")
    notificationContainer.className = "notification-container"
    document.body.appendChild(notificationContainer)
  }

  // Create notification
  const notification = document.createElement("div")
  notification.className = `notification ${type}`

  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
      <p>${message}</p>
    </div>
    <button class="notification-close">&times;</button>
  `

  // Add notification to container
  notificationContainer.appendChild(notification)

  // Add animation
  setTimeout(() => {
    notification.classList.add("show")
  }, 10)

  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show")

    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 5000)

  // Close notification on click
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    notification.classList.remove("show")

    setTimeout(() => {
      notification.remove()
    }, 300)
  })
}
