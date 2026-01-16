import { v2 as cld } from 'cloudinary';

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  throw new Error('Cloudinary configuration variables are missing.');
}

const cloudinary = cld.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

export default cloudinary;
//   (async function () {
//   // Configuration
//   cloudinary.config({
//     cloud_name: 'xxx',
//     api_key: 'xxxx',
//     api_secret: '<your_api_secret>', // Click 'View API Keys' above to copy your API secret
//   });

//   // Upload an image
//   const uploadResult = await cloudinary.uploader
//     .upload(
//       'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
//       {
//         public_id: 'shoes',
//       }
//     )
//     .catch((error) => {
//       console.log(error);
//     });

//   console.log(uploadResult);

//   // Optimize delivery by resizing and applying auto-format and auto-quality
//   const optimizeUrl = cloudinary.url('shoes', {
//     fetch_format: 'auto',
//     quality: 'auto',
//   });

//   console.log(optimizeUrl);

//   // Transform the image: auto-crop to square aspect_ratio
//   const autoCropUrl = cloudinary.url('shoes', {
//     crop: 'auto',
//     gravity: 'auto',
//     width: 500,
//     height: 500,
//   });

//   console.log(autoCropUrl);
// })();
