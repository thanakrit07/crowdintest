# crowdintest

A simple React application with internationalization (i18n) support for testing integration between Crowdin and GitHub.

## Features

- ✅ **Multi-language support**: English (en-US) and Thai (th-TH)
- ✅ **Modern UI**: Built with Mantine UI components
- ✅ **Internationalization**: Using i18next and react-i18next
- ✅ **TypeScript**: Full TypeScript support
- ✅ **Language Detection**: Automatic language detection and localStorage persistence
- ✅ **Vite**: Fast development and build with Vite

## Screenshots

### English Version (en-US)
![English Version](https://github.com/user-attachments/assets/19f63155-6d47-4ae5-86f9-829ad320031c)

### Thai Version (th-TH)
![Thai Version](https://github.com/user-attachments/assets/2e8e8232-30db-4818-9233-f520baa16a6f)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thanakrit07/crowdintest.git
cd crowdintest
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build the application for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

### Lint

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
crowdintest/
├── src/
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── i18n.ts          # i18next configuration and translations
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Public assets
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Technologies Used

- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **i18next**: Internationalization framework
- **react-i18next**: React bindings for i18next
- **Mantine**: React components library
- **Tabler Icons**: Icon library for Mantine

## Adding New Languages

To add a new language:

1. Open `src/i18n.ts`
2. Add a new language object in the `resources` constant:
```typescript
'language-code': {
  translation: {
    // your translations
  }
}
```
3. Add the language code to `supportedLngs` array
4. Update the language selector in `src/App.tsx`

## License

This project is for testing purposes.

