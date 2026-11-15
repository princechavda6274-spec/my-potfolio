const skills = {
   python: {
    title: "Python<br>Developer",
    tagline: "Simple code that <span>solves problems.</span>",
    desc: "I write clear Python programs and scripts that automate work and handle data.",
    color: "#11a5df",
    tags: ["Python", "OOP", "File handling", "Flask", "Automation scripts"]
  },
  data: {
    title: "Data<br>Engineer",
    tagline: "Raw data in, <span>clean data out.</span>",
    desc: "I build pipelines that collect, clean and store data so it is ready for analysis.",
    color: "#e10af4",
    tags: ["SQL", "Pandas", "ETL pipelines", "Data cleaning", "Apache Spark"]
  }
  
};

const card = document.getElementById("card");
const heroText = document.getElementById("heroText");
const title = document.getElementById("title");
const tagline = document.getElementById("tagline");
const desc = document.getElementById("desc");
const chips = document.getElementById("chips");
const buttons = document.querySelectorAll(".skill");

function renderChips(tags) {
  chips.innerHTML = "";
  tags.forEach(function (t) {
    const s = document.createElement("span");
    s.textContent = t;
    chips.appendChild(s);
  });
}

renderChips(skills.python.tags);

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const data = skills[btn.dataset.skill];

    buttons.forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");

    heroText.classList.add("fade");
    setTimeout(function () {
      title.innerHTML = data.title;
      tagline.innerHTML = data.tagline;
      desc.textContent = data.desc;
      renderChips(data.tags);
      card.style.setProperty("--accent", data.color);
      document.body.style.setProperty("--tint", data.color);
      heroText.classList.remove("fade");
    }, 250);
  });
});