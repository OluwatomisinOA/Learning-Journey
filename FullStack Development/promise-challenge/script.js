function preloading(url) {
  return result = new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.alt = ""
    img.addEventListener('load', () => resolve(img))
    img.addEventListener('error', () => reject('img has not loaded'))
  })
}


try {
  const result = await preloading("https://scrimba.ans3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg")
  console.log(result)
  document.getElementById('img-container').appendChild(result)
} catch (error) {
  console.log(error)
}