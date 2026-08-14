const Jimp = require('jimp');
const path = require('path');

const input = path.join(__dirname, '..', 'public', 'logo.png');
const output = input; // overwrite

// tuning parameters
const WHITE_THRESH = 245; // pixel considered "white" if r,g,b >= WHITE_THRESH
const BLUR_RADIUS = 6; // larger = more smoothing, removes smaller particles
const MASK_CUTOFF = 180; // after blur, mask values above this will be made transparent

(async () => {
  try {
    const image = await Jimp.read(input);
    const { width, height } = image.bitmap;

    // Create a mask: white where pixels are near-white, black otherwise
    const mask = new Jimp(width, height, (err, m) => {});

    image.scan(0, 0, width, height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];

      const isWhite = a !== 0 && r >= WHITE_THRESH && g >= WHITE_THRESH && b >= WHITE_THRESH;
      const col = isWhite ? 0xffffffff : 0x000000ff; // white or black
      mask.setPixelColor(col, x, y);
    });

    // Blur the mask to smooth and reduce small specks
    mask.blur(BLUR_RADIUS);

    // Apply mask: if blurred mask pixel is bright (above MASK_CUTOFF), set original alpha to 0
    mask.scan(0, 0, width, height, function (x, y, idx) {
      const mR = this.bitmap.data[idx + 0];
      const mG = this.bitmap.data[idx + 1];
      const mB = this.bitmap.data[idx + 2];
      // mask is grayscale white/black, so take red channel
      const brightness = mR; // 0-255

      const iIdx = image.getPixelIndex(x, y);
      if (brightness >= MASK_CUTOFF) {
        image.bitmap.data[iIdx + 3] = 0; // make transparent
      }
    });

    await image.writeAsync(output);
    console.log('Logo conversion (smoothed) complete:', output);
  } catch (err) {
    console.error('Logo conversion failed:', err);
    process.exit(1);
  }
})();
