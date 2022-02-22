import { useEffect, useState } from "react";

const defaultInfo = {
  items: [],
  pointsEarned: 0,
  totalUsers: 0,
};

export const useGetLeaderboard = () => {
  const [data, setData] = useState(defaultInfo);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    fetch(
      "https://api.leaderboard.neptunemutual.com/leaderboard",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return { data };
};
