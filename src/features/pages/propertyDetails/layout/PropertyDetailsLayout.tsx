"use client"
import React from 'react'
import PropertyDetailsHero from '../sections/propertyDetailsHero/PropertyDetailsHero'
import { useGetPropertyByIdQuery } from '@/redux/features/propertiesApi/propertiesApi'
import { useParams } from 'next/navigation';
import PropertyDetails from '../sections/propertyDetails/PropertyDetails';

interface PropertyProps {
  images: string[];
  title: string;
  type: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
}


const PropertyDetailsLayout = () => {
    const {id, propertyType} = useParams()

    const {
        data: property = {} as PropertyProps,
        isFetching,
        isLoading
    } = useGetPropertyByIdQuery({id, propertyType})

    if(isLoading){
      return "Loading"
    } 

  return (
    <div>
      <PropertyDetailsHero property={property} />
      <PropertyDetails property={property} />
    </div>
  )
}

export default PropertyDetailsLayout
