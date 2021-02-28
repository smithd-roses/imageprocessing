const fetch = require("node-fetch");

module.exports = async function downloadImage(url) {
  console.log(url);
  if (!url) throw new Error('Provide url');
  try {
    const options = { headers: { accept: 'image/x-png' } };
    const response = await fetch(url, options);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return buffer;
  } catch (error) {
    throw new Error('Cannot download image');
  }
};