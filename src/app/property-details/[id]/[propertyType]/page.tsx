import PropertyDetailsLayout from '@/features/pages/propertyDetails/layout/PropertyDetailsLayout'
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useParams } from 'next/navigation';
import { useFilteredPropertyQuery, useGetPropertyByIdQuery } from '@/redux/features/propertiesApi/propertiesApi';

// export const generateStaticParams = async () => {
//   const properties = await getAllProperties(); // Fetch your properties list
//   return properties.map((property) => ({
//     id: property.id.toString(), // Ensure these match the route params
//     propertyType: property.type, // Ensure these match the route params
//   }));
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const property = await getPropertyById(params?.id, params?.propertyType); // Your logic to fetch property by id and type

//   return {
//     props: {
//       property,
//     },
//   };
// };

export const generateStaticParams = async () => {
  const { data: properties = [] } = await useFilteredPropertyQuery({
    propertyFilters: {}, // Adjust this if necessary for your filters
    propertyType: 'all', // Adjust propertyType to your needs
  });

  // Generate static paths from the properties
  return properties.map((property) => ({
    id: property.id.toString(),
    propertyType: property.type, // Assuming you have a 'type' property in each property
  }));
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id, propertyType } = params;

  // Fetch the property data using the id and propertyType
  const { data: property } = useGetPropertyByIdQuery({
    id: id as string,
    propertyType: propertyType as string,
  });

  return {
    props: {
      property,
    },
  };
};

const page = () => {
  return (
    <main>
        <PropertyDetailsLayout />
    </main>
  )
}

export default page
