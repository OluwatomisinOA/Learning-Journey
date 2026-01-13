function uploadFile() {
  return new Promise((resolve, reject) => { 
    console.log('Step 1: Uploading file...')
  setTimeout(() => {
    resolve()
  }, 1000)
})
}


function processFile(callback) {
  return new Promise((resolve, reject) => {
    console.log('Step 2: Processing file...')
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

function notifyUser(callback) {
  return new Promise((resolve, reject) => {
    console.log('Step 3: Notifying file...')
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

try {
  await uploadFile()
  await processFile()
  await notifyUser()
  console.log('All steps completed')
} catch (error) {
  console.log(error)
}