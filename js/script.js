const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // deactate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // hide all panels
  panels.forEach((panel) => {
    panel.classList.add("hidden");
  });

  // activate clicked tab and panel
  e.target.classList.add("border-softRed", "border-b-4");
  const panelToShowId = e.target.getAttribute("data-target");
  document.getElementById(panelToShowId).classList.remove('hidden')
}

const btn = document.querySelector('#menu-btn')
const menu = document.querySelector('#menu')
const logo = document.querySelector('#logo')

// Hamburger Btn Listener
btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if(menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}