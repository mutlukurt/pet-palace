import Image from "next/image"
import { Award, Heart, Shield, Clock, Users, Star } from "lucide-react"

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Miller",
      role: "Veterinary Director",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "15+ years of veterinary experience specializing in companion animals"
    },
    {
      name: "Michael Johnson",
      role: "Head of Operations",
      image: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400", 
      description: "Expert in pet care management with a passion for animal welfare"
    },
    {
      name: "Emma Thompson",
      role: "Senior Pet Care Specialist",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Certified animal behaviorist with 10+ years in pet hospitality"
    },
    {
      name: "David Chen",
      role: "Facility Manager",
      image: "https://images.pexels.com/photos/5327774/pexels-photo-5327774.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ensures our facilities meet the highest standards of cleanliness and safety"
    }
  ]

  const values = [
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Compassionate Care",
      description: "Every pet is treated with love, respect, and individual attention as if they were our own family members."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Safety First",
      description: "Advanced security systems, trained staff, and strict safety protocols ensure your pet's well-being."
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "Excellence",
      description: "We continuously strive to exceed expectations and provide the highest quality of service."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Professional Team",
      description: "Our certified and experienced staff are passionate about providing exceptional pet care."
    }
  ]

  const milestones = [
    { year: "2018", event: "Pet Palace founded with a mission to redefine pet care" },
    { year: "2019", event: "Opened our first luxury pet hotel with 50 accommodations" },
    { year: "2020", event: "Introduced 24/7 veterinary care and webcam services" },
    { year: "2021", event: "Expanded to include specialized services for senior pets" },
    { year: "2022", event: "Achieved 100% customer satisfaction rating" },
    { year: "2023", event: "Launched our premium VIP suites and spa services" },
    { year: "2024", event: "Served over 5,000 happy pets and their families" },
    { year: "2025", event: "Opening second location to serve more families" }
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
              About Pet Palace
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dedicated to providing exceptional care and comfort for your beloved pets 
              since 2018. Your pet's happiness is our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Pet Palace was born from a simple belief: every pet deserves to be treated like royalty. 
                  Founded in 2018 by a team of passionate animal lovers and veterinary professionals, 
                  we set out to create more than just a pet boarding facility.
                </p>
                <p className="text-lg">
                  We envisioned a place where pets could enjoy luxury accommodations, professional care, 
                  and genuine love while their families were away. Today, Pet Palace has become Istanbul's 
                  premier pet hotel, trusted by thousands of pet parents who want nothing but the best for 
                  their furry family members.
                </p>
                <p className="text-lg">
                  Our commitment to excellence has earned us recognition as the leading pet hospitality 
                  provider in the region, but our greatest reward comes from seeing the joy and comfort 
                  of every pet in our care.
                </p>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/4790163/pexels-photo-4790163.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pet Palace founding story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals who make Pet Palace exceptional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Major milestones in our commitment to pet care excellence
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pet Palace by the Numbers
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Our achievements reflect our commitment to excellence
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">5000+</div>
                <p className="text-lg text-blue-100">Happy Pets Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">7</div>
                <p className="text-lg text-blue-100">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">24/7</div>
                <p className="text-lg text-blue-100">Professional Care</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">100%</div>
                <p className="text-lg text-blue-100">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600">
              Industry recognition for our commitment to pet care excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Pet Hotel 2024</h3>
              <p className="text-gray-600">Istanbul Pet Care Awards</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Star className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5-Star Rating</h3>
              <p className="text-gray-600">Google Reviews & Pet Care Association</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified Excellence</h3>
              <p className="text-gray-600">International Pet Care Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience the Pet Palace Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied pet parents who trust us with their most precious family members
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
              Schedule a Visit
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-lg font-medium rounded-md text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}