export function formatColor ([h, s, l]) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function hslToHex ([h, s, l]) {
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = Math.round(l * 255);
  } else {
    const hueToRgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = Math.round(hueToRgb(p, q, h / 360 + 1 / 3) * 255);
    g = Math.round(hueToRgb(p, q, h / 360) * 255);
    b = Math.round(hueToRgb(p, q, h / 360 - 1 / 3) * 255);
  }

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export function totallyRandom () {
  // 0
  return {palette: [
    [Math.floor(Math.random() * 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
  ], info: ["Totally random", "Three random colors, no rules applied"]};
}

export function monochromaticTints () {
  // 1 
  const h = getRandomInt(0, 360);
  const s = getRandomInt(0, 100);
  const l = getRandomInt(33, 66);

  return {palette: [
    [h, s, Math.max(0, l - getRandomInt(9, 34))],
    [h, s, l],
    [h, s, Math.min(100, l + getRandomInt(9, 34))]
  ], info: ["Monochromatic tints", "Three colors with the same hue and saturation but the lightness is increased"]};
}

export function monochromaticShades () {
  // 2
  const h = getRandomInt(0, 360);
  const s = getRandomInt(0, 100);
  const l = getRandomInt(33, 66);

  return {palette: [
    [h, s, Math.min(100, l + getRandomInt(9, 34))],
    [h, s, l],
    [h, s, Math.max(0, l - getRandomInt(9, 34))]
  ], info: ["Monochromatic shades", "Three colors with the same hue and saturation but the lightness is decreased"]};
}

export function tightAnalogous() {
  // 3
  const h = getRandomInt(0, 360);
  const s = getRandomInt(0, 100);
  const offset = getRandomInt(15, 30);

  const result = Math.random() < 0.5 ? {palette: [
    [(h + offset) % 360, s, getRandomInt(0, 50)], 
    [h, s, getRandomInt(51, 75)],
    [(h + 360 - offset) % 360, s, getRandomInt(76, 100)]
  ], info: ["Tight analogous", "Three colors with similar hues (15°-30° apart) and the same saturation and lightness."]} :{palette: [
    [(h + 360 - offset) % 360, s, getRandomInt(76, 100)], 
    [h, s, getRandomInt(51, 75)],
    [(h + offset) % 360, s, getRandomInt(10, 50)]
  ], info: ["Tight analogous", "Three colors with similar hues (15°-30° apart), the same saturation and different lightness."]}
  
  return result
}

export function standardAnalogous() {
  // 4
  const h = getRandomInt(0, 360);
  const s = getRandomInt(0, 100);

  const result = Math.random() < 0.5 ? {palette: [
    [(h + 30) % 360, s, getRandomInt(0, 50)], 
    [h, s, getRandomInt(51, 75)],
    [(h + 360 - 30) % 360, s, getRandomInt(76, 100)]
  ], info: ["Standard analogous", "Three colors with similar hues (30° apart) and the same saturation and lightness."]} :{palette: [
    [(h + 360 - 30 ) % 360, s, getRandomInt(76, 100)], 
    [h, s, getRandomInt(51, 75)],
    [(h + 30) % 360, s, getRandomInt(10, 50)]
  ], info: ["Standard analogous", "Three colors with similar hues (30° apart) the same saturation and different lightness."]}
  
  return result
}

export function wideAnalogous() {
  // 5
  const h = getRandomInt(0, 360);
  const s = getRandomInt(0, 100);
  const offset = getRandomInt(30, 60);

  const result = Math.random() < 0.5 ? {palette: [
    [(h + offset) % 360, s, getRandomInt(0, 50)], 
    [h, s, getRandomInt(51, 75)],
    [(h + 360 - offset) % 360, s, getRandomInt(76, 100)]
  ], info: ["Wide analogous", "Three colors with similar hues (30°-60° apart) and the same saturation and lightness."]} :{palette: [
    [(h + 360 - offset) % 360, s, getRandomInt(76, 100)], 
    [h, s, getRandomInt(51, 75)],
    [(h + offset) % 360, s, getRandomInt(10, 50)]
  ], info: ["Wide analogous", "Three colors with similar hues (30°-60° apart), the same saturation and different lightness."]}
  
  return result
}



export function triadic() {
  // 6
  const h = getRandomInt(0, 360);
  const s = getRandomInt(0, 100);

  const result = Math.random() < 0.5 ? {palette: [
    [(h + 120) % 360, s, getRandomInt(0, 50)], 
    [h, s, getRandomInt(51, 75)],
    [(h + 240) % 360, s, getRandomInt(76, 100)]
  ], info: ["Triadic", "Three colors with hues that are evenly spaced around the color wheel (120° apart) the same saturation and different lightness."]} :{palette: [
    [(h + 240) % 360, s, getRandomInt(76, 100)], 
    [h, s, getRandomInt(51, 75)],
    [(h + 120) % 360, s, getRandomInt(10, 50)]
  ], info: ["Triadic", "Three colors with hues that are evenly spaced around the color wheel (120° apart) the same saturation and different lightness."]} 

  return result
}

export function monochromaticTones () {
  // 7 
  const h = getRandomInt(0, 360);
  const s = getRandomInt(33, 44);
  const l = getRandomInt(25, 85);

  return {palette: [
    [h, Math.max(0, s - getRandomInt(20, 34)), l],
    [h, s, l],
    [h, Math.min(100, s + getRandomInt(20, 34)), l]
  ], info: ["Monochromatic tones", "Three colors with the same hue and lightness but the saturation is increased"]};
}

export function randomWarm () {
  // 8
  return {palette: [
    [getRandomInt(0, 120), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [getRandomInt(0, 120), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [getRandomInt(0, 120), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
  ], info: ["Random warm", "Three random warm hues (h = 0°- 120°), no other rules applied"]};
}

export function randomCool () {
  // 9
  return {palette: [
    [getRandomInt(120, 240), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [getRandomInt(120, 240), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [getRandomInt(120, 240), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
  ], info: ["Random cool", "Three random cool hues (h = 120°- 240°), no other rules applied"]};
}

export function randomViolets () {
  // 9
  return {palette: [
    [getRandomInt(240, 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [getRandomInt(240, 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [getRandomInt(240, 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
  ], info: ["Random violets", "Three random violet hues (h = 240°- 360°), no other rules applied"]};
}


export function randomPalette () { 
  const key = getRandomInt(0, 10);
  const generators = [totallyRandom, monochromaticTints, monochromaticShades, tightAnalogous, standardAnalogous, wideAnalogous, triadic, monochromaticTones, randomWarm, randomCool, randomViolets];
  return generators[key]();

}