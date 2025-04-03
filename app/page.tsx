"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Phone, Mail, ChevronRight } from "lucide-react"
import LoginButton from "@/components/login-button"
import ProductCard from "@/components/product-card"
import PackageCard from "@/components/package-card"
import CartButton from "@/components/cart-button"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/images/vodacom-logo.png" alt="Vodacom Logo" width={150} height={50} className="h-10 w-auto" />
            <span className="hidden md:inline-block text-gray-500 text-sm">Partner: MEMA Holdings</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a href="#products" className="text-gray-700 hover:text-red-600 relative group transition-colors">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#packages" className="text-gray-700 hover:text-red-600 relative group transition-colors">
                Packages
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 relative group transition-colors">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <LoginButton />
              <CartButton />
            </div>
          </div>

          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Unlimited Internet Service for Your Home & Business
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              Experience lightning-fast 5G connectivity with Vodacom Tanzania. Play games, watch TV, and enjoy unlimited
              entertainment at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 hover:scale-105 transition-transform"
                onClick={() => {
                  document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore Packages
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 transition-colors"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/atel-router.png"
                alt="Atel DW516 5G CPE"
                width={400}
                height={500}
                className="object-contain animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-red-700 font-bold py-2 px-4 rounded-full animate-pulse">
                Only 240,000 TZS
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Product</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the future of connectivity with our premium 5G router
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold mb-4">Atel DW516 5G CPE</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                Ultra-fast 5G connectivity
              </li>
              <li className="flex items-center">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                Wide coverage range
              </li>
              <li className="flex items-center">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                Easy setup and management
              </li>
              <li className="flex items-center">
                <span className="bg-red-600 rounded-full p-1 mr-3">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                Multiple device connectivity
              </li>
            </ul>
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-red-600">240,000 TZS</span>
              <span className="ml-2 text-sm text-gray-500">Security deposit: 2 months</span>
            </div>
            <Button className="bg-red-600 hover:bg-red-700">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
          <div className="md:w-1/2 p-8 flex justify-center">
            <div className="relative">
              <Image
                src="/images/atel-router.png"
                alt="Atel DW516 5G CPE"
                width={300}
                height={400}
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-red-700 font-bold py-2 px-4 rounded-full animate-bounce">
                Best Seller
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of high-quality routers and business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              title="5G Router"
              image="/images/5g-router.png"
              description="High-speed 5G router with wide coverage. Contract-free with 2 months security deposit."
              price="Starting from 120,000 TZS"
            />
            <ProductCard
              title="4G Router"
              image="/images/4g-router.png"
              description="Reliable 4G router for stable connectivity. Contract-free with 2 months security deposit."
              price="Starting from 50,000 TZS"
            />
            <ProductCard
              title="Master Airtime"
              image="/images/master-airtime.png"
              description="Perfect solution for small businesses and corporate clients to manage airtime distribution."
              price="Custom pricing"
            />
            <ProductCard
              title="Bulk SMS"
              image="/images/bulk-sms.png"
              description="Affordable web-based solution to send multiple SMS to multiple recipients at once."
              price="Pay per use"
            />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlimited Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy our unlimited offers with our 5G coverage near your home and office. Play games, watch TV with super
              speed internet at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PackageCard
              title="4G Basic"
              speed="Up to 5mbps"
              price="50,000 TZS"
              features={["Unlimited data", "24/7 support", "No contract"]}
              type="4G"
            />
            <PackageCard
              title="4G Standard"
              speed="Up to 10mbps"
              price="70,000 TZS"
              features={["Unlimited data", "24/7 support", "No contract"]}
              type="4G"
            />
            <PackageCard
              title="4G Premium"
              speed="Up to 20mbps"
              price="115,000 TZS"
              features={["Unlimited data", "24/7 support", "No contract"]}
              type="4G"
            />
            <PackageCard
              title="5G Basic"
              speed="Up to 30mbps"
              price="120,000 TZS"
              features={["Unlimited data", "24/7 support", "No contract"]}
              type="5G"
              popular={true}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PackageCard
              title="5G Standard"
              speed="Up to 50mbps"
              price="150,000 TZS"
              features={["Unlimited data", "24/7 support", "No contract"]}
              type="5G"
            />
            <PackageCard
              title="5G Premium"
              speed="Up to 100mbps"
              price="250,000 TZS"
              features={["Unlimited data", "24/7 support", "No contract"]}
              type="5G"
            />
            <PackageCard
              title="5G Pro"
              speed="Up to 200mbps"
              price="400,000 TZS"
              features={["Unlimited data", "24/7 support", "No contract"]}
              type="5G"
            />
            <PackageCard
              title="5G Ultimate"
              speed="Up to 350mbps"
              price="600,000 TZS"
              features={["Unlimited data", "24/7 support", "No contract"]}
              type="5G"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We ensure unlimited internet at an affordable price guaranteeing your family entertainment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Super Fast Speed</h3>
              <p className="text-gray-600 text-center">
                Experience lightning-fast internet speeds with our 5G technology
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Affordable Pricing</h3>
              <p className="text-gray-600 text-center">We offer value for your money with competitive pricing</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Reliable Service</h3>
              <p className="text-gray-600 text-center">Consistent and dependable internet connection for your needs</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-center">Our dedicated team is always ready to assist you</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Unlimited Internet?</h2>
            <p className="text-lg mb-8">
              Get started today with our high-speed internet packages and transform your online experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Order Now
                <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team is ready to assist you 24/7. Get in touch with us for any inquiries.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <span>0753221868</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-3" />
                  <span>business@vodacom.co.tz</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium mb-2">Business Hours</h4>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Visit us at our office location for in-person assistance</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
              <h3 className="text-xl font-semibold mb-2">Vodacom Tanzania - MEMA Holdings</h3>
              <p className="text-gray-600 mb-4">We are located at Dora Tower, Bamaga Sheli, Ground Floor</p>
              <a
                href="https://maps.app.goo.gl/GKzwBb7rgTB1fnvn8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                View on Google Maps
              </a>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9598830721184!2d39.2862!3d-6.7923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b0a2e3bd1e3%3A0x7e8be3e0a1c1d1a1!2sDora%20Tower!5e0!3m2!1sen!2stz!4v1617293456789!5m2!1sen!2stz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vodacom Tanzania Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/vodacom-logo-white.png"
                alt="Vodacom Logo"
                width={150}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4">Partner: MEMA Holdings</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.63 1.802h-.08c-2.643 0-2.987.012-4.043.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 00-1.772 1.153 4.902 4.902 0 00-1.153 1.772c-.247.636-.416 1.363-.465 2.427-.048 1.067-.06 1.407-.06 4.123v.08c0 2.643.012 2.987.06 4.043.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06h.08c2.643 0 2.987-.012 4.043-.06 1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123v-.08c0-2.643-.012-2.987-.06-4.043-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.902 4.902 0 00-1.772-1.153c-.636-.247-1.363-.416-2.427-.465-1.067-.048-1.407-.06-4.123-.06zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.17 1.17 0 100 2.34 1.17 1.17 0 000-2.34z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    5G Routers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    4G Routers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Master Airtime
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Bulk SMS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Packages</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    4G Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    5G Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Business Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Enterprise Plans
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Vodacom Tanzania. All rights reserved. Partner: MEMA Holdings
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

