// Wave Animation for Featured Product
document.addEventListener("DOMContentLoaded", () => {
  const featuredProduct = document.querySelector(".featured-product")

  if (featuredProduct) {
    const waveContainer = document.createElement("div")
    waveContainer.className = "wave-container"

    const wave1 = document.createElement("div")
    wave1.className = "wave"

    const wave2 = document.createElement("div")
    wave2.className = "wave wave-2"

    const wave3 = document.createElement("div")
    wave3.className = "wave wave-3"

    waveContainer.appendChild(wave1)
    waveContainer.appendChild(wave2)
    waveContainer.appendChild(wave3)

    const featuredProductBg = document.createElement("div")
    featuredProductBg.className = "featured-product-bg gradient-bg"

    featuredProduct.insertBefore(featuredProductBg, featuredProduct.firstChild)
    featuredProduct.insertBefore(waveContainer, featuredProduct.firstChild)
  }
})
