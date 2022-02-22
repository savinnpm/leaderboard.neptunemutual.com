import { useEffect, useState } from "react";

const defaultInfo = {
  items: [],
  pointsEarned: 0,
  totalUsers: 0,
};

export const useGetLeaderboard = ({ searchTerm }) => {
  const [data, setData] = useState(defaultInfo);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    let searchParams = new URLSearchParams("");

    if (searchTerm) {
      searchParams.set("search", searchTerm);
    }

    let url = `https://api.leaderboard.neptunemutual.com/leaderboard`;

    if (searchParams.toString()) {
      url = `${url}?${searchParams.toString()}`;
    }

    console.log(url);

    setIsLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, [searchTerm]);

  return { data, isLoading };
};
