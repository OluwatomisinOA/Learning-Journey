async function updatePost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: "Updated Title",
        body: "This is the new text for the post",
        userId: 1
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error("Could not update post")
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

updatePost();