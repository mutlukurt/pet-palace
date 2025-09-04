import Link from "next/link"
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Pet Palace</span>
            </div>
            <p className="text-gray-400 text-base">
              Professional pet hotel and boarding services providing the best care 
              for your beloved companions while you're away.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/services" className="text-base text-gray-400 hover:text-white">
                      Luxury Suites
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-400 hover:text-white">
                      Standard Rooms
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-400 hover:text-white">
                      Daycare
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-base text-gray-400 hover:text-white">
                      VIP Experience
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-base text-gray-400 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-base text-gray-400 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-gray-400 hover:text-white">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/reviews" className="text-base text-gray-400 hover:text-white">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-0">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Contact Info
                </h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-400 break-all">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-400 break-all">info@petpalace.com</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-400">
                      123 Pet Palace Drive<br />
                      Beverly Hills, CA 90210<br />
                      United States
                    </span>
                  </li>
                </ul>
                
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Business Hours
                  </h4>
                  <div className="mt-2 text-sm sm:text-base text-gray-400">
                    <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 Pet Palace. All rights reserved. Your pet's comfort is our priority.
          </p>
        </div>
      </div>
    </footer>
  )
}