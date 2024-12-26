import { getFilteredPropertyType, getPropertyById } from "@/app/action";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

const propertiesApi = createApi({
    reducerPath: "propertiesApi",
    baseQuery: fakeBaseQuery(),
    endpoints: builder => ({

        getPropertyById: builder.query({
            queryFn: async ({id, propertyType}) => {
                try{
                    const property = await getPropertyById({id, propertyType})
                    console.log(property)
                    return property
                }
                catch(error){
                    return error
                }
            }
        }),
        filteredProperty: builder.query({
            queryFn: async ({propertyFilters, propertyType}) => {
                try {
                    const properties = await getFilteredPropertyType({ filterItem: propertyFilters, propertyType });
                    console.log(properties);
                    return { data: properties };
                  } 
                catch (error: unknown) {
                if (error instanceof Error) {
                    return { error: error };  
                }
                    return { error: "An unknown error occurred" };
                }
            }
        })
    })
})

export const { useGetPropertyByIdQuery, useFilteredPropertyQuery } = propertiesApi;
export default propertiesApi;