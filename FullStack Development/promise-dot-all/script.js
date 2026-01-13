function createPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5
    if (success) {
      resolve('Operation Successful')
    } else {
      reject('Operation failed')
    }
  })
}

// promise.then(response => console.log(response))

// or
try {
  const promise1 = createPromise()
  const promise2 = createPromise()
  const promise3 = createPromise()
  const response = await Promise.all([promise1, promise2, promise3])
  console.log(response)
} catch(err) {
  console.log(err)
}