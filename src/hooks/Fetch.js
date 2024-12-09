import { useQuery, QueryCache } from "react-query";
import axios from "axios";

const apiKey = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;
const apiBase = import.meta.env.VITE_AIRTABLE_API_BASE;

const config = {
  headers: { Authorization: `Bearer ${apiKey}` },
};
const queryCache = new QueryCache();

export const useFetchAllProducts = (offset, pageSize) => {
  const fetchAllProducts = async () => {
    try {
      const params = new URLSearchParams({
        pageSize,
        view: "All Products",
        "sort[0][field]": "Last Modified",
        "sort[0][direction]": "desc",
        ...(offset && { offset }),
      });

      const url = `https://api.airtable.com/v0/${apiBase}/Products?${params.toString()}`;
      const { data } = await axios.get(url, config);
      return data;
    } catch (error) {
      console.error({ error: error.response || error });
    }
  };

  const { status, data, isFetching, refetch } = useQuery(
    ["allProducts", offset],
    () => fetchAllProducts(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
      cache: queryCache,
      staleTime: 1 * 60 * 1000, // 1 minute
      cacheTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  return { status, data, isFetching, refetch };
};
