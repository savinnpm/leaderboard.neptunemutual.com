import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const defaultInfo = {
  items: [],
  skip: 0,
  limit: 1,
  rank: null,
  records: 0,
  totalPoints: 0,
  user: {
    address: "",
    createdAt: "",
    name: "",
    updatedAt: "",
  },
};

export const useAccountInfo = ({ address, skip, limit, searchTerm }) => {
  const [data, setData] = useState(defaultInfo);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!address) {
      return;
    }

    var requestOptions = {
      method: "GET",
    };

    let url = new URL(`accounts/${address}`, BASE_URL);

    if (searchTerm) {
      url.searchParams.set("search", searchTerm);
    }

    if (isNaN(parseInt(skip)) || isNaN(parseInt(limit))) return;

    url.searchParams.set("skip", skip);
    url.searchParams.set("limit", limit);

    setIsLoading(true);
    fetch(url.toString(), requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.data) {
          setData(result.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [address, skip, limit, searchTerm]);

  return { data, isLoading };
};
