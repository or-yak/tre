export function formatColor ([h, s, l]) {
  return `hsl(${h}, ${s}%, ${l}%)`;
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
  return {pallete: [
    [Math.floor(Math.random() * 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    [Math.floor(Math.random() * 360), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
  ], info: ["Totally random", "Three random colors, no rules applied"]};
}