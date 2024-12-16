import { getFilteredPropertyType, getPropertyById } from "@/app/action";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const propertiesApi = createApi({
    reducerPath: "propertiesApi",
    baseQuery: fakeBaseQuery(),
    endpoints: builder => ({

        getPropertyById: builder.query({
            queryFn: async ({id, propertyType}) => {
                const property = await getPropertyById({id, propertyType})
                console.log(property)
                return property
            }
        }),
        filteredProperty: builder.query({
            queryFn: async ({propertyFilters, propertyType}) => {
                try {
                    const properties = await getFilteredPropertyType({ filterItem: propertyFilters, propertyType });
                    console.log(properties);
                    return { data: properties };  // Return the data in the expected format
                  } 
                catch (error: unknown) {
                if (error instanceof Error) {
                    // Safely access the message property when the error is an instance of Error
                    return { error: error.message };  
                }
                    return { error: "An unknown error occurred" }; // Handle unknown errors
                }
            }
        })
    })
})

export const { useGetPropertyByIdQuery, useFilteredPropertyQuery } = propertiesApi;
export default propertiesApi;