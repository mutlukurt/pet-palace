import Image from "next/image"
import Link from "next/link"
import { Check, Clock, Users, Wifi, Camera, Heart } from "lucide-react"

export default function Services() {
  const services = [
    {
      name: "VIP Suite",
      price: "$250/night",
      description: "Ultimate luxury experience with personalized care and premium services",
      image: "https://images.pexels.com/photos/4681267/pexels-photo-4681267.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Premium suite with private garden",
        "Personal caregiver assigned",
        "Gourmet meals and treats",
        "Daily spa and grooming services",
        "24/7 webcam access for owners",
        "Emergency veterinary access",
        "Luxury bedding and toys",
        "Daily exercise and playtime"
      ],
      popular: true
    },
    {
      name: "Luxury Suite",
      price: "$150/night",
      description: "Spacious premium accommodation with all amenities for your beloved pet",
      image: "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Private room with premium bedding",
        "Daily grooming and care",
        "Scheduled exercise time",
        "Climate-controlled environment",
        "24/7 monitoring system",
        "Professional pet care staff",
        "Quality feeding schedule",
        "Indoor/outdoor access"
      ],
      popular: false
    },
    {
      name: "Standard Room",
      price: "$80/night", 
      description: "Comfortable and clean accommodation with essential care services",
      image: "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Clean and comfortable room",
        "Regular feeding schedule",
        "Daily exercise sessions",
        "Basic grooming services",
        "Comfortable bedding",
        "Supervised playtime",
        "Professional care staff",
        "Safe and secure environment"
      ],
      popular: false
    },
    {
      name: "Shared Accommodation",
      price: "$50/night",
      description: "Social environment perfect for friendly pets who enjoy company",
      image: "https://images.pexels.com/photos/8434590/pexels-photo-8434590.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Shared space with compatible pets",
        "Social interaction and play",
        "Group activities and games",
        "Regular feeding schedule",
        "Supervised care at all times",
        "Indoor and outdoor access",
        "Professional staff supervision",
        "Safe socialization environment"
      ],
      popular: false
    },
    {
      name: "Daycare Service",
      price: "$40/day",
      description: "Full day care service with activities and social interaction",
      image: "https://images.pexels.com/photos/4681267/pexels-photo-4681267.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Full day activities and fun",
        "Social play with other pets",
        "Feeding and snack time",
        "Basic grooming services",
        "Supervised exercise sessions",
        "Indoor and outdoor play areas",
        "Professional caregivers",
        "Pick-up and drop-off service"
      ],
      popular: false
    },
    {
      name: "Extended Stay Package",
      price: "$120/night",
      description: "Special rates for longer stays with comprehensive care",
      image: "https://images.pexels.com/photos/4790163/pexels-photo-4790163.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Discounted rates for 7+ days",
        "Comprehensive health monitoring",
        "Weekly grooming sessions",
        "Daily exercise and activities",
        "Regular owner updates",
        "Veterinary check-ups included",
        "Personalized care plan",
        "Flexible accommodation options"
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      name: "Professional Grooming",
      price: "From $75",
      description: "Full grooming service including bath, nail trimming, and styling",
      icon: <Heart className="h-8 w-8" />
    },
    {
      name: "Veterinary Care",
      price: "On Request",
      description: "On-site veterinary services and emergency care",
      icon: <Heart className="h-8 w-8" />
    },
    {
      name: "Pet Transportation",
      price: "From $50",
      description: "Safe and comfortable pick-up and drop-off service",
      icon: <Heart className="h-8 w-8" />
    },
    {
      name: "Webcam Service",
      price: "$15/day",
      description: "24/7 webcam access to check on your pet anytime",
      icon: <Camera className="h-8 w-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/4790163/pexels-photo-4790163.jpeg?auto=compress&cs=tinysrgb&w=1600')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Choose from our range of accommodation options and services 
              designed to give your pet the best care possible
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Accommodation Options
            </h2>
            <p className="text-lg text-gray-600">
              Every pet deserves comfort and care tailored to their needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-xl sm:text-2xl font-bold text-blue-600">{service.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/booking"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600">
              Enhance your pet's stay with our premium add-on services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <p className="text-lg font-bold text-blue-600">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Pet Palace?
            </h2>
            <p className="text-lg text-gray-600">
              We provide exceptional care with attention to every detail
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Care</h3>
              <p className="text-gray-600">
                Round-the-clock monitoring and care to ensure your pet's safety and comfort
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Staff</h3>
              <p className="text-gray-600">
                Trained and passionate pet care professionals who treat every pet like family
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Wifi className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Connected</h3>
              <p className="text-gray-600">
                Regular updates and webcam access so you can check on your pet anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Pet's Perfect Stay?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your pet's needs and find the perfect accommodation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}