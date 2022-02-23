import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const defaultInfo = {
  items: [],
  pointsEarned: 0,
  totalUsers: 0,
};

export const useGetLeaderboard = ({ skip, limit, searchTerm }) => {
  const [data, setData] = useState(defaultInfo);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    let url = new URL(`${BASE_URL}/leaderboard`);

    if (searchTerm) {
      url.searchParams.set("search", searchTerm);
    }

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
  }, [skip, limit, searchTerm]);

  return { data, isLoading };
};
