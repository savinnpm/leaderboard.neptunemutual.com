import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/micah";

function getBackground(seed = "") {
  const hue =
    seed
      .split("")
      .map((x) => x.charCodeAt(x) || -5)
      .reduce((a, b) => a + b, 0) % 360;
  return `hsla(${hue}, 70%, 70%, 0.3)`;
}

export const getAvatarSvg = (seed) => {
  return createAvatar(style, {
    seed,
    baseColor: [
      "#ffebee",
      "#fce4ec",
      "#f3e5f5",
      "#ede7f6",
      "#e8eaf6",
      "#e3f2fd",
      "#e0f7fa",
      "#e0f2f1",
      "#e8f5e9",
      "#f1f8e9",
      "#f9fbe7",
      "#fffde7",
      "#fff8e1",
      "#fff3e0",
      "#fbe9e7",
      "#efebe9",
      "#fafafa",
      "#eceff1",
    ],
    backgroundColor: getBackground(seed),
  });
};
