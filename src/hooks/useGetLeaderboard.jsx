import { useEffect, useState } from "react";

export const useGetLeaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    fetch(
      "https://api.leaderboard.neptunemutual.com/leaderboard",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.data.items))
      .catch((error) => console.log("error", error));
  }, []);

  return { data };
};
