"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Luxury pet suite with premium bedding",
      category: "Accommodations"
    },
    {
      src: "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Comfortable standard room for pets",
      category: "Accommodations"
    },
    {
      src: "https://images.pexels.com/photos/8434590/pexels-photo-8434590.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Shared accommodation space for social pets",
      category: "Accommodations"
    },
    {
      src: "https://images.pexels.com/photos/4681267/pexels-photo-4681267.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Happy pets during playtime",
      category: "Activities"
    },
    {
      src: "https://images.pexels.com/photos/4790163/pexels-photo-4790163.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Professional pet grooming services",
      category: "Services"
    },
    {
      src: "https://images.pexels.com/photos/7210470/pexels-photo-7210470.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Outdoor play area for pets",
      category: "Facilities"
    },
    {
      src: "https://images.pexels.com/photos/8434781/pexels-photo-8434781.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Indoor recreation area",
      category: "Facilities"
    },
    {
      src: "https://images.pexels.com/photos/4681109/pexels-photo-4681109.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Professional staff caring for pets",
      category: "Staff"
    },
    {
      src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Happy golden retriever during stay",
      category: "Happy Pets"
    },
    {
      src: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Cat enjoying comfortable accommodation",
      category: "Happy Pets"
    },
    {
      src: "https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Professional pet care and health checkup",
      category: "Services"
    },
    {
      src: "https://images.pexels.com/photos/8434779/pexels-photo-8434779.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Modern reception and waiting area",
      category: "Facilities"
    },
    {
      src: "https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Dogs enjoying social interaction",
      category: "Activities"
    },
    {
      src: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Comfortable resting area for cats",
      category: "Accommodations"
    },
    {
      src: "https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Pet feeding and nutrition care",
      category: "Services"
    },
    {
      src: "https://images.pexels.com/photos/8434783/pexels-photo-8434783.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Exercise and play equipment",
      category: "Activities"
    }
  ]

  const categories = ["All", "Accommodations", "Facilities", "Services", "Activities", "Happy Pets", "Staff"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/4681267/pexels-photo-4681267.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Take a look inside Pet Palace - our facilities, accommodations, 
              and the happy pets we care for every day
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium bg-black bg-opacity-50 rounded px-2 py-1">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-auto"
              />
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Experience Pet Palace
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Our state-of-the-art facilities provide a safe, comfortable, and enjoyable 
              environment for pets of all sizes. From luxury suites to play areas, 
              every space is designed with your pet's happiness in mind.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Happy Pets Served</h3>
                <p className="text-gray-600">Every month, we provide exceptional care to hundreds of beloved pets</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Care</h3>
                <p className="text-gray-600">Round-the-clock monitoring and care from our trained staff</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">We're proud of our perfect satisfaction rating from pet parents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a tour to see our facilities in person and meet our caring staff
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors">
              Schedule Tour
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}