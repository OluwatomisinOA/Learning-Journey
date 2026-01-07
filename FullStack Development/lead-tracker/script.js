let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const saveTabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")

const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()

})

function renderLeads() {
  
  let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
  // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"

  listItems += `
  <li>
    <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}
    </a>
  </li>`

  // or
  // const li = document.createElement('li')
  // li.textContent = myLeads[i]
  // ulEl.append(li)
}
  
ulEl.innerHTML = listItems
  
}

saveTabBtn.addEventListener ("click", function () { 

  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      if (tabs && tabs[0] && tabs[0].url) {
        myLeads.push(tabs[0].url)
        renderLeads()


        const originalText = saveTabBtn.textContent
        saveTabBtn.textContent = "SAVED!"
        setTimeout(() => {
          saveTabBtn.textContent = originalText
        }, 1000)
      }
    }
  )

})

deleteBtn.addEventListener("click", function () {
  if (myLeads.length === 0) {
    return
  }
  if (confirm("Are you sure you want to delete all leads?")) {
    myLeads = []
    renderLeads()

    deleteBtn.textContent = "DELETED!"
    deleteBtn.style.backgroundColor = "red"
    setTimeout(() => {
      deleteBtn.style.backgroundColor = "#5f9341"
    }, 1000)
    setTimeout(() => {
      deleteBtn.textContent = "DELETE ALL"
    }, 1000)
  }
})
