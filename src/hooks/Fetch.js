import { useQuery } from "react-query";
import axios from "axios";

const apiKey = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;
const apiBase = import.meta.env.VITE_AIRTABLE_API_BASE;

const config = {
  headers: { Authorization: `Bearer ${apiKey}` },
};
const queryCache = new QueryCache();
// FETCH ALL COVERS
export const useFetchAllCovers = (offset, pageSize, searchTerm) => {
  const fetchAllCover = async () => {
    try {
      const { data } = await axios.get(
        `https://api.airtable.com/v0/${apiBase}/Covers?pageSize=${pageSize}&view=All%20Covers&filterByFormula=SEARCH(%22${searchTerm}%22%2C%7BAlbum%7D)&sort%5B0%5D%5Bfield%5D=Last%20Modified&sort%5B0%5D%5Bdirection%5D=desc&offset=${offset}
        `,
        config
      );
      return data;
    } catch (error) {
      console.log({ error: error.response || error });
    }
  };

  const { status, data, isFetching, refetch } = useQuery(
    ["allCovers", searchTerm, offset],
    () => fetchAllCover(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
      // refetchInterval: 1000,
      cache: queryCache,
      staleTime: 1 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    }
  );
  return { status, data, isFetching, refetch };
};

export const useFetchSearch = (offset, searchTerm) => {
  const url = `https://api.airtable.com/v0/${apiBase}/Products`;

  // Search parameters
  const searchName = `SEARCH("${searchTerm}", {Name})`;
  const searchCategory = `SEARCH("${searchTerm}", {Category})`;
  const searchSubcategory = `SEARCH("${searchTerm}", {Subcategory})`;

  // Combine search conditions
  const searchConditions = `OR(${searchName}, ${searchCategory}, ${searchSubcategory})`;

  // Final query construction
  const query = `?filterByFormula=${searchConditions}`;
  const link = `${url}${query}`;

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(link, config);
      return data;
    } catch (error) {
      console.log({ error: error.response || error });
    }
  };

  const { status, data, isFetching, refetch } = useQuery(
    ["allSearches", searchTerm, offset],
    () => fetchSearch(),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      keepPreviousData: true,
    }
  );
  return { status, data, isFetching, refetch };
};
