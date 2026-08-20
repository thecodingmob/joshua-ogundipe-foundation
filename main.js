const btn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");
const logo = document.querySelector(".brand img");
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = logo.src;
document.head.appendChild(favicon);

btn.addEventListener("click", () => nav.classList.toggle("open"));
nav
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
