const sharp = require("sharp");

module.exports = async function processImage(img, options = { frame: { width: 640, height: 480 } }) {
  try {
    return sharp(img)
      .resize({
        width: options.frame.width,
        height: options.frame.height,
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toBuffer();
  } catch (err) {
    throw new Error('Image cannot be processed');
  }
};