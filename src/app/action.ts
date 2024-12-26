import { db } from "@/config/firebase/firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";


interface Props {
    id: string,
    propertyType: string
}


export const getPropertyById = async ({ id, propertyType }: Props) => {
  try {
    const docRef = doc(db, propertyType, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { data: docSnap.data() };
    } else {
      throw new Error("Property does not exist");
    }
  } catch (error) {
    return { error: error || "Failed to fetch property" };
  }
};

export const getFilteredPropertyType = async ({
    filterItem,
    propertyType,
  }: {
    filterItem: Record<string, string | number>;
    propertyType: string;
  }) => {
    try {
      const isEveryFieldEmptyExceptListing = Object.keys(filterItem).every(
        (key) => key === "type" || filterItem[key] === "" || filterItem[key] === 0
      );
      console.log(filterItem, propertyType)
      
      if(isEveryFieldEmptyExceptListing){
        const querySnapshot = await getDocs(collection(db, propertyType));
        const properties = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            
        }));

        return properties
      }

        const queryConstraints: Array<{ id: string; [key: string]: any }> = [];
        
        const filteredKeys = Object.keys(filterItem || {}).filter(
          (key) => filterItem[key] !== undefined && filterItem[key] !== ""
        );

        const filterHandlers: Record<
        "price" | "bedrooms" | "bathrooms" | "location",
        (value: string) => Promise<any>
          > = {
          price: async (value: string) => {
            const [min, max] = value.split("-").map(Number);
            return query(
              collection(db, propertyType),
              where("price", ">=", min),
              where("price", "<=", max)
            );
          },
          bedrooms: async (value : string) => 
            query(collection(db, propertyType), where("bedrooms", "==", Number(value))),
      
          bathrooms: async (value: string) => 
            query(collection(db, propertyType), where("bathrooms", "==", Number(value))),
      
          location: async (value: string) => 
            query(collection(db, propertyType), where("location", "in", [value])),
        };

        for (const key of filteredKeys) {
          // const value = filterItem[key];
          let value = filterItem[key];

          // Ensure value is a string before passing it to handler
          if (typeof value === "number") {
            value = value.toString(); // Convert number to string
          }
        
          const handler = filterHandlers[key as keyof typeof filterHandlers];
        
          if (handler) {
            const propertiesQuery = await handler(value);
            const querySnapshot = await getDocs(propertiesQuery);
        
            querySnapshot.docs.forEach((doc) => {
              const data = doc.data(); // Fetch the document data
              if (typeof data === "object" && data !== null) { // Ensure data is an object
                queryConstraints.push({ 
                  id: doc.id,
                   ...data });
              } else {
                console.warn(`Invalid document data for doc ID ${doc.id}:`, data);
              }
            });
          }
        }
        
        console.log(queryConstraints)
        const uniqueConstraints = Array.from(
          new Map(queryConstraints.map((item) => [item.id, item])).values()
        );
        
        console.log(uniqueConstraints, "Filtered query constraints");
        return uniqueConstraints;
        
    } catch (error) {
        console.error("Error fetching filtered properties:", error);
        throw error;
    }
};
