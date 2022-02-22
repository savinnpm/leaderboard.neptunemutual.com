import { createAvatar } from "@dicebear/avatars";
// import * as style from "@dicebear/avatars-bottts-sprites";
import * as style from '@dicebear/micah';


const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)
const pickOne = (items) => items[Math.floor(Math.random() * items.length)]
const backgrounds = ['#655D8A', '#9D5353', '#709FB0', '#6EBFB5', '#BAABDA', '#EDC988', '#D8B384', '#7B6079', '#845460', '#B4A5A5', '#A0937D', '#8E9775', '#A7D0CD', '#CA8A8B', '#AD6C80']

function randomHsl() {
  return `hsla(${randomInt(0, 360)}, ${randomInt(0, 33)}%, ${randomInt(75, 100)}%, ${Math.random().toFixed(2)})`;
}

function getBackground(seed = '') {
  const hue = seed.split('').map(x => x.charCodeAt(x) || -5).reduce((a, b) => a + b, 0) % 360
  return `hsla(${hue}, 70%, 70%, 0.6)`;
}

export const getAvatarSvg = (seed) => {
  return createAvatar(style, {
    seed,
    baseColor: ['#ffebee', '#fce4ec', '#f3e5f5', '#ede7f6', '#e8eaf6', '#e3f2fd', '#e0f7fa', '#e0f2f1', '#e8f5e9', '#f1f8e9', '#f9fbe7', '#fffde7', '#fff8e1', '#fff3e0', '#fbe9e7', '#efebe9', '#fafafa', '#eceff1'],
    backgroundColor: getBackground(seed)
  });
};