// sets the current active navbar element
let currentNavBarIndex = 0;

const DATA_SOURCE = './navigation.json';

const SELECTORS = {
  navbar: '.navbar',
  navbarItem: '.navbar__item',
};

const CLASSES = {
  active: 'navbar__item--active',
};

const navbar = document.querySelector(SELECTORS.navbar);
const navbarItems = document.querySelectorAll(SELECTORS.navbarItem);

navbarItems.forEach((navBarItem, index) => {
  navBarItem.addEventListener('click', () => moveMarker(index));
});

function moveMarker(targetIndex) {
  if (targetIndex == currentNavBarIndex) return;
  removeTabActive(currentNavBarIndex);
  currentNavBarIndex = targetIndex;
  setTabActive(currentNavBarIndex);
}

function setTabActive(targetIndex) {
  console.log('gonna set ', navbarItems[targetIndex]);
  navbarItems[targetIndex].classList.add(CLASSES.active);
}

function removeTabActive(targetIndex) {
  navbarItems[targetIndex].classList.remove(CLASSES.active);
}
