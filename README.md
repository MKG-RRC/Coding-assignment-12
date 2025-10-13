# Assignment 12 - Web Component Library

**Student:** Mark Kenneth Garcia
**Course:** WEBD-3012 (273795) Business Systems Build and Testing
**Term:** Fall 2025

---

## Overview
This project creates a **React Component Library** served in a production environment using **Docker** and **Nginx**.
The app was built with **Create React App (CRA)** and is deployed on **localhost:8083**.
Storybook is used to showcase and test each reusable UI component.

---

## Technologies Used
- React (Create React App)
- Storybook
- Styled Components
- Node.js 20 (Alpine)
- Nginx 1.27 (Alpine)
- Docker Desktop
- Windows PowerShell

---

## Project Structure
```
ui-garden/
├── .storybook/           # Storybook configuration files
│   ├── main.js
│   ├── preview.js
│   └── manager.js
│
├── src/                  # React source code
│   └── components/       # Reusable UI components
│       ├── Button/
│       ├── Label/
│       ├── Text/
│       ├── Dropdown/
│       ├── RadioButton/
│       ├── Card/
│       ├── Img/
│       ├── HeroImage/
│       └── Table/
│           ├── TableHeader/
│           ├── TableRow/
│           ├── TableCell/
│           └── TableFooter/
│
├── public/               # Static assets
├── build/                # Production build output
├── Dockerfile            # Multi-stage Docker configuration
├── package.json          # Node dependencies
└── README.md             # Setup & instructions
```

---

## Docker Setup

### 1️ Build the Image
```bash
docker build -t ui-garden:prod .
```

### 2️ Run the Container
```bash
docker run --rm -d -p 8083:8083 --name garcia_mark_coding_assignment12 ui-garden:prod
```

**Flags:**
- `--rm` – Removes the container after stopping
- `-d` – Runs the container in background
- `-p` – Maps container port 8083 to localhost
- `--name` – Assigns the container name as required by the assignment

---

### 3️ View the App
Open in browser:
[http://127.0.0.1:8083](http://127.0.0.1:8083)
or
[http://localhost:8083](http://localhost:8083)

---

### 4️ Verify and Stop
Check active containers:
```bash
docker ps
```

Stop the container:
```bash
docker stop garcia_mark_coding_assignment12
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
- Installs dependencies
- Builds optimized React app

**Stage 2 – Nginx (Runtime):**
- Serves `/garcia_mark_ui_garden` on port **8083**
- Uses SPA routing with `try_files $uri $uri/ /index.html;`

---

## Verification
```bash
docker build -t ui-garden:prod .
docker run -d -p 8083:8083 ui-garden:prod
```

Then open: [http://localhost:8083](http://localhost:8083)

Check Storybook:
[http://localhost:6006](http://localhost:6006)

---


