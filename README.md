# 3D Portfolio

## Overview

This project is a 3D portfolio website built using modern tools and libraries, including:
- **React**: For building interactive user interfaces.
- **React Router**: For navigation between pages.
- **Tailwind CSS**: For styling with utility-first CSS.
- **TypeScript**: For type-safe development.
- **Vite**: For fast development and build tooling.

## Features

- Interactive 3D elements, such as a floating island and a responsive fox.
- Fully responsive design.
- Modern animations and interactions.
- Showcases your skills in web development.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/3d_portfolio.git
   cd 3d_portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn 
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Scripts

The following scripts are available in the project:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run lint`**: Runs ESLint to check for linting issues.
- **`npm run preview`**: Previews the production build locally.

## Technologies Used

### Dependencies

- **React**: For building user interfaces.
- **React DOM**: For rendering React components.
- **React Router DOM**: For client-side routing.

### DevDependencies

- **Vite**: Development and build tool.
- **Tailwind CSS**: Utility-first CSS framework.
- **TypeScript**: Type-safe JavaScript.
- **ESLint**: For linting and code quality.
- **Prettier**: For code formatting.
- **TypeScript Plugin CSS Modules**: For type-safe CSS modules.

## Folder Structure

```
3d_portfolio/
├── public/              # Static assets
├── src/                 # Application source code
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # React components
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Route pages
│   └── App.tsx          # Main app component
├── .eslintrc.config.js         # ESLint configuration
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Customization

- **Styling**: Update the `tailwind.config.js` file for custom themes or colors.
- **3D Interactions**: Add or modify animations and interactions in the `components` folder.

## Contribution

Contributions are welcome! If you have ideas for improvements or find bugs, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

