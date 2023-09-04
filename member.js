function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberTab = document.getElementById("memberTab");
    var skillsTab = document.getElementById("skillsTab");
    var projectsTab = document.getElementById("projectsTab");
    var contactTab = document.getElementById("contactTab");
    var aboutTab = document.getElementById("aboutTab");
    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
    memberTab.style.backgroundColor = "#2b2b2b";
    skillsTab.style.backgroundColor = "#1f1f1f";
    projectsTab.style.backgroundColor = "#1f1f1f";
    contactTab.style.backgroundColor = "#1f1f1f";
    aboutTab.style.backgroundColor = "#1f1f1f";
}