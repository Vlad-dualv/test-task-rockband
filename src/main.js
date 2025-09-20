// Get DOM elements
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const burgerButton = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.mobile-menu-close-btn');
const menuLinks = document.querySelectorAll('.mobile-menu-link');

// Function to toggle modal and scroll
function toggleModal() {
  mobileMenu.classList.toggle('is-open');
  document.body.classList.toggle('modal-open');
}

// Event Listeners
burgerButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

// Close modal when clicking on menu links
menuLinks.forEach(link => {
  link.addEventListener('click', toggleModal);
});

// Close modal when clicking outside
mobileMenu.addEventListener('click', e => {
  if (e.target === mobileMenu) {
    toggleModal();
  }
});
