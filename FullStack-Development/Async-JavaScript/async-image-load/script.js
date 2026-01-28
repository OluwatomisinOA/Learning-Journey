function getImagePromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', () => reject(new Error(`Failed to load image: ${url}`)));
      img.src = url;
      img.alt = "";
    }, 500);
  });
}

const images = [
  'https://scrimba.com/links/advancedjs-resources-images-scenic1',
  'https://scrimba.com/links/advancedjs-resources-images-scenic2',
  'https://scrimba.com/links/advancedjs-resources-images-scenic3'
];

async function preloadImages(imageUrlArr) {
  const imgContainer = document.getElementById('img-container');
  const uploadContainer = document.getElementById('upload-container');
  
  try {
    const promises = imageUrlArr.map(url => getImagePromise(url));
    const results = await Promise.all(promises);
    console.log("All images loaded successfully.")
    uploadContainer.style.display = 'none';

    results.forEach(img => {
      imgContainer.appendChild(img)
    })
  } catch (error) {
    console.log(error);
  }
}

document.getElementById('submit-imgs').addEventListener('click', () => preloadImages(images));