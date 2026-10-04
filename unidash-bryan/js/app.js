const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".view-section");
const pageTitle = document.querySelector("#page-title");
const sidebar = document.querySelector("#sidebar");
const menuButton = document.querySelector("#menu-button");
const quickLinks = document.querySelectorAll("[data-open]");

const labels = {
  dashboard: "Dashboard",
  tasks: "Tareas",
  finance: "Finanzas",
  analytics: "Analítica",
  currency: "Divisas",
  news: "Noticias",
};

function showView(viewName) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === `view-${viewName}`);
  });

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });

  pageTitle.textContent = labels[viewName] ?? "UniDash";
  sidebar.classList.remove("open");
}

navItems.forEach((item) => {
  item.addEventListener("click", () => showView(item.dataset.view));
});

quickLinks.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.open));
});

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
