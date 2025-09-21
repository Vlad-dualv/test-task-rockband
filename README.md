# Rock Band "Грим та Грім" Website

This is a modern, responsive website for the rock band "Грим та Грім". The
website serves as a platform for fans to learn about the band, view upcoming
concerts, and book tickets.

## Features

- 🎸 **Interactive Band Section** - Learn about band members and their roles
- 🎫 **Concert Tickets** - View upcoming concerts and book tickets with GET
  request functionality
- 📱 **Mobile-Friendly Design** - Fully responsive layout
- 🗺️ **Location Map** - Interactive Google Maps integration showing venue
  location
- 📝 **Contact Form** - GET request form submission for inquiries and bookings
- 🍔 **Mobile Menu** - Smooth mobile navigation with animated transitions

## Tech Stack

- HTML5
- CSS3 (with modern features like Grid, Flexbox)
- JavaScript (Vanilla)
- Vite.js for build and development
- Google Maps API for location display
- HTTPbin.org for API testing

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Vlad-dualv/test-task-rockband.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── css/          # Stylesheets
│   ├── about.css
│   ├── concerts.css
│   ├── contact.css
│   └── ...
├── partials/     # HTML components
│   ├── header.html
│   ├── hero.html
│   ├── concerts.html
│   └── ...
├── img/          # Image assets
└── main.js       # Main JavaScript file
```

## Features in Detail

### Concert Booking

- View available concert dates and venues
- Interactive booking system with visual feedback
- Successful booking confirmation with ticket details

### Contact Form

- Form validation for required fields
- GET request demonstration with query parameters
- Success/error handling with user feedback

### Mobile Menu

- Smooth animations
- Backdrop blur effect
- Prevents scroll when open

## Development

To work on this project:

1. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:

```bash
git add .
git commit -m "Add your feature description"
```

3. Push to your branch:

```bash
git push origin feature/your-feature-name
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to
the main branch.

Visit the live site:
[Грим та Грім Website](https://vlad-dualv.github.io/test-task-rockband/)

## License

This project is part of a test task and is available for educational purposes.

## Author

Created by Vlad-dualv
