import { useQuery } from "react-query";
import axios from "axios";

const apiKey = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;
const apiBase = import.meta.env.VITE_AIRTABLE_API_BASE;

// FETCH ALL PRODUCTS
export const useFetchAllProducts = (offset = "", pageSize = 10) => {
  const fetchAllProducts = async () => {
    const config = {
      headers: { Authorization: `Bearer ${apiKey}` },
    };
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/${apiBase}/Products?pageSize=${pageSize}&offset=${offset}`,
        config
      );

      // Map the records array to extract the fields
      console.log(data.records);
      return data.records.map((record) => record.fields);
    } catch (error) {
      console.error(
        "Error fetching data: ",
        error.response?.data || error.message
      );
      throw error;
    }
  };

  return useQuery(["allProducts", offset], fetchAllProducts, {
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    keepPreviousData: true,
    staleTime: 1 * 60 * 1000, // 1 minute
    cacheTime: 5 * 60 * 1000, // 5 minutes
  });
};
