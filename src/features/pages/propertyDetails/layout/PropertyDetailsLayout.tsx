"use client"
import React from 'react'
import PropertyDetailsHero from '../sections/propertyDetailsHero/PropertyDetailsHero'
import { useGetPropertyByIdQuery } from '@/redux/features/propertiesApi/propertiesApi'
import { useParams } from 'next/navigation';
import PropertyDetails from '../sections/propertyDetails/PropertyDetails';
import Loader from '@/component/loader/Loader';

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
    data: property,
    isLoading,
    isError,
    error
  } = useGetPropertyByIdQuery({id, propertyType})

  if(isError){
    throw error
  }

  if(isLoading){
    return <Loader />
  }  
  
  const propertyData = property as PropertyProps;

  return (
    <div>
      <PropertyDetailsHero property={propertyData} />
      <PropertyDetails property={propertyData} />
    </div>
  )
}

export default PropertyDetailsLayout
