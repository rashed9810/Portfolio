# Portfolio Project

This is a **React.js Portfolio Project** showcasing a Full Stack Developer and AI Engineer. The portfolio includes sections for hero content, skills, and interactive features such as light/dark mode toggle and skill card animations.

## Features

- **Responsive Design**: Ensures optimal viewing experience on various devices.
- **Light/Dark Mode**: Toggle between light and dark themes.
- **Hero Section**: Displays an introduction with the developer's title and call-to-action buttons.
- **Skills Section**: Categorized technical expertise with animations.
- **Framer Motion Integration**: Adds smooth animations for better user experience.

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Portfolio.jsx
│   │   ├── SkillCard.jsx
│   │   └── Navbar.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── index.js
│   └── assets/
│       └── images/
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── package-lock.json
```

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js v16 or above
- npm v7 or above
- A code editor like VS Code

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install additional packages:

   ```bash
   npm install framer-motion
   ```

## Usage

To start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## Technologies Used

- **React.js**: Component-based frontend library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React

## Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production.

## Customization

- **Light/Dark Mode**: Toggle logic is implemented using `useState` and Tailwind CSS classes.
- **Skills Section**: Add or modify skills in the `skills` object inside `Portfolio.jsx`.
- **Hero Section**: Edit the introductory content and call-to-action buttons in `Portfolio.jsx`.

## Deployment

1. Build the app:

   ```bash
   npm run build
   ```

2. Deploy the `build/` directory to a hosting platform like Netlify, Vercel, or GitHub Pages.

## Screenshots

![Light Mode](./screenshots/light-mode.png)
![Dark Mode](./screenshots/dark-mode.png)

## License

This project is licensed under the MIT License. Feel free to use and modify it.

---

Happy coding! 🚀
