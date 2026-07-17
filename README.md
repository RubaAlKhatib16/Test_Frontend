# EPYA Contact Setting — Front-End Assignment

A pixel-perfect, responsive Angular implementation of the "Contact Setting" page based on the provided Figma design.

**Live Demo:** https://jolly-pothos-468733.netlify.app/

## Tech Stack

- Angular 22 (standalone components)
- TypeScript
- SCSS
- Bootstrap 5.3 (components & utility classes)
- Bootstrap Icons
- Vitest (unit testing)

## Prerequisites

Before running this project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/) — **v22.22.3+, v24.15.0+, or v26.x** (required by Angular 22 — earlier versions, including v18/v20, are not supported)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)
- [Angular CLI](https://angular.dev/tools/cli) (installed globally)

To install Angular CLI globally, run:

```bash
npm install -g @angular/cli
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/RubaAlKhatib16/Test_Frontend.git
cd Test_Frontend
```

2. Install project dependencies:

```bash
npm install
```

## Running the Application Locally

Start the development server:

```bash
ng serve
```

Then open your browser and navigate to:

```
http://localhost:4200
```

The application will automatically reload if you change any of the source files.

## Building for Production

To create a production build:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

```bash
ng test
```

This runs the project's unit tests using Vitest.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── main-nav-rail/       # Left-side vertical navigation
│   │   ├── sidebar-profile/     # Contact profile sidebar card
│   │   ├── topbar/              # Top navigation bar
│   │   ├── stat-card/           # Reusable statistic cards
│   │   ├── field-configuration/ # Name field configuration section
│   │   ├── privacy-settings/    # Privacy settings section
│   │   ├── view-preview/        # Preview mode selector
│   │   └── contacts-table/      # Related contacts data table
│   ├── pages/
│   │   └── contact-setting/     # Main page composing all components
│   ├── app.ts
│   ├── app.html
│   └── app.scss
├── styles.scss                  # Global styles & Bootstrap imports
public/
└── images/                      # Static assets (avatars, icons)
```

## Key Features

- **Responsive Design:** Fully responsive layout across desktop, tablet, and mobile breakpoints using CSS Grid, Flexbox, and media queries.
- **Reusable Components:** UI is broken down into standalone, reusable Angular components to avoid duplication.
- **Bootstrap Integration:** Uses Bootstrap utility classes and components alongside custom SCSS for consistent styling.
- **RTL/LTR Ready:** Layout structured to support both English (LTR) and Arabic (RTL) content, with contact names and details displayed bilingually.
- **Scalable SCSS Structure:** Each component has its own scoped stylesheet following BEM-like naming conventions.

## Notes

This assignment focuses on front-end implementation only — no backend/API integration was required per the assignment scope. All contact data shown in the table is static/mock data for demonstration purposes.