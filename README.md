# Assignment 13 - Web Component Library

**Student:** Mark Kenneth Garcia
**Course:** WEBD-3012 (273795) Business Systems Build and Testing
**Term:** Fall 2025

---

## Overview

This assignment extends Assignment 12 (UI Garden Component Library) by adding automated code-quality checks and continuous integration through GitHub Actions.

The system now includes:

🧩 Husky pre-commit hooks that block bad commits (Prettier + ESLint + Tests)
⚙️ GitHub Actions workflow that re-runs the same checks for each push or PR
🐳 Docker multi-stage build that serves the production React app on localhost:8018 via Nginx

---

## Technologies Used

Frontend & Frameworks

- React (Create React App) + TypeScript
- Storybook – component showcase and visual testing
- Styled Components – CSS-in-JS styling

Code Quality & Automation

- ESLint – JavaScript/TypeScript linting
- Prettier – code formatting enforcement
- Husky – Git pre-commit hooks
- lint-staged – runs checks only on staged files
- Jest / React Testing Library – unit tests
- GitHub Actions – CI/CD pipeline for build and quality checks

Build & Deployment

- Node.js 20 (Alpine) – builder environment
- Nginx 1.27 (Alpine) – production web server
- Docker Desktop – containerization and deployment
- Windows PowerShell – local development shell

###

---

## Project Structure

```
ui-garden/
├── .husky/                     # Husky pre-commit hook
├── .github/workflows/ci.yml    # GitHub Actions workflow
├── src/components/             # Reusable React components
├── build/                      # Production build output
├── Dockerfile                  # Multi-stage Docker setup (A13)
├── package.json                # Scripts + Husky integration
└── README.md                   # Setup & instructions

```

### 🦴 Husky Pre-Commit Checks

### Every commit runs these commands automatically:

```
npm run prettier:check   # Verify code formatting
npm run lint             # Lint for errors
npm test                 # Run unit tests

If any fail → commit is blocked until fixed.
```

### ⚙️ Setup Commands

- `npm install husky lint-staged prettier eslint --save-dev --legacy-peer-deps`
- `npx husky init`

### In .husky/pre-commit:

- `npm run prettier:check && npm run lint && npm test`

---

---

### package.json script snippet:

```
"lint": "eslint . --ext .js,.jsx,.ts,.tsx",
"prettier:check": "prettier --check .",
"prettier:fix": "prettier --write .",
"precommit-checks": "npm run prettier:check && npm run lint && npm test"
```

### GitHub Actions (CI/CD)

Workflow file: .github/workflows/ci.yml

```name: Code Quality CI

on:
  push:
  pull_request:

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci --legacy-peer-deps
      - run: npm run lint
      - run: npm run prettier:check
      - run: npm test
```

If any step fails, the build shows ❌ on GitHub.

## Docker Setup

### 1️ Build the Image

```bash
docker build -t garcia_markkenneth_coding_assignment13 .
```

### 2️ Run the Container

```bash
docker run -d --name garcia_markkenneth_coding_assignment13 -p 8018:8018 garcia_markkenneth_coding_assignment13
```

**Flags:**

- `--rm` – Removes the container after stopping
- `-d` – Runs the container in background
- `-p` – Maps container port 8018 to localhost
- `--name` – Set container name as required

---

### 3️ View the App

Open in browser:
[http://127.0.0.1:8018](http://127.0.0.1:8018)
or
[http://localhost:8018](http://localhost:8018)

---

### 4️ Verify and Stop

Check active containers:

```bash
docker ps
```

Stop the container:

```bash
docker stop garcia_markkenneth_coding_assignment13
```

---

## Storybook Setup

### 1️ Start Storybook

```bash
npm run storybook
```

### 2️ Access Storybook

Open in browser:
[http://localhost:6006](http://localhost:6006)

### 3️ Available Components

Each component (Button, Label, Text, etc.) includes:

- A `.tsx` implementation file
- A `.stories.tsx` file for Storybook display
- A `.types.ts` for prop types
- A `.test.tsx` for visibility and disabled-state tests
- An `index.ts` for exports

---

## Dockerfile Summary

**Stage 1 – Node (Builder):**

- Installs dependencies (--legacy-peer-deps --include=dev)
- Builds optimized React app using react-scripts build

**Stage 2 – Nginx (Runtime):**

- Copies the build/ output to /usr/share/nginx/html
- Serves on port 8018 with SPA routing
- Uses try_files $uri $uri/ /index.html;

---

## Verification

```Checklist

 Husky runs Prettier + ESLint + Tests before commit

 GitHub Actions pipeline runs same checks on push

 Docker container serves production build at localhost:8018

 All assignment requirements met

```

End of README – Assignment 13 (UI Component Library Build Checks)
