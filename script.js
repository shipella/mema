document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()

    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector(".mobile-menu-button")
    const closeMenuButton = document.querySelector(".close-menu-button")
    const mobileMenu = document.querySelector(".mobile-menu")
    const overlay = document.querySelector(".overlay")
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

    function openMobileMenu() {
        mobileMenu.classList.add("active")
        overlay.classList.add("active")
        document.body.style.overflow = "hidden"
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove("active")
        overlay.classList.remove("active")
        document.body.style.overflow = ""
    }

    mobileMenuButton.addEventListener("click", openMobileMenu)
    closeMenuButton.addEventListener("click", closeMobileMenu)
    overlay.addEventListener("click", closeMobileMenu)

    mobileNavLinks.forEach( (link) => {
        link.addEventListener("click", closeMobileMenu)
    }
    )

    // Language Switcher
    const languageButton = document.querySelector(".language-button")
    const languageDropdown = document.querySelector(".language-dropdown")
    const languageOptions = document.querySelectorAll(".language-option")
    const currentLanguage = document.querySelector(".current-language")

    // Mobile Language Switcher
    const languageButtonMobile = document.querySelector(".language-button-mobile")
    const mobileLanguageOptions = document.querySelector(".mobile-language-options")
    const mobileLangOptions = document.querySelectorAll(".mobile-language-option")
    const currentLanguageMobile = document.querySelector(".current-language-mobile")

    // Language translations
    const translations = {
        en: {
            // Navigation
            Products: "Products",
            Packages: "Packages",
            Contact: "Contact",
            "Speed Test": "Speed Test",
            Login: "Login",

            // Hero Section
            "Experience Lightning-Fast 5G Speeds": "Experience Lightning-Fast 5G Speeds",
            "Up to 20 Mbps": "Up to 20 Mbps",
            "Up to 350 Mbps": "Up to 350 Mbps",
            "4K Movie:": "4K Movie:",
            "Game Download:": "Game Download:",
            "Unlimited Internet Service for Your Home & Business": "Unlimited Internet Service for Your Home & Business",
            "Experience lightning-fast 5G connectivity with Vodacom Tanzania. Play games, watch TV, and enjoy unlimited entertainment at affordable prices.": "Experience lightning-fast 5G connectivity with Vodacom Tanzania. Play games, watch TV, and enjoy unlimited entertainment at affordable prices.",
            "Explore Packages": "Explore Packages",
            "Contact Sales": "Contact Sales",
            "Only 240,000 TZS": "Only 240,000 TZS",

            // Featured Product
            "Featured Product": "Featured Product",
            "Experience the future of connectivity with our premium 5G router": "Experience the future of connectivity with our premium 5G router",
            "Ultra-fast 5G connectivity": "Ultra-fast 5G connectivity",
            "Wide coverage range": "Wide coverage range",
            "Easy setup and management": "Easy setup and management",
            "Multiple device connectivity": "Multiple device connectivity",
            "Security deposit: 2 months": "Security deposit: 2 months",
            "Add to Cart": "Add to Cart",
            "Best Seller": "Best Seller",

            // Products Section
            "Our Products": "Our Products",
            "Choose from our range of high-quality routers and business solutions": "Choose from our range of high-quality routers and business solutions",
            "5G Router": "5G Router",
            "High-speed 5G router with wide coverage. Contract-free with 2 months security deposit.": "High-speed 5G router with wide coverage. Contract-free with 2 months security deposit.",
            "Starting from 120,000 TZS": "Starting from 120,000 TZS",
            "4G Router": "4G Router",
            "Reliable 4G router for stable connectivity. Contract-free with 2 months security deposit.": "Reliable 4G router for stable connectivity. Contract-free with 2 months security deposit.",
            "Starting from 115,000 TZS": "Starting from 115,000 TZS",
            "Master Airtime": "Master Airtime",
            "Perfect solution for small businesses and corporate clients to manage airtime distribution.": "Perfect solution for small businesses and corporate clients to manage airtime distribution.",
            "Custom pricing": "Custom pricing",
            "Bulk SMS": "Bulk SMS",
            "Affordable web-based solution to send multiple SMS to multiple recipients at once.": "Affordable web-based solution to send multiple SMS to multiple recipients at once.",
            "Pay per use": "Pay per use",

            // Packages Section
            "Unlimited Packages": "Unlimited Packages",
            "Enjoy our unlimited offers with our 5G coverage near your home and office. Play games, watch TV with super speed internet at affordable prices.": "Enjoy our unlimited offers with our 5G coverage near your home and office. Play games, watch TV with super speed internet at affordable prices.",
            "Popular Choice": "Popular Choice",
            "Unlimited data": "Unlimited data",
            "24/7 support": "24/7 support",
            "No contract": "No contract",
            "Select Package": "Select Package",

            // Benefits Section
            "Why Choose Us": "Why Choose Us",
            "We ensure unlimited internet at an affordable price guaranteeing your family entertainment": "We ensure unlimited internet at an affordable price guaranteeing your family entertainment",
            "Super Fast Speed": "Super Fast Speed",
            "Experience lightning-fast internet speeds with our 5G technology": "Experience lightning-fast internet speeds with our 5G technology",
            "Affordable Pricing": "Affordable Pricing",
            "We offer value for your money with competitive pricing": "We offer value for your money with competitive pricing",
            "Reliable Service": "Reliable Service",
            "Consistent and dependable internet connection for your needs": "Consistent and dependable internet connection for your needs",
            "24/7 Support": "24/7 Support",
            "Our dedicated team is always ready to assist you": "Our dedicated team is always ready to assist you",

            // CTA Section
            "Ready to Experience Unlimited Internet?": "Ready to Experience Unlimited Internet?",
            "Get started today with our high-speed internet packages and transform your online experience.": "Get started today with our high-speed internet packages and transform your online experience.",
            "Order Now": "Order Now",
            "Contact Sales Team": "Contact Sales Team",

            // Contact Section
            "Let Us Call You Back": "Let Us Call You Back",
            "Leave your details and we'll get in touch with you as soon as possible.": "Leave your details and we'll get in touch with you as soon as possible.",
            "Get in Touch": "Get in Touch",
            "Business Hours": "Business Hours",
            "Monday - Friday: 8:00 AM - 6:00 PM": "Monday - Friday: 8:00 AM - 6:00 PM",
            "Saturday: 9:00 AM - 4:00 PM": "Saturday: 9:00 AM - 4:00 PM",
            "Sunday: Closed": "Sunday: Closed",
            "Request a Callback": "Request a Callback",
            "Full Name": "Full Name",
            "Your name": "Your name",
            Location: "Location",
            "Your location": "Your location",
            "Phone Number": "Phone Number",
            "Your phone number": "Your phone number",
            "Email Address": "Email Address",
            "Your email": "Your email",
            "Order/Message": "Order/Message",
            "Tell us what you're interested in": "Tell us what you're interested in",
            "Call Me Back": "Call Me Back",

            // Office Location
            "Our Office": "Our Office",
            "Visit us at our office location for in-person assistance": "Visit us at our office location for in-person assistance",
            "Vodacom Tanzania - MEMA Holdings": "Vodacom Tanzania - MEMA Holdings",
            "We are located at Dora Tower, Bamaga Sheli, Ground Floor": "We are located at Dora Tower, Bamaga Sheli, Ground Floor",
            "View on Google Maps": "View on Google Maps",

            // Footer
            "Partner: MEMA Holdings": "Partner: MEMA Holdings",
            Products: "Products",
            "5G Routers": "5G Routers",
            "4G Routers": "4G Routers",
            "Master Airtime": "Master Airtime",
            "Bulk SMS": "Bulk SMS",
            Packages: "Packages",
            "4G Packages": "4G Packages",
            "5G Packages": "5G Packages",
            "Business Solutions": "Business Solutions",
            "Enterprise Plans": "Enterprise Plans",
            Support: "Support",
            "Contact Us": "Contact Us",
            FAQs: "FAQs",
            "Terms & Conditions": "Terms & Conditions",
            "Privacy Policy": "Privacy Policy",
            "All rights reserved.": "All rights reserved.",

            // Chatbot
            "Vodacom Assistant": "Vodacom Assistant",
            "Hello! I'm your Vodacom assistant. How can I help you today?": "Hello! I'm your Vodacom assistant. How can I help you today?",
            "Package Information": "Package Information",
            "Router Setup": "Router Setup",
            "Billing Questions": "Billing Questions",
            "Technical Support": "Technical Support",
            "Type your message here...": "Type your message here...",
        },
        sw: {
            // Navigation
            Products: "Bidhaa",
            Packages: "Vifurushi",
            Contact: "Wasiliana Nasi",
            "Speed Test": "Pima Kasi",
            Login: "Ingia",

            // Hero Section
            "Experience Lightning-Fast 5G Speeds": "Pata Kasi ya Ajabu ya 5G",
            "Up to 20 Mbps": "Hadi 20 Mbps",
            "Up to 350 Mbps": "Hadi 350 Mbps",
            "4K Movie:": "Filamu ya 4K:",
            "Game Download:": "Kupakua Mchezo:",
            "Unlimited Internet Service for Your Home & Business": "Huduma ya Intaneti Isiyokoma kwa Nyumba na Biashara Yako",
            "Experience lightning-fast 5G connectivity with Vodacom Tanzania. Play games, watch TV, and enjoy unlimited entertainment at affordable prices.": "Pata mtandao wa kasi wa 5G na Vodacom Tanzania. Cheza michezo, tazama TV, na furahia burudani zisizo na kikomo kwa bei nafuu.",
            "Explore Packages": "Angalia Vifurushi",
            "Contact Sales": "Wasiliana na Mauzo",
            "Only 240,000 TZS": "TZS 240,000 Tu",

            // Featured Product
            "Featured Product": "Bidhaa Maarufu",
            "Experience the future of connectivity with our premium 5G router": "Pata mtandao wa kisasa na router yetu bora ya 5G",
            "Ultra-fast 5G connectivity": "Mtandao wa kasi wa 5G",
            "Wide coverage range": "Upeo mpana wa mtandao",
            "Easy setup and management": "Rahisi kuweka na kutumia",
            "Multiple device connectivity": "Unganisha vifaa vingi",
            "Security deposit: 2 months": "Amana: Miezi 2",
            "Add to Cart": "Ongeza kwenye Kikapu",
            "Best Seller": "Inauzwa Zaidi",

            // Products Section
            "Our Products": "Bidhaa Zetu",
            "Choose from our range of high-quality routers and business solutions": "Chagua kutoka kwa router zetu bora na suluhisho za biashara",
            "5G Router": "Router ya 5G",
            "High-speed 5G router with wide coverage. Contract-free with 2 months security deposit.": "Router ya kasi ya 5G na mtandao mpana. Hakuna mkataba na amana ya miezi 2.",
            "Starting from 120,000 TZS": "Kuanzia TZS 120,000",
            "4G Router": "Router ya 4G",
            "Reliable 4G router for stable connectivity. Contract-free with 2 months security deposit.": "Router ya 4G inayotegemewa kwa mtandao thabiti. Hakuna mkataba na amana ya miezi 2.",
            "Starting from 115,000 TZS": "Kuanzia TZS 115,000",
            "Master Airtime": "Master Airtime",
            "Perfect solution for small businesses and corporate clients to manage airtime distribution.": "Suluhisho kamili kwa biashara ndogo na wateja wa kampuni kusimamia usambazaji wa muda wa maongezi.",
            "Custom pricing": "Bei maalum",
            "Bulk SMS": "SMS kwa Wingi",
            "Affordable web-based solution to send multiple SMS to multiple recipients at once.": "Suluhisho la bei nafuu la kutuma SMS nyingi kwa wapokeaji wengi kwa wakati mmoja.",
            "Pay per use": "Lipa unapotumia",

            // Packages Section
            "Unlimited Packages": "Vifurushi Visivyo na Kikomo",
            "Enjoy our unlimited offers with our 5G coverage near your home and office. Play games, watch TV with super speed internet at affordable prices.": "Furahia ofa zetu zisizo na kikomo na mtandao wetu wa 5G karibu na nyumba na ofisi yako. Cheza michezo, tazama TV kwa intaneti ya kasi kwa bei nafuu.",
            "Popular Choice": "Chaguo Maarufu",
            "Unlimited data": "Data isiyokoma",
            "24/7 support": "Msaada wa saa 24/7",
            "No contract": "Hakuna mkataba",
            "Select Package": "Chagua Kifurushi",

            // Benefits Section
            "Why Choose Us": "Kwa Nini Uchague Sisi",
            "We ensure unlimited internet at an affordable price guaranteeing your family entertainment": "Tunahakikisha intaneti isiyokoma kwa bei nafuu inayohakikisha burudani kwa familia yako",
            "Super Fast Speed": "Kasi ya Juu Sana",
            "Experience lightning-fast internet speeds with our 5G technology": "Pata kasi ya intaneti ya ajabu na teknolojia yetu ya 5G",
            "Affordable Pricing": "Bei Nafuu",
            "We offer value for your money with bei shindani": "Tunatoa thamani ya pesa yako kwa bei shindani",
            "Reliable Service": "Huduma Inayotegemewa",
            "Consistent and dependable internet connection for your needs": "Muunganisho wa intaneti thabiti na wa kutegemewa kwa mahitaji yako",
            "24/7 Support": "Msaada wa 24/7",
            "Our dedicated team is always ready to assist you": "Timu yetu inayojitoa iko tayari kukusaidia",

            // CTA Section
            "Ready to Experience Unlimited Internet?": "Uko Tayari Kupata Intaneti Isiyokoma?",
            "Get started today with our high-speed internet packages and transform your online experience.": "Anza leo na vifurushi vyetu vya intaneti ya kasi na badilisha uzoefu wako wa mtandaoni.",
            "Order Now": "Agiza Sasa",
            "Contact Sales Team": "Wasiliana na Timu ya Mauzo",

            // Contact Section
            "Let Us Call You Back": "Tupigie",
            "Leave your details and we'll get in touch with you as soon as possible.": "Acha maelezo yako na tutawasiliana nawe haraka iwezekanavyo.",
            "Get in Touch": "Wasiliana Nasi",
            "Business Hours": "Saa za Kazi",
            "Monday - Friday: 8:00 AM - 6:00 PM": "Jumatatu - Ijumaa: 8:00 AM - 6:00 PM",
            "Saturday: 9:00 AM - 4:00 PM": "Jumamosi: 9:00 AM - 4:00 PM",
            "Sunday: Closed": "Jumapili: Imefungwa",
            "Request a Callback": "Omba Tupigie",
            "Full Name": "Jina Kamili",
            "Your name": "Jina lako",
            Location: "Mahali",
            "Your location": "Mahali ulipo",
            "Phone Number": "Namba ya Simu",
            "Your phone number": "Namba yako ya simu",
            "Email Address": "Barua Pepe",
            "Your email": "Barua pepe yako",
            "Order/Message": "Agizo/Ujumbe",
            "Tell us what you're interested in": "Tuambie unachopenda",
            "Call Me Back": "Nipigie",

            // Office Location
            "Our Office": "Ofisi Yetu",
            "Visit us at our office location for in-person assistance": "Tembelea ofisi yetu kwa msaada wa ana kwa ana",
            "Vodacom Tanzania - MEMA Holdings": "Vodacom Tanzania - MEMA Holdings",
            "We are located at Dora Tower, Bamaga Sheli, Ghorofa ya Chini": "Tunapatikana katika Dora Tower, Bamaga Sheli, Ghorofa ya Chini",
            "View on Google Maps": "Tazama kwenye Google Maps",

            // Footer
            "Partner: MEMA Holdings": "Mshirika: MEMA Holdings",
            Products: "Bidhaa",
            "5G Routers": "Router za 5G",
            "4G Routers": "Router za 4G",
            "Master Airtime": "Master Airtime",
            "Bulk SMS": "SMS kwa Wingi",
            Packages: "Vifurushi",
            "4G Packages": "Vifurushi vya 4G",
            "5G Packages": "Vifurushi vya 5G",
            "Business Solutions": "Suluhisho za Biashara",
            "Enterprise Plans": "Mipango ya Kampuni",
            Support: "Msaada",
            "Contact Us": "Wasiliana Nasi",
            FAQs: "Maswali",
            "Terms & Conditions": "Sheria na Masharti",
            "Privacy Policy": "Sera ya Faragha",
            "All rights reserved.": "Haki zote zimehifadhiwa.",

            // Chatbot
            "Vodacom Assistant": "Msaidizi wa Vodacom",
            "Hello! I'm your Vodacom assistant. How can I help you today?": "Habari! Mimi ni msaidizi wako wa Vodacom. Nawezaje kukusaidia leo?",
            "Package Information": "Maelezo ya Vifurushi",
            "Router Setup": "Kuweka Router",
            "Billing Questions": "Maswali ya Malipo",
            "Technical Support": "Msaada wa Kiufundi",
            "Type your message here...": "Andika ujumbe wako hapa...",
        },
    }

    // Function to change language
    function changeLanguage(lang) {
        // Store the selected language in localStorage
        localStorage.setItem("language", lang)

        // Update the current language display
        if (currentLanguage) {
            currentLanguage.textContent = lang.toUpperCase()
        }
        if (currentLanguageMobile) {
            currentLanguageMobile.textContent = lang === "en" ? "English" : "Kiswahili"
        }

        // Update active class on language options
        languageOptions.forEach( (option) => {
            if (option.getAttribute("data-lang") === lang) {
                option.classList.add("active")
            } else {
                option.classList.remove("active")
            }
        }
        )

        mobileLangOptions.forEach( (option) => {
            if (option.getAttribute("data-lang") === lang) {
                option.classList.add("active")
            } else {
                option.classList.remove("active")
            }
        }
        )

        // Translate the page
        translatePage(lang)
    }

    // Function to translate the page
    function translatePage(lang) {
        const elements = document.querySelectorAll("[data-translate]")

        elements.forEach( (element) => {
            const key = element.getAttribute("data-translate")
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key]
            }
        }
        )

        // Add data-translate attributes to all translatable elements
        if (!document.body.classList.contains("translation-initialized")) {
            addTranslationAttributes()
            document.body.classList.add("translation-initialized")
        }
    }

    // Function to add data-translate attributes to all translatable elements
    function addTranslationAttributes() {
        // Add to all text nodes that match translation keys
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false)

        const nodesToProcess = []
        let node
        while ((node = walker.nextNode())) {
            if (node.nodeValue.trim() && node.parentElement.tagName !== "SCRIPT" && node.parentElement.tagName !== "STYLE") {
                nodesToProcess.push(node)
            }
        }

        nodesToProcess.forEach( (textNode) => {
            const text = textNode.nodeValue.trim()
            if (text && translations.en[text]) {
                const span = document.createElement("span")
                span.setAttribute("data-translate", text)
                span.textContent = text
                textNode.parentNode.replaceChild(span, textNode)
            }
        }
        )

        // Add to elements with specific attributes (placeholder, alt, etc.)
        const inputElements = document.querySelectorAll("input[placeholder], textarea[placeholder]")
        inputElements.forEach( (el) => {
            const placeholder = el.getAttribute("placeholder")
            if (placeholder && translations.en[placeholder]) {
                el.setAttribute("data-translate-placeholder", placeholder)
            }
        }
        )
    }

    // Initialize language from localStorage or default to English
    const savedLanguage = localStorage.getItem("language") || "en"
    changeLanguage(savedLanguage)

    // Language dropdown toggle
    if (languageButton) {
        languageButton.addEventListener("click", () => {
            languageDropdown.classList.toggle("active")
        }
        )
    }

    // Language option selection
    languageOptions.forEach( (option) => {
        option.addEventListener("click", () => {
            const lang = option.getAttribute("data-lang")
            changeLanguage(lang)
            languageDropdown.classList.remove("active")
        }
        )
    }
    )

    // Mobile language dropdown toggle
    if (languageButtonMobile) {
        languageButtonMobile.addEventListener("click", () => {
            mobileLanguageOptions.classList.toggle("active")
        }
        )
    }

    // Mobile language option selection
    mobileLangOptions.forEach( (option) => {
        option.addEventListener("click", () => {
            const lang = option.getAttribute("data-lang")
            changeLanguage(lang)
            mobileLanguageOptions.classList.remove("active")
        }
        )
    }
    )

    // Close language dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (languageButton && !languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove("active")
        }
    }
    )

    // Login Modal
    const loginButton = document.querySelector(".login-button")
    const loginButtonMobile = document.querySelector(".login-button-mobile")
    const closeModalButton = document.querySelector(".close-modal")
    const loginModal = document.querySelector(".login-modal")

    function openLoginModal() {
        loginModal.classList.add("active")
        overlay.classList.add("active")
        document.body.style.overflow = "hidden"
    }

    function closeLoginModal() {
        loginModal.classList.remove("active")
        overlay.classList.remove("active")
        document.body.style.overflow = ""
    }

    if (loginButton) {
        loginButton.addEventListener("click", openLoginModal)
    }

    if (loginButtonMobile) {
        loginButtonMobile.addEventListener("click", () => {
            closeMobileMenu()
            setTimeout(openLoginModal, 300)
        }
        )
    }

    if (closeModalButton) {
        closeModalButton.addEventListener("click", closeLoginModal)
    }

    // Cart Sidebar
    const cartButton = document.querySelector(".cart-button")
    const cartButtonMobile = document.querySelector(".cart-button-mobile")
    const closeCartButton = document.querySelector(".close-cart")
    const cartSidebar = document.querySelector(".cart-sidebar")
    const emptyCart = document.querySelector(".empty-cart")
    const cartItemsContainer = document.querySelector(".cart-items-container")
    const cartItems = document.querySelector(".cart-items")
    const totalAmount = document.querySelector(".total-amount")

    function openCartSidebar() {
        cartSidebar.classList.add("active")
        overlay.classList.add("active")
        document.body.style.overflow = "hidden"
    }

    function closeCartSidebar() {
        cartSidebar.classList.remove("active")
        overlay.classList.remove("active")
        document.body.style.overflow = ""
    }

    if (cartButton) {
        cartButton.addEventListener("click", openCartSidebar)
    }

    if (cartButtonMobile) {
        cartButtonMobile.addEventListener("click", () => {
            closeMobileMenu()
            setTimeout(openCartSidebar, 300)
        }
        )
    }

    if (closeCartButton) {
        closeCartButton.addEventListener("click", closeCartSidebar)
    }

    // Video Modal
    const videoModal = document.querySelector(".video-modal")
    const closeVideoModalButton = document.querySelector(".close-video-modal")
    const youtubeIframe = document.getElementById("youtube-iframe")
    const watchVideoButtons = document.querySelectorAll(".watch-video-btn")

    function openVideoModal(videoUrl) {
        // Extract YouTube video ID and create embed URL
        let embedUrl

        if (videoUrl.includes("youtube.com/shorts")) {
            // Handle YouTube shorts
            const videoId = videoUrl.split("/").pop()
            embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
        } else if (videoUrl.includes("youtu.be")) {
            // Handle youtu.be short links
            const videoId = videoUrl.split("/").pop()
            embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
        } else if (videoUrl.includes("youtube.com/watch")) {
            // Handle regular YouTube links
            const urlParams = new URLSearchParams(new URL(videoUrl).search)
            const videoId = urlParams.get("v")
            embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
        } else {
            // Default case
            embedUrl = videoUrl
        }

        youtubeIframe.src = embedUrl
        videoModal.classList.add("active")
        document.body.style.overflow = "hidden"
    }

    function closeVideoModal() {
        videoModal.classList.remove("active")
        document.body.style.overflow = ""
        youtubeIframe.src = ""
    }

    watchVideoButtons.forEach( (button) => {
        button.addEventListener("click", () => {
            const videoUrl = button.getAttribute("data-url")
            openVideoModal(videoUrl)
        }
        )
    }
    )

    if (closeVideoModalButton) {
        closeVideoModalButton.addEventListener("click", closeVideoModal)
    }

    // Close video modal when clicking outside
    videoModal.addEventListener("click", (e) => {
        if (e.target === videoModal) {
            closeVideoModal()
        }
    }
    )

    // Cart functionality
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    updateCartCount()
    updateCartDisplay()

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn")

    addToCartButtons.forEach( (button) => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-id")
            const productName = button.getAttribute("data-name")
            const productPrice = Number.parseInt(button.getAttribute("data-price"))

            // Check if product is already in cart
            const existingItem = cart.find( (item) => item.id === productId)

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1,
                })
            }

            // Save cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart))

            // Update cart count and display
            updateCartCount()
            updateCartDisplay()

            // Show notification
            showToast("success", "Item Added", `${productName} has been added to your cart.`)
        }
        )
    }
    )

    // Update cart count
    function updateCartCount() {
        const cartCount = document.querySelector(".cart-count")
        const itemCount = cart.reduce( (total, item) => total + item.quantity, 0)

        if (cartCount) {
            cartCount.textContent = itemCount

            if (itemCount > 0) {
                cartCount.style.display = "flex"
            } else {
                cartCount.style.display = "none"
            }
        }
    }

    // Update cart display
    function updateCartDisplay() {
        if (cart.length === 0) {
            if (emptyCart)
                emptyCart.style.display = "flex"
            if (cartItemsContainer)
                cartItemsContainer.style.display = "none"
            return
        }

        if (emptyCart)
            emptyCart.style.display = "none"
        if (cartItemsContainer)
            cartItemsContainer.style.display = "block"

        // Clear cart items
        if (cartItems) {
            cartItems.innerHTML = ""

            // Add cart items
            cart.forEach( (item) => {
                const cartItem = document.createElement("div")
                cartItem.className = "cart-item"
                cartItem.innerHTML = `
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${item.price.toLocaleString()} TZS</div>
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
            }
            )

            // Add event listeners to quantity buttons
            document.querySelectorAll(".decrease-btn").forEach( (button) => {
                button.addEventListener("click", () => {
                    const id = button.getAttribute("data-id")
                    const item = cart.find( (item) => item.id === id)

                    if (item.quantity > 1) {
                        item.quantity -= 1
                    } else {
                        cart = cart.filter( (item) => item.id !== id)
                    }

                    localStorage.setItem("cart", JSON.stringify(cart))
                    updateCartCount()
                    updateCartDisplay()
                }
                )
            }
            )

            document.querySelectorAll(".increase-btn").forEach( (button) => {
                button.addEventListener("click", () => {
                    const id = button.getAttribute("data-id")
                    const item = cart.find( (item) => item.id === id)

                    item.quantity += 1

                    localStorage.setItem("cart", JSON.stringify(cart))
                    updateCartCount()
                    updateCartDisplay()
                }
                )
            }
            )

            document.querySelectorAll(".cart-item-remove").forEach( (button) => {
                button.addEventListener("click", () => {
                    const id = button.getAttribute("data-id")
                    cart = cart.filter( (item) => item.id !== id)

                    localStorage.setItem("cart", JSON.stringify(cart))
                    updateCartCount()
                    updateCartDisplay()
                }
                )
            }
            )
        }

        // Update total amount
        if (totalAmount) {
            const total = cart.reduce( (sum, item) => sum + item.price * item.quantity, 0)
            totalAmount.textContent = `${total.toLocaleString()} TZS`
        }
    }

    // Checkout form submission
    const checkoutForm = document.getElementById("checkout-form")

    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault()

            const name = document.getElementById("checkout-name").value
            const location = document.getElementById("checkout-location").value
            const phone = document.getElementById("checkout-phone").value
            const email = document.getElementById("checkout-email").value

            // Create CSV data
            let csvContent = "Name,Location,Phone,Email,Product,Quantity,Price\n"

            cart.forEach( (item) => {
                csvContent += `${name},${location},${phone},${email},${item.name},${item.quantity},${item.price}\n`
            }
            )

            // Send email with EmailJS
            const templateParams = {
                to_email: "holdingsmema@gmail.com",
                from_name: name,
                from_email: email,
                subject: "New Order from Vodacom Website",
                message: `
Customer Information:
Name: ${name}
Location: ${location}
Phone: ${phone}
Email: ${email}

Order Details:
${cart.map( (item) => `${item.name} x${item.quantity} - ${item.price.toLocaleString()} TZS`).join("\n")}

Total: ${cart.reduce( (sum, item) => sum + item.price * item.quantity, 0).toLocaleString()} TZS
        `,
                csv_data: csvContent,
            }

            // Ensure emailjs is available before using it
            if (typeof emailjs !== "undefined") {
                emailjs.send("service_id", "template_id", templateParams).then( (response) => {
                    console.log("SUCCESS!", response.status, response.text)

                    // Clear cart
                    cart = []
                    localStorage.setItem("cart", JSON.stringify(cart))
                    updateCartCount()
                    updateCartDisplay()

                    // Close cart sidebar
                    closeCartSidebar()

                    // Show success message
                    showToast("success", "Order Submitted", "Your order has been submitted successfully. We will contact you shortly.", )
                }
                , (error) => {
                    console.log("FAILED...", error)
                    showToast("error", "Submission Failed", "There was an error submitting your order. Please try again or contact us directly.", )
                }
                , )
            } else {
                console.error("EmailJS is not initialized. Please check your EmailJS setup.")
                showToast("error", "Submission Failed", "Email service is not available. Please try again later.")
            }
        }
        )
    }

    // Callback form submission
    const callbackForm = document.getElementById("callback-form")

    if (callbackForm) {
        callbackForm.addEventListener("submit", (e) => {
            e.preventDefault()

            const name = document.getElementById("callback-name").value
            const location = document.getElementById("callback-location").value
            const phone = document.getElementById("callback-phone").value
            const email = document.getElementById("callback-email").value
            const message = document.getElementById("callback-message").value

            // Create CSV data
            let csvContent = "Name,Location,Phone,Email,Message\n"
            csvContent += `${name},${location},${phone},${email},${message.replace(/,/g, ";")}\n`

            // Send email with EmailJS
            const templateParams = {
                to_email: "holdingsmema@gmail.com",
                from_name: name,
                from_email: email,
                subject: "Callback Request from Vodacom Website",
                message: `
Customer Information:
Name: ${name}
Location: ${location}
Phone: ${phone}
Email: ${email}

Message:
${message}
        `,
                csv_data: csvContent,
            }

            // Ensure emailjs is available before using it
            if (typeof emailjs !== "undefined") {
                emailjs.send("service_id", "template_id", templateParams).then( (response) => {
                    console.log("SUCCESS!", response.status, response.text)

                    // Reset form
                    callbackForm.reset()

                    // Show success message
                    showToast("success", "Request Submitted", "Your callback request has been submitted successfully. We will contact you shortly.", )
                }
                , (error) => {
                    console.log("FAILED...", error)
                    showToast("error", "Submission Failed", "There was an error submitting your request. Please try again or contact us directly.", )
                }
                , )
            } else {
                console.error("EmailJS is not initialized. Please check your EmailJS setup.")
                showToast("error", "Submission Failed", "Email service is not available. Please try again later.")
            }
        }
        )
    }

    // Toast notification system
    function showToast(type, title, message) {
        const toastContainer = document.querySelector(".toast-container")

        if (!toastContainer)
            return

        const toast = document.createElement("div")
        toast.className = `toast ${type}`

        toast.innerHTML = `
    <div class="toast-icon">
      <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close">&times;</button>
    <div class="toast-progress"></div>
  `

        toastContainer.appendChild(toast)

        // Auto remove toast after 3 seconds
        setTimeout( () => {
            toast.remove()
        }
        , 3000)

        // Close toast on click
        toast.querySelector(".toast-close").addEventListener("click", () => {
            toast.remove()
        }
        )
    }

    // Modern Speed Indicator Animation
    const speedLabels = document.querySelectorAll(".speed-label-4g, .speed-label-5g")
    const speedValue = document.querySelector(".speed-value")
    const downloadTimes = document.querySelectorAll(".download-time")

    function updateSpeedIndicator() {
        // Get the current width of the speed bar to determine if we're showing 4G or 5G speeds
        const speedBar = document.querySelector(".modern-speed-bar")
        if (!speedBar)
            return

        const speedBarWidth = Number.parseFloat(getComputedStyle(speedBar).width)
        const speedBarMaxWidth = Number.parseFloat(getComputedStyle(speedBar.parentElement).width)
        const speedPercentage = (speedBarWidth / speedBarMaxWidth) * 100

        // Update the speed value text based on the current animation state
        if (speedPercentage > 60) {
            if (speedValue)
                speedValue.textContent = "350 Mbps"
            if (downloadTimes && downloadTimes.length >= 2) {
                downloadTimes[0].textContent = "2 min"
                downloadTimes[1].textContent = "5 min"
            }

            // Update active label
            speedLabels.forEach( (label) => {
                if (label.classList.contains("speed-label-5g")) {
                    label.classList.add("speed-label-active")
                } else {
                    label.classList.remove("speed-label-active")
                }
            }
            )
        } else {
            if (speedValue)
                speedValue.textContent = "100 Mbps"
            if (downloadTimes && downloadTimes.length >= 2) {
                downloadTimes[0].textContent = "7 min"
                downloadTimes[1].textContent = "18 min"
            }

            // Update active label
            speedLabels.forEach( (label) => {
                if (label.classList.contains("speed-label-4g")) {
                    label.classList.add("speed-label-active")
                } else {
                    label.classList.remove("speed-label-active")
                }
            }
            )
        }
    }

    // Run the update function periodically
    if (document.querySelector(".modern-speed-bar")) {
        setInterval(updateSpeedIndicator, 100)
    }

    // Chatbot functionality
    const chatbotButton = document.querySelector(".chatbot-button")
    const chatbotContainer = document.querySelector(".chatbot-container")
    const chatbotClose = document.querySelector(".chatbot-close")
    const chatbotMessages = document.querySelector(".chatbot-messages")
    const chatbotInput = document.querySelector(".chatbot-input input")
    const chatbotSend = document.querySelector(".chatbot-send")
    const chatbotOptions = document.querySelectorAll(".chatbot-option")

    // FAQ data for the chatbot
    const faqData = {
        "package information": ["We offer various 4G and 5G packages starting from 70,000 TZS per month.", "All our packages come with unlimited data and no contract.", "Our most popular package is the 5G Basic at 120,000 TZS per month with speeds up to 30Mbps.", ],
        "router setup": ["Setting up your router is easy! Just plug it in, wait for the lights to stabilize, and connect to the WiFi network.", "The default WiFi name and password are printed on the bottom of your router.", "For more detailed instructions, please refer to the manual that came with your router.", ],
        "billing questions": ["We accept payments via M-Pesa, Tigo Pesa, Airtel Money, and bank transfer.", "Payments are due on the 1st of each month.", "For any billing issues, please contact our support team at 0753221868.", ],
        "technical support": ["If you're experiencing connectivity issues, try restarting your router.", "Make sure your router is placed in an open area away from walls and metal objects.", "For persistent issues, please contact our technical support team at 0753221868.", ],
    }

    // Toggle chatbot
    if (chatbotButton) {
        chatbotButton.addEventListener("click", () => {
            chatbotContainer.classList.toggle("active")
        }
        )
    }

    if (chatbotClose) {
        chatbotClose.addEventListener("click", () => {
            chatbotContainer.classList.remove("active")
        }
        )
    }

    // Send message function
    function sendMessage(message, isUser=true) {
        const messageElement = document.createElement("div")
        messageElement.className = `chat-message ${isUser ? "user" : "bot"}`

        const now = new Date()
        const timeString = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`

        messageElement.innerHTML = `
    <div class="chat-bubble">${message}</div>
    <div class="chat-time">${timeString}</div>
  `

        chatbotMessages.appendChild(messageElement)
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight
    }

    // Process user message
    function processMessage(message) {
        sendMessage(message, true)

        // Simple keyword matching
        message = message.toLowerCase()
        let responded = false

        // Check for keywords in the FAQ data
        for (const [category,responses] of Object.entries(faqData)) {
            if (message.includes(category) || message.includes(category.split(" ")[0])) {
                // Send a random response from the category
                const randomResponse = responses[Math.floor(Math.random() * responses.length)]
                setTimeout( () => {
                    sendMessage(randomResponse, false)
                }
                , 500)
                responded = true
                break
            }
        }

        // Default response if no keywords matched
        if (!responded) {
            setTimeout( () => {
                sendMessage("I'm not sure I understand. Could you try asking about our packages, router setup, billing, or technical support?", false, )

                // Show options again
                const optionsContainer = document.createElement("div")
                optionsContainer.className = "chatbot-options"
                optionsContainer.innerHTML = `
        <div class="chatbot-option">Package Information</div>
        <div class="chatbot-option">Router Setup</div>
        <div class="chatbot-option">Billing Questions</div>
        <div class="chatbot-option">Technical Support</div>
      `
                chatbotMessages.appendChild(optionsContainer)

                // Add event listeners to new options
                optionsContainer.querySelectorAll(".chatbot-option").forEach( (option) => {
                    option.addEventListener("click", () => {
                        processMessage(option.textContent)
                    }
                    )
                }
                )

                chatbotMessages.scrollTop = chatbotMessages.scrollHeight
            }
            , 500)
        }
    }

    // Send message on button click
    if (chatbotSend) {
        chatbotSend.addEventListener("click", () => {
            const message = chatbotInput.value.trim()
            if (message) {
                processMessage(message)
                chatbotInput.value = ""
            }
        }
        )
    }

    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const message = chatbotInput.value.trim()
                if (message) {
                    processMessage(message)
                    chatbotInput.value = ""
                }
            }
        }
        )
    }

    // Handle chatbot option clicks
    chatbotOptions.forEach( (option) => {
        option.addEventListener("click", () => {
            processMessage(option.textContent)
        }
        )
    }
    )

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach( (anchor) => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            if (targetId === "#")
                return

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
    }
    )

    // Initialize EmailJS with your User ID
    emailjs.init("YOUR_EMAILJS_USER_ID")
}
)
