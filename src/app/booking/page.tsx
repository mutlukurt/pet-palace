"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, Check, Heart, Star, CreditCard } from "lucide-react"

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    // Pet Information
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
    petWeight: "",
    petMedicalNotes: "",
    
    // Accommodation
    accommodationType: "",
    checkInDate: "",
    checkOutDate: "",
    addOns: [] as string[],
    
    // Owner Information  
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    emergencyContact: "",
    
    // Special Requests
    specialRequests: ""
  })

  const [showSuccess, setShowSuccess] = useState(false)

  const accommodationTypes = [
    {
      id: "vip-suite",
      name: "VIP Suite",
      price: 250,
      image: "https://images.pexels.com/photos/4681267/pexels-photo-4681267.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Premium suite", "Personal caregiver", "Gourmet meals", "24/7 webcam", "Spa services"]
    },
    {
      id: "luxury-suite", 
      name: "Luxury Suite",
      price: 150,
      image: "https://images.pexels.com/photos/4681107/pexels-photo-4681107.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Private room", "Premium bedding", "Daily grooming", "Climate control", "24/7 monitoring"]
    },
    {
      id: "standard-room",
      name: "Standard Room", 
      price: 80,
      image: "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Clean room", "Regular feeding", "Daily exercise", "Basic grooming", "Comfortable bedding"]
    },
    {
      id: "shared-accommodation",
      name: "Shared Accommodation",
      price: 50,
      image: "https://images.pexels.com/photos/8434590/pexels-photo-8434590.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Shared space", "Social interaction", "Group activities", "Supervised care"]
    }
  ]

  const addOnServices = [
    { id: "grooming", name: "Professional Grooming", price: 75 },
    { id: "webcam", name: "24/7 Webcam Access", price: 15 },
    { id: "transport", name: "Pick-up & Drop-off", price: 50 },
    { id: "vet-checkup", name: "Veterinary Check-up", price: 100 },
    { id: "special-diet", name: "Special Diet Plan", price: 25 },
    { id: "extra-playtime", name: "Extra Playtime", price: 30 }
  ]

  const handleInputChange = (field: string, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddOnToggle = (addOnId: string) => {
    setBookingData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId) 
        ? prev.addOns.filter(id => id !== addOnId)
        : [...prev.addOns, addOnId]
    }))
  }

  const calculateTotal = () => {
    const accommodation = accommodationTypes.find(a => a.id === bookingData.accommodationType)
    const accommodationPrice = accommodation ? accommodation.price : 0
    
    const addOnTotal = bookingData.addOns.reduce((total, addOnId) => {
      const addOn = addOnServices.find(a => a.id === addOnId)
      return total + (addOn ? addOn.price : 0)
    }, 0)
    
    const nights = bookingData.checkInDate && bookingData.checkOutDate 
      ? Math.ceil((new Date(bookingData.checkOutDate).getTime() - new Date(bookingData.checkInDate).getTime()) / (1000 * 3600 * 24))
      : 1
      
    return (accommodationPrice * nights) + addOnTotal
  }

  const handleSubmit = () => {
    // Simulate booking submission
    setShowSuccess(true)
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Pet Palace! We've received your booking request and will contact you within 24 hours to confirm the details.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Booking Summary</h3>
            <p className="text-sm text-gray-600">Pet: {bookingData.petName}</p>
            <p className="text-sm text-gray-600">Check-in: {bookingData.checkInDate}</p>
            <p className="text-sm text-gray-600">Check-out: {bookingData.checkOutDate}</p>
            <p className="text-sm text-gray-600">Total: ${calculateTotal()}</p>
          </div>
          <button 
            onClick={() => {
              setShowSuccess(false)
              setCurrentStep(1)
              setBookingData({
                petName: "", petType: "", petBreed: "", petAge: "", petWeight: "", petMedicalNotes: "",
                accommodationType: "", checkInDate: "", checkOutDate: "", addOns: [],
                ownerName: "", ownerEmail: "", ownerPhone: "", emergencyContact: "", specialRequests: ""
              })
            }}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Pet's Stay</h1>
          <p className="text-xl">Easy, secure booking in just a few steps</p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                <div className={`ml-2 text-sm font-medium ${
                  step <= currentStep ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step === 1 && 'Pet Info'}
                  {step === 2 && 'Accommodation'}  
                  {step === 3 && 'Your Info'}
                  {step === 4 && 'Confirm'}
                </div>
                {step < 4 && (
                  <div className={`hidden sm:block w-12 h-0.5 ml-4 ${
                    step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* Step 1: Pet Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Pet</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name *</label>
                    <input
                      type="text"
                      required
                      value={bookingData.petName}
                      onChange={(e) => handleInputChange('petName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your pet's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pet Type *</label>
                    <select
                      required
                      value={bookingData.petType}
                      onChange={(e) => handleInputChange('petType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="bird">Bird</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Breed</label>
                    <input
                      type="text"
                      value={bookingData.petBreed}
                      onChange={(e) => handleInputChange('petBreed', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter breed"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="text"
                      value={bookingData.petAge}
                      onChange={(e) => handleInputChange('petAge', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 2 years"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                    <input
                      type="text"
                      value={bookingData.petWeight}
                      onChange={(e) => handleInputChange('petWeight', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 15 kg"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medical Notes</label>
                  <textarea
                    rows={3}
                    value={bookingData.petMedicalNotes}
                    onChange={(e) => handleInputChange('petMedicalNotes', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any medical conditions, medications, or special care instructions..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Accommodation Selection */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Accommodation & Dates</h2>
              
              {/* Date Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Dates</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date *</label>
                    <input
                      type="date"
                      required
                      value={bookingData.checkInDate}
                      onChange={(e) => handleInputChange('checkInDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date *</label>
                    <input
                      type="date"
                      required
                      value={bookingData.checkOutDate}
                      onChange={(e) => handleInputChange('checkOutDate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Accommodation Types */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Accommodation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {accommodationTypes.map((accommodation) => (
                    <div
                      key={accommodation.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        bookingData.accommodationType === accommodation.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleInputChange('accommodationType', accommodation.id)}
                    >
                      <div className="flex items-center mb-3">
                        <Image
                          src={accommodation.image}
                          alt={accommodation.name}
                          width={60}
                          height={60}
                          className="rounded-md object-cover"
                        />
                        <div className="ml-4 flex-1">
                          <h4 className="font-semibold text-gray-900">{accommodation.name}</h4>
                          <p className="text-lg font-bold text-blue-600">${accommodation.price}/night</p>
                        </div>
                        {bookingData.accommodationType === accommodation.id && (
                          <Check className="h-6 w-6 text-blue-600" />
                        )}
                      </div>
                      <ul className="text-sm text-gray-600">
                        {accommodation.features.map((feature, index) => (
                          <li key={index} className="flex items-center mb-1">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-on Services */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {addOnServices.map((service) => (
                    <label key={service.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bookingData.addOns.includes(service.id)}
                        onChange={() => handleAddOnToggle(service.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <div className="ml-3 flex-1">
                        <p className="font-medium text-gray-900">{service.name}</p>
                        <p className="text-blue-600 font-semibold">+${service.price}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Owner Information */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={bookingData.ownerName}
                    onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={bookingData.ownerEmail}
                      onChange={(e) => handleInputChange('ownerEmail', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={bookingData.ownerPhone}
                      onChange={(e) => handleInputChange('ownerPhone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                  <input
                    type="text"
                    value={bookingData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Name and phone number for emergency contact"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                  <textarea
                    rows={4}
                    value={bookingData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requests or instructions for your pet's stay..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h2>
              
              <div className="space-y-6">
                {/* Pet Info */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Pet Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <p><span className="font-medium">Name:</span> {bookingData.petName}</p>
                    <p><span className="font-medium">Type:</span> {bookingData.petType}</p>
                    <p><span className="font-medium">Breed:</span> {bookingData.petBreed || 'Not specified'}</p>
                    <p><span className="font-medium">Age:</span> {bookingData.petAge || 'Not specified'}</p>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Details</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <p><span className="font-medium">Check-in:</span> {bookingData.checkInDate}</p>
                    <p><span className="font-medium">Check-out:</span> {bookingData.checkOutDate}</p>
                    <p><span className="font-medium">Accommodation:</span> {
                      accommodationTypes.find(a => a.id === bookingData.accommodationType)?.name
                    }</p>
                    <p><span className="font-medium">Add-ons:</span> {
                      bookingData.addOns.length > 0 
                        ? bookingData.addOns.map(id => addOnServices.find(s => s.id === id)?.name).join(', ')
                        : 'None'
                    }</p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Price Breakdown</h3>
                  <div className="space-y-2 text-sm">
                    {(() => {
                      const accommodation = accommodationTypes.find(a => a.id === bookingData.accommodationType)
                      const nights = bookingData.checkInDate && bookingData.checkOutDate 
                        ? Math.ceil((new Date(bookingData.checkOutDate).getTime() - new Date(bookingData.checkInDate).getTime()) / (1000 * 3600 * 24))
                        : 1
                      
                      return (
                        <>
                          <div className="flex justify-between">
                            <span>{accommodation?.name} ({nights} night{nights !== 1 ? 's' : ''})</span>
                            <span>${accommodation ? accommodation.price * nights : 0}</span>
                          </div>
                          {bookingData.addOns.map(addOnId => {
                            const addOn = addOnServices.find(a => a.id === addOnId)
                            return addOn ? (
                              <div key={addOnId} className="flex justify-between">
                                <span>{addOn.name}</span>
                                <span>${addOn.price}</span>
                              </div>
                            ) : null
                          })}
                          <div className="border-t border-blue-200 pt-2 flex justify-between font-semibold text-lg">
                            <span>Total</span>
                            <span>${calculateTotal()}</span>
                          </div>
                        </>
                      )
                    })()}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <div className="text-sm text-gray-500">
              Step {currentStep} of 4
            </div>
            
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && (!bookingData.petName || !bookingData.petType)) ||
                  (currentStep === 2 && (!bookingData.accommodationType || !bookingData.checkInDate || !bookingData.checkOutDate)) ||
                  (currentStep === 3 && (!bookingData.ownerName || !bookingData.ownerEmail || !bookingData.ownerPhone))
                }
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}