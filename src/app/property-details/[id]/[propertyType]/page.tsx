import PropertyDetailsLayout from '@/features/pages/propertyDetails/layout/PropertyDetailsLayout'
// import { useFilteredPropertyQuery } from '@/redux/features/propertiesApi/propertiesApi'
import React from 'react'
// import { GetStaticProps } from 'next';
// import { useFilteredPropertyQuery, useGetPropertyByIdQuery } from '@/redux/features/propertiesApi/propertiesApi';


// export const generateStaticParams = async () => {
//   const { data: properties = [] } = useFilteredPropertyQuery({
//     propertyFilters: {}, // Adjust this if necessary for your filters
//     propertyType: 'all', // Adjust propertyType to your needs
//   });

//   // Generate static paths from the properties
//   return properties.map((property) => ({
//     id: property.id.toString(),
//     propertyType: property.type, // Assuming you have a 'type' property in each property
//   }));
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { id, propertyType } = params;

//   // Fetch the property data using the id and propertyType
//   const { data: property } = useGetPropertyByIdQuery({
//     id: id as string,
//     propertyType: propertyType as string,
//   });

//   return {
//     props: {
//       property,
//     },
//   };
// };

// export async function generateStaticParams() {
//   const propertyFilters = {}; // Add filters if necessary
//   const propertyType = "yourPropertyType"; // Replace with default or dynamic logic
  
//   // Fetch all properties for static paths (directly using backend logic)
//   const properties =  useFilteredPropertyQuery({ filterItem: propertyFilters, propertyType });

//   return properties.map((property) => ({
//     id: property.id.toString(),
//     propertyType: property.type,
//   }));
// }

// export const generateStaticParams = () => {
//   const property = useFilteredPropertyQuery({})
// }

const page = ({params}) => {

  console.log({params}, params.id, params.propertyType)
  return (
    <main>
        <PropertyDetailsLayout />
    </main>
  )
}

export default page
