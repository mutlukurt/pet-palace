import { User, Pet, Booking, AccommodationType, Review, ContactInquiry } from '@prisma/client'

export type UserWithPets = User & {
  pets: Pet[]
  bookings: Booking[]
}

export type BookingWithDetails = Booking & {
  user: User
  pet: Pet
  accommodationType: AccommodationType
}

export type AccommodationTypeWithBookings = AccommodationType & {
  bookings: Booking[]
}

export type ReviewWithUser = Review & {
  user: User
}

export interface BookingFormData {
  petId: string
  accommodationTypeId: string
  checkInDate: Date
  checkOutDate: Date
  specialRequests?: string
  emergencyContact?: string
}

export interface PetFormData {
  name: string
  type: string
  breed?: string
  age?: number
  weight?: number
  color?: string
  image?: string
  medicalNotes?: string
  dietNotes?: string
  emergencyContact?: string
}

export interface ReviewFormData {
  rating: number
  title?: string
  comment: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface AccommodationFeatures {
  hasPlaytime: boolean
  hasGrooming: boolean
  hasFeeding: boolean
  hasClimate: boolean
  hasCamera: boolean
  hasVetAccess: boolean
}