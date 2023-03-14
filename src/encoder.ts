import {encode} from 'blurhash';
import Image1 from './bg2.jpg';

const loadImage = async (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => { console.log('resolve');
    
      resolve(img);
    }
    img.onerror = (...args) => reject(args); console.log('Image1--',Image1);
    
    img.src = src;
    img.crossOrigin = 'Anonymous';
  });

const getImageData = (image: HTMLImageElement) => {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext('2d');
  if (context) {
    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
  }
  throw Error('There is not canvas context');
};

export const encodeImageToBlurhash = async (imageUrl: string) => {
  const image = await loadImage(imageUrl); console.log('image--',image);
  
  const imageData = getImageData(image);
  if (imageData) return encode(imageData.data, imageData.width, imageData.height, 4, 4);
  throw Error('There is no image data');
};
