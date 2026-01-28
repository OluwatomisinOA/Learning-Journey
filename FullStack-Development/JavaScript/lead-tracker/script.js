let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const saveTabBtn = document.getElementById("save-tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

function render(leads) {
  
  let listItems = ""

for (let i = 0; i < leads.length; i++) {

  listItems += `
  <li>
    <a href='${leads[i]}' target='_blank'>${leads[i]}
    </a>
  </li>`

}
  
ulEl.innerHTML = listItems
  
}

inputBtn.addEventListener("click", function () {
  
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)

})

saveTabBtn.addEventListener("click", function () {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { 

    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    }
  )
  
})

deleteBtn.addEventListener("dblclick", function () { 

  localStorage.clear()
  myLeads = []
  render(myLeads)

})
