const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5
  if (success) {
    resolve('Operation Successful')
  } else {
    reject('Operation failed')
  }
})

// promise.then(response => console.log(response))

// or
try {
  const response = await promise
  console.log(promise)
} catch(err) {
  console.log(err)
}