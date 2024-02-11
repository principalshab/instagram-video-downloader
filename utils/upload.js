// const cloudinary = require('cloudinary').v2; // Assuming you have the Cloudinary Node.js SDK installed
// import cloudinary from 'cloudinary';

// export const uploadToCloudinary = async (content) => {
//   cloudinary.config({
//     cloud_name: 'instasaver',
//     api_key: '177949736225313',
//     api_secret: '3Y_MhJ6SNgGuHJxr33SpJxK-aJA',
//   });

//   try {
//     const result = await cloudinary.uploader.upload(content, {
//       resource_type: 'auto',
//     });
//     console.log(result)
//     return result.secure_url;
//   } catch (error) {
//     console.error("Error uploading to Cloudinary:", error);
//   }
// };

//test data

// export const getData = async (url, type) => {
//   try {
//     let apiUrl = `https://instagram-media-downloader.p.rapidapi.com/rapid/post.php?url=${url}`;
//     if (type == 'story') {
//       apiUrl = `https://instagram-media-downloader.p.rapidapi.com/rapid/stories.php?url=${url}`;
//     }
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
//         'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
//       }
//     };

//     const response = await fetch(apiUrl, options);
//     if (response.ok) {
//       const result = await response.text();
//       let data = JSON.parse(result);

//       console.log('result::::::::::::::::',result);
//       // If video, reel, igtv, story
//       if (type == 'video' || type == 'reel' || type == 'igtv' || type == 'story') {
//         let imageData = await uploadToCloudinary(data.image);
//         let videoData = await uploadToCloudinary(data.video);
//         let downloadedData = {
//           image: imageData,
//           video: videoData
//         }
//         return downloadedData;
//       }

//       // If single image
//       if (type == 'photo') {
//         let imageData = await uploadToCloudinary(data.image);
//         let downloadedData = {
//           image: imageData,
//         }
//         return downloadedData;
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }


export const getData = async (url, type) => {
  try {
    let apiUrl = `https://instagram-media-downloader.p.rapidapi.com/rapid/post.php?url=${url}`;
    if (type == 'story') {
      apiUrl = `https://instagram-media-downloader.p.rapidapi.com/rapid/stories.php?url=${url}`;
    }
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
      }
    };

    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const result = await response.json();

      console.log('result::::::::::::::::', result);

      // If video, reel, igtv, story
      if (type == 'video' || type == 'reel' || type == 'igtv' || type == 'story') {
        let imageData = await uploadToCloudinary(result.image);
        let videoData = await uploadToCloudinary(result.video);
        let downloadedData = {
          image: imageData,
          video: videoData
        }
        return downloadedData;
      }

      // If single image
      if (type == 'photo') {
        if (result.image) {
          let imageData = await uploadToCloudinary(result.image);
          let downloadedData = {
            image: imageData,
          }
          return downloadedData;
        }
      }

      // If multiple images
      if (Object.keys(result).length > 1) {
        let uploadedImages = [];
        for (let key in result) {
          if (key !== 'caption') {
            let imageData = await uploadToCloudinary(result[key]);
            uploadedImages.push(imageData);
          }
        }
        return { images: uploadedImages, caption: result.caption };
      }
    }
  } catch (error) {
    console.error(error);
  }
}

const uploadToCloudinary = async (dataUrl) => {
  try {
    const fd = new FormData();
    fd.append('upload_preset', import.meta.env.VITE_CLOUDINARY_PRESET);
    fd.append('file', dataUrl);
    const response = await fetch(import.meta.env.VITE_CLOUDINARY_API_URL, {
      method: 'POST',
      body: fd,
    })
    const data = await response.json()
    return data;
  } catch (error) {
    console.error('Server Error : ', error);
  }
}
