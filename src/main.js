// Get DOM elements
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const burgerButton = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.mobile-menu-close-btn');
const menuLinks = document.querySelectorAll('.mobile-menu-link');
const contactForm = document.getElementById('contactForm');

function toggleModal() {
  mobileMenu.classList.toggle('is-open');
  document.body.classList.toggle('modal-open');
}

// Event Listeners
burgerButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

menuLinks.forEach(link => {
  link.addEventListener('click', toggleModal);
});

mobileMenu.addEventListener('click', e => {
  if (e.target === mobileMenu) {
    toggleModal();
  }
});

// Form submission handling

contactForm.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name').trim(),
    email: formData.get('email').trim(),
    message: formData.get('message').trim(),
  };

  const queryString = new URLSearchParams(data).toString();
  const apiUrl = `https://httpbin.org/get?${queryString}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    });
    if (response.ok) {
      console.log(data);
      alert('Дякуємо! Ваше повідомлення успішно надіслано.');
      contactForm.reset();
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Вибачте, сталася помилка при відправці форми. Спробуйте пізніше.');
  }
});
