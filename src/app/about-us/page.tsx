import AboutUsLayout from '@/features/pages/about/layout/AboutUsLayout'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About Aremudami_luxury real estate",
  description: "Learn about Aremudami Luxury Real Estate—our mission, values, and commitment to connecting people with the finest properties for sale, rent, and shortlet. Discover who we are and why we excel in delivering exceptional real estate experiences.",
  openGraph: {
    title: "About Aremudami Luxury Real Estate",
    description: "Discover the story behind Aremudami Luxury Real Estate. Learn about our commitment to excellence, our mission to deliver exceptional real estate solutions, and our passion for luxury living.",
    url: "https://yourwebsite.com/about",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/about-us-banner.jpg",
        width: 1200,
        height: 630,
        alt: "About Aremudami Luxury Real Estate",
      },
    ],
  },
}

const page = () => {
  return (
    <main>
      <AboutUsLayout />
    </main>
  )
}

export default page
