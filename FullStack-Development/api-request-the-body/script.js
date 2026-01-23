try {
  const response = await fetch("https://apis.scrimba.com/jsonplaceholder/posts", 
    {
      method: 'POST',
      body: JSON.stringify({
        title: 'Holiday Nightmares',
        body: 'When iwas kidnapped in Scotland...',
        userId: 100
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  if (!response.ok) {
    throw new Error('There was a problem with the API')
  }
  const data = await response.json()
  console.log(data)
} catch (err) {
  console.log(err)
}