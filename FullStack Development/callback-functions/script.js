function notifyUser(notificationFn) {
  notificationFn()
}

const emailNotification = () => console.log('Email sent.')
const smsNotification = () => console.log('Sms sent.')

notifyUser(emailNotification)
notifyUser(smsNotification)