// fetch("https://codeforces.com/settings/api")
//   .then(response => response.json())
//   .then(data => comsole.log(data))
//   .catch(err => {
//     console.log(err)
//     throw new Error("can't access api")
//   })
//   .finally(() => console.log("operation completed."))

// Using async/await, handling errors with "try/catch" blocks, and add "finally" block
  
// try {
//   const response = await fetch("https://codeforces.com/settings/api")
//   if (!response.ok) {
//     throw new Error("There was a problem with the api.")
//   }
//   const data = await response.json()
//   console.log(data)
// } catch (err) {
//   console.log(err)
// } finally {
//   console.log("operation completed")
// }


try {

  const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  if (!response.ok) {
    throw new Error("There was a proble with the api.")
  }
  const data = await response.json()
  
  const htmlString = data.map(post => {
    return `
    <div class="post-card">
      <h3>${post.title}</h3>
      <p>UserId: ${post.userId}</p>
      <p>id: ${post.id}</p>
      <p>${post.body}</p>
    </div>
    `
  }).join('')
  document.getElementById("container").innerHTML = htmlString
  console.log(data)

} catch (err) {
  console.log(err)
} finally {
  console.log("operation completed.")
}

