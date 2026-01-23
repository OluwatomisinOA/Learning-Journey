function preloadingImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => { resolve(img) });
    img.addEventListener('error', () => { reject('img has not loaded') });
    img.src = url;
    img.alt = "a beautiful scene";
  });
}


try {
  const result = await preloadingImg("https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg")
  console.log(result)
  document.getElementById('img-container').appendChild(result)
} catch (error) {
  console.log(error)
}