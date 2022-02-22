import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-bottts-sprites";

export const getAvatarSvg = (seed) => {
  return createAvatar(style, {
    seed,
  });
};
