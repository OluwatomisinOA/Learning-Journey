function getLabelsHtml(text, sender, ...staffObjs) {
  const labelsHtml = staffObjs.map(staffObj => 
    `<div class="container">
      <p>Dear ${staffObj.name},</p>
      <p>${text}</p>
      <p>Best wishes,</p>
      <p>${sender}</p>
    </div>` 
  ).join('')

  return labelsHtml

}

const text = 'Thank you for all your hard work throughout the year! 💝💫'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
  text,
  sender,
  {name: 'Sally' },
  {name: 'Mike' },
  {name: 'Rob' },
  {name: 'Harriet'},
)