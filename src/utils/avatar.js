import { createAvatar } from "@dicebear/avatars";
// import * as style from "@dicebear/avatars-bottts-sprites";
import * as style from '@dicebear/micah';


export const getAvatarSvg = (seed) => {
  return createAvatar(style, {
    seed,
    baseColor: ['white','pink','yellow'],
    backgroundColor: '#2a2f61'
    
  });
};
