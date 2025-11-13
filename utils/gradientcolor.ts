const hexToRgb = (hex) => {
  const bigint = parseInt(hex.replace('#', ''), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};

const rgbToHex = (r, g, b) => {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
  );
};

export const getGradientColorAt = (percentage, stops) => {
  // Find the two stops that surround the percentage
  for (let i = 0; i < stops.length - 1; i++) {
    const start = stops[i];
    const end = stops[i + 1];
    if (percentage >= start.stop && percentage <= end.stop) {
      const t = (percentage - start.stop) / (end.stop - start.stop);
      const startRGB = hexToRgb(start.color);
      const endRGB = hexToRgb(end.color);
      const r = startRGB.r + (endRGB.r - startRGB.r) * t;
      const g = startRGB.g + (endRGB.g - startRGB.g) * t;
      const b = startRGB.b + (endRGB.b - startRGB.b) * t;
      return rgbToHex(r, g, b);
    }
  }
  return stops[stops.length - 1].color;
};
