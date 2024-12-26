"use client"
import React, { useState } from 'react'
import PropertyListingHero from '../sections/propertyListingHero/PropertyListingHero'
import PropertyListing from '../sections/propertyListing/PropertyListing'
import { useFilteredPropertyQuery } from '@/redux/features/propertiesApi/propertiesApi'
// import { useSearchParams } from 'next/navigation'

const PropertyListingLayout = () => {
    // const searchParams = useSearchParams()
    // const propertyType = searchParams.get("propertyType")
    const propertyType = "sale"

    const [propertyFilters, setPropertyFilters] = useState({
        type: propertyType ? propertyType : "sale",
        price: "",
        location: "",
        bathrooms: 0,
        bedrooms: 0,
    });

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPropertyFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const {
      data: properties = [],
      isError,
      error
    } = useFilteredPropertyQuery({propertyFilters, propertyType: propertyFilters.type})

    if(isError){
      throw error
    }
    
  return (
    <>
      <PropertyListingHero propertyFilters={propertyFilters} handleFilterChange={handleFilterChange} />
      <PropertyListing properties={properties} type={propertyFilters.type} />
    </>
  )
}

export default PropertyListingLayout
