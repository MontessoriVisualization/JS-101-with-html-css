const dropdown = document.querySelector(".dropdown");
const NavEvent = document.querySelector(".nav-event");
NavEvent.addEventListener("mouseover", clickEvent);
function clickEvent() {
  dropdown.classList.remove("hidden");
}
NavEvent.addEventListener("mouseout", outEvent);
function outEvent() {
  dropdown.classList.add("hidden");
}
