// Get DOM elements
const mobileMenu = document.querySelector('.mobile-menu-wrapper');
const burgerButton = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.mobile-menu-close-btn');
const menuLinks = document.querySelectorAll('.mobile-menu-link');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.querySelector('.submit-button');
const buyTicketBtns = document.querySelectorAll('.buy-ticket');
const yearOnFooter = document.querySelector('.website-year');

const api = 'https://httpbin.org';

yearOnFooter.textContent = new Date().getFullYear();

initializeSoldOutButtons();

function toggleModal() {
  mobileMenu.classList.toggle('is-open');
  document.body.classList.toggle('modal-open');
}

// SoldOut handling

function initializeSoldOutButtons() {
  const allRows = document.querySelectorAll('.concert-row');

  allRows.forEach(row => {
    const availableTicketsElement = row.querySelector(
      '.concert-available-tickets'
    );
    const button = row.querySelector('.buy-ticket');

    if (availableTicketsElement && button) {
      const availableTickets = parseInt(
        availableTicketsElement.textContent.trim()
      );

      if (availableTickets <= 0) {
        button.textContent = 'Розпродано';
        button.disabled = true;
        button.classList.add('sold-out');
        row.style.opacity = '0.6';
        availableTicketsElement.textContent = 'Розпродано';
        availableTicketsElement.style.color = '#ff4757';
        availableTicketsElement.style.fontWeight = 'bold';
      }
    }
  });
}

// Buy ticket handling

async function buyTicket(e) {
  const button = e.target;
  const row = button.closest('.concert-row');
  const location = row.querySelector('.concert-location').textContent;
  const datetime = row.querySelector('.concert-date').textContent;
  const availableTickets = row.querySelector(
    '.concert-available-tickets'
  ).textContent;

  button.disabled = true;
  button.textContent = 'Обробляємо...';

  try {
    const ticketData = {
      id: crypto.randomUUID().slice(0, 10),
      location: location,
      datetime: datetime,
    };

    const queryString = new URLSearchParams(ticketData).toString();
    const apiUrl = `${api}/get?${queryString}`;

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅Ticket booking successful:', result);
      alert(`🎫 Квиток успішно заброньовано!

        📍 Концерт: ${ticketData.location}
        📅 Дата: ${ticketData.datetime}
        🎟️ Номер бронювання: #${ticketData.id}`);

      button.textContent = '✅ Заброньовано';
      button.style.background = '#4cd964';
      button.style.borderColor = '#4cd964';
      button.disabled = true;
    } else {
      throw new Error('Server responded with an error');
    }
  } catch (error) {
    console.error('❌ Ticket booking error:', error);
    alert(`❌ Помилка при бронюванні квитка!
      Деталі помилки: ${error.message}
      Будь ласка, спробуйте пізніше або зв'яжіться з нами:
📧 booking@grymgrim.com
📞 +38 (099) 123-45-6`);

    button.textContent = 'Купити квиток';
    button.disabled = false;
  }
}

// Form submission handling

contactForm.addEventListener('submit', async e => {
  e.preventDefault();
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Відправляємо... <span class="loading"></span>';
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  const queryString = new URLSearchParams(data).toString();
  const apiUrl = `${api}/get?${queryString}`;

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
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
});

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

buyTicketBtns.forEach(btn => {
  btn.addEventListener('click', buyTicket);
});
