import { useEffect, useState } from "react";

const testData = [
  {
    name: "Jamie Kuphal",
    address: "0xDf88bC13F0Cff982B2BA84CD749Ad9ef805E9D2c",
    totalPoints: 617,
  },
  {
    name: "Chad Mueller",
    address: "0x82B13DE6e5d5BFF06aC5A37256fd5A081e216AE1",
    totalPoints: 592,
  },
  {
    name: "Sonya Abbott",
    address: "0x29EC66171E508037c38903ca17300920D4D73F40",
    totalPoints: 589,
  },
  {
    name: "Jermaine Steuber",
    address: "0x50C0020BB0761940440A4ACfD1e53EBe36108e82",
    totalPoints: 582,
  },
  {
    name: "Evelyn Lehner",
    address: "0x2FbFe2f944C8c73216d8Ae20f9d3Aa2BA00Ff96C",
    totalPoints: 579,
  },
  {
    name: "Ms. Rodolfo Davis",
    address: "0x32A704cae2e94E9B2B4af60f5c5F7eF5c6D7A0f7",
    totalPoints: 579,
  },
  {
    name: "Melba Sanford",
    address: "0x04849480a538C3aA148adCc59701b8d0d9dBba2B",
    totalPoints: 575,
  },
  {
    name: "Janice Beier",
    address: "0xBdcf2BC7F68dB05214FF7a785e227C9C93291Bd2",
    totalPoints: 571,
  },
];

export const useGetLeaderboard = () => {
  const [data, setData] = useState(testData);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    fetch(
      "https://api.leaderboard.neptunemutual.com/leaderboard",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return { data };
};
