import PropertyInspectionLayout from '@/features/pages/property-inspections/layout/PropertyInspectionLayout'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Property Inspection Videos',
  description: "Explore detailed property inspection videos to help you make informed decisions about your next property purchase or rental."
}

const page = () => {
  return (
    <main>
      <PropertyInspectionLayout />
    </main>
  )
}

export default page
