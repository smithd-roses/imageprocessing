const streamBuffers = require('stream-buffers');
const { downloadImage, processImage } = require('./utils');

module.exports = async function passImage(url){
  let img = await downloadImage(url);
  let buffer = await processImage(img);
  var processedImgStream = new streamBuffers.ReadableStreamBuffer({ frequency: 10, chunkSize: 2048 }); 
  processedImgStream.put(buffer);
  return processedImgStream;
};