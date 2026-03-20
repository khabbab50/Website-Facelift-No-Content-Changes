# Palm Beach Shutters & Shades 🌴🪟

Welcome to the official repository for **Palm Beach Shutters & Shades**, a premium window treatment solution provider. This web application is designed to showcase high-end shutters, shades, and blinds while providing a seamless, multi-language experience for a global audience.

## ✨ Features

- **Premium UI/UX**: A modern, elegant design tailored for luxury home services.
- **Internationalization (i18n)**: Full support for 6 languages:
  - 🇺🇸 English
  - 🇧🇩 Bengali (বাংলা)
  - 🇪🇸 Spanish (Español)
  - 🇸🇦 Arabic (العربية)
  - 🇮🇳 Hindi (हिन्दी)
  - 🇨🇳 Chinese (中文)
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.
- **Product Gallery**: Showcasing Plantation Shutters, Motorized Shades, and Designer Blinds.
- **Interactive Consultation Form**: Easy-to-use form for requesting expert consultations.
- **Location Integration**: Integrated maps to find our service areas easily.
- **Animations**: Smooth transitions and entrance animations using `motion`.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) (TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Context API**: For Language and Theme management.

## 📂 Project Structure

```text
src/
├── components/      # Reusable UI components (Header, Footer, Hero, etc.)
├── context/         # Context providers (LanguageContext)
├── pages/           # Page components (Home, Gallery, About, etc.)
├── services/        # External API integrations
├── main.tsx         # Application entry point
└── index.css        # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Language Switching

The application uses a custom `LanguageContext` to manage translations. You can switch languages via the dropdown in the Header. The translations are stored centrally in `src/context/LanguageContext.tsx`.

---

© 2026 Palm Beach Shutters & Shades. All rights reserved.
Providing excellence in Florida for over 20 years.
