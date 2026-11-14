const skills = {
  frontend: {
    title: "Frontend<br>Developer",
    tagline: "Clean code should feel <span>effortless.</span>",
    desc: "I build fast, simple and good looking pages that people enjoy using.",
    color: "#22d3ee",
    tags: ["HTML", "CSS", "JavaScript", "Responsive design", "Git"]
  },
  python: {
    title: "Python<br>Developer",
    tagline: "Simple code that <span>solves problems.</span>",
    desc: "I write clear Python programs and scripts that automate work and handle data.",
    color: "#fbbf24",
    tags: ["Python", "OOP", "File handling", "Flask", "Automation scripts"]
  },
  data: {
    title: "Data<br>Engineer",
    tagline: "Raw data in, <span>clean data out.</span>",
    desc: "I build pipelines that collect, clean and store data so it is ready for analysis.",
    color: "#34d399",
    tags: ["SQL", "Pandas", "ETL pipelines", "Data cleaning", "Apache Spark"]
  },
  fullstack: {
    title: "Full Stack<br>Developer",
    tagline: "From idea to <span>live website.</span>",
    desc: "I connect what you see on the page with Python and a database behind it.",
    color: "#f472b6",
    tags: ["HTML & CSS", "JavaScript", "Python", "Flask", "SQL"]
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

renderChips(skills.frontend.tags);

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