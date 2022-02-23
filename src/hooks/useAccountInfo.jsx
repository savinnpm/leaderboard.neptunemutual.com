import { useEffect, useState } from "react";

const defaultInfo = {
  items: [],
  pointsEarned: 0,
  totalUsers: 0,
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

    let url = new URL(
      `https://api.leaderboard.neptunemutual.com/accounts/${address}`
    );

    if (searchTerm) {
      url.searchParams.set("search", searchTerm);
    }

    url.searchParams.set("skip", skip);
    url.searchParams.set("limit", limit);

    setIsLoading(true);
    fetch(url.toString(), requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [address, skip, limit, searchTerm]);

  return { data, isLoading };
};
