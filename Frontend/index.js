// Models and Templates

class Bug {
  constructor(bugId, header, description, userId, status, completebyDate) {
    this.bugId = bugId;
    this.header = header;
    this.description = description;
    this.userId = userId;
    this.status = status;
    this.completebyDate = completebyDate;
  }
}

class User {
  constructor(userId, permission, username) {
    this.userId = userId;
    this.permission = permission;
    this.username = username;
  }
}

const bugTemplate = `<div class="bug"><div class="bug-header"><%%></div><div class="bug-description"><%%></div><div class="assigned-to"><%%></div><div class="status"><%%></div><div class="completeby-date"><%%></div></div>`;
const UserTemplate = `<option value="<%%>"><%%></option>`;

// Data Fetchers

function getUsers() {
  const requestUrl = "http://localhost:3000/users";
  fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      let allUsersArray = [];
      data.forEach((user) => allUsersArray.push(user.username));
      fillAssignees(allUsersArray);
    });
}

function getBugs() {
  const requestUrl = "http://localhost:3000/bugs";
  fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => {
      fillBugs(data);
    });
}

// Fill in DOM

function fillBugs(allBugsArray) {
  let allBugs = "";
  for (let bug of allBugsArray) {
    let sampleBugTemplate = bugTemplate;
    for (let field in bug) {
      sampleBugTemplate = sampleBugTemplate.replace("<%%>", bug[field]);
    }
    allBugs += sampleBugTemplate;
  }
  document.querySelector(".bugs").innerHTML = allBugs;
}

function fillAssignees(allUsersArray) {
  let allUsers = "";
  for (let Users of allUsersArray) {
    let sampleUserTemplate = UserTemplate;
    allUsers += sampleUserTemplate.replaceAll("<%%>", Users);
  }
  document.querySelectorAll("#assign-to").forEach((x) => {
    x.innerHTML = allUsers;
  });
}

function navigateTo(route) {}
