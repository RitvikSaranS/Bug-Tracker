bugTemplate = `<div class="bug"><div class="bug-header"><%%></div><div class="bug-description"><%%></div><div class="assigned-to"><%%></div></div>`;
assigneeTemplate = `<option value="<%%>"><%%></option>`;

// allBugsArray = [
//   {
//     bugHeader: "Missing Header",
//     bugDescription: "The header is missing in the home page",
//     assignedTo: "Shyam",
//   },
//   {
//     bugHeader: "Missing Footer",
//     bugDescription: "The footer is missing in the home page",
//     assignedTo: "Sarang",
//   },
//   {
//     bugHeader: "Missing Sidebar",
//     bugDescription: "The sidebar is missing in the home page",
//     assignedTo: "Ritvik",
//   },
// ];

// allAssigneeArray = ["Sarang", "Shyam", "Ritvik", "Athul"];

function getUsers() {
  const requestUrl = "http://localhost:3000/users";
  fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function getBugs() {
  const requestUrl = "http://localhost:3000/bugs";
  fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

function fillBugs() {
  let allBugs = "";
  for (let bug of allBugsArray) {
    let sampleBugTemplate = bugTemplate;
    for (let field in bug) {
      sampleBugTemplate = sampleBugTemplate.replace("<%%>", bug[field]);
    }
    allBugs += sampleBugTemplate;
  }
  document.querySelector(".bugs").innerHTML = allBugs;
  fillAssignees();
}

function fillAssignees() {
  let allAssignees = "";
  for (let assignee of allAssigneeArray) {
    allAssignees += assigneeTemplate.replaceAll("<%%>", assignee);
  }
  document.querySelectorAll("#assign-to").forEach((x) => {
    x.innerHTML = allAssignees;
  });
}

function navigateTo(route) {}
