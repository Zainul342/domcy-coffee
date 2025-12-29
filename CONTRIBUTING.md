# Contributing to Domcy Coffee

Welcome to the Domcy Coffee engineering team! We follow strict Clean Code principles to maintain a high-quality codebase. Please follow these guidelines.

## 🛠 Prerequisites

- Node.js (Latest LTS recommended)
- VS Code (Recommended editor)
- Git

## 💻 Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Code Quality:** ESLint + Prettier

## 📏 Clean Code Standards

We use automated tooling to enforce code quality.

### 1. Formatting (Prettier)
All code must be formatted using Prettier.
- **Single Quotes:** `'` instead of `"`
- **Semicolons:** Always use semicolons `;`
- **Trailing Commas:** Required for multiline arrays/objects.

**VS Code Setup:**
1. Install **Prettier - Code formatter** extension.
2. Ensure `.vscode/settings.json` is active (auto-formats on save).

### 2. Linting (ESLint)
We use ESLint 9 with strict TypeScript rules.
- **No `any`:** Avoid using `any` type. Define interfaces/types.
- **No Console Logs:** Remove `console.log` before committing. (`console.warn` and `console.error` are allowed).
- **Unused Variables:** Variables defined but not used will throw a warning. Prefix with `_` if intentional (e.g., `_req`).

## 🚀 Common Commands

```bash
# Install dependencies (use legacy-peer-deps if issues arise)
npm install --legacy-peer-deps

# Start Dev Server
npm run dev

# Format all files (Auto-fix style issues)
npm run format

# Check for code quality mistakes
npm run lint

# Auto-fix linting mistakes
npm run lint:fix

# Build for Production
npm run build
```

## 🤝 Workflow

1. Create a new branch for your feature (`feat/login-page` or `fix/navbar-bug`).
2. Write clean, self-documenting code.
3. Run `npm run format` and `npm run lint` before committing.
4. Push and create a Pull Request.

Happy Coding! ☕
