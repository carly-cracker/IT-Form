document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const python = document.getElementById("python").checked;
    const javascript = document.getElementById("javascript").checked;

    let skills = [];
    if (python) skills.push("Python");
    if (javascript) skills.push("JavaScript");

    let skillText;
    if (skills.length === 0) {
      skillText = "do not code yet";
    } else if (skills.length === 1) {
      skillText = `can code in ${skills[0]}`;
    } else {
      skillText = `can code in ${skills.join(" and ")}`;
    }

    document.getElementById("output").textContent =
      `My name is ${name}, I am ${age} years old and ${skillText}.`;
  });
});
