import { getPropertyById } from '@/app/action'
import PropertyDetailsLayout from '@/features/pages/propertyDetails/layout/PropertyDetailsLayout'
import { Metadata } from 'next'
import React from 'react'

export const generateMetadata = async ({params}: {params: {id: string, propertyType: string}}): Promise<Metadata> => {
  try {
    const { data } = await getPropertyById({ id: params.id, propertyType: params.propertyType });
    return {
      title: `${data.title || 'Property Details'}`,
      description: data.description || 'Discover detailed information about this property.',
      openGraph: {
        title: `${data.title || 'Property Details'}`,
        description: data.description || 'Discover detailed information about this property.',
        url: `https://yourwebsite.com/property/${params.propertyType}/${params.id}`,
        images: [
          {
            url: data.images[0] || '/default-property-image.jpg',
            width: 1200,
            height: 630,
            alt: data.title || 'Property Image',
          },
        ],
      },
    };
  } catch (error) {
    console.error('Error fetching property details for metadata:', error);

    return {
      title: 'Property Not Found',
      description: 'The property you are looking for does not exist.',
    };
  }
}

const page =  () => {
  return (
    <main>
        <PropertyDetailsLayout />
    </main>
  )
}

export default page
