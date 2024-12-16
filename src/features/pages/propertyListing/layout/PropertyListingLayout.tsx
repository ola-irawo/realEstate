"use client"
import React, { useEffect, useState } from 'react'
import PropertyListingHero from '../sections/propertyListingHero/PropertyListingHero'
import PropertyListing from '../sections/propertyListing/PropertyListing'
import { useFilteredPropertyQuery } from '@/redux/features/propertiesApi/propertiesApi'
import { useSearchParams } from 'next/navigation'

const PropertyListingLayout = () => {
    const searchParams = useSearchParams()
    const propertyType = searchParams.get("propertyType")

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
        console.log(`Filter Updated: ${name} = ${value}`);
        console.log(propertyFilters)
    };

    const {
        data: properties = [],
        isError,
        isLoading,
        isFetching
    } = useFilteredPropertyQuery({propertyFilters, propertyType: propertyFilters.type})
    
    useEffect(() => {
        console.log(properties)
    }, [isFetching, isLoading, propertyFilters])

  return (
    <>
      <PropertyListingHero propertyFilters={propertyFilters} handleFilterChange={handleFilterChange} />
      <PropertyListing properties={properties} />
    </>
  )
}

export default PropertyListingLayout
