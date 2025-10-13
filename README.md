# Assignment 12 - Web Component Library

**Student:** Mark Kenneth Garcia
**Course:** WEBD-3012 (273795) Business Systems Build and Testing
**Term:** Fall 2025

---

## 📘 Overview
This assignment demonstrates how to create a **React Component Library** and serve it in a production environment using **Docker** and **Nginx**.

The React app was created with **Create React App (CRA)** and built using `npm run build`.
The production-ready files are hosted inside a lightweight **Nginx container**, served on **localhost:8083**.

---

## 🧩 Technologies Used
- **React** (Create React App)
- **Node.js 20 (Alpine)**
- **Nginx 1.27 (Alpine)**
- **Docker Desktop**
- **Windows PowerShell**

---

## ⚙️ Project Structure
ui-garden/
│
├── src/ # React source code
├── public/ # Static assets
├── build/ # Production build output
├── Dockerfile # Multi-stage Docker configuration
├── package.json # Node dependencies
└── README.md # Setup & instructions

yaml
Copy code

---

## 🐳 Docker Setup Instructions

### 1️⃣ Build the Docker Image
Open PowerShell in the project directory and run:
```bash
docker build -t ui-garden:prod .
This command:

Builds the React app using Node.js

Copies the production build into an Nginx container

Exposes port 8083

2️⃣ Run the Container
After the image builds successfully, start the container:

bash
Copy code
docker run --rm -d -p 8083:8083 --name garcia_mark_coding_assignment12 ui-garden:prod
Flags explained:

--rm → Removes the container automatically after stopping
-d → Runs the container in detached (background) mode
-p 8083:8083 → Maps container port 8083 to localhost
--name → Assigns the required container name for the assignment

3️⃣ View the App
Once running, open your browser and go to:

cpp
Copy code
http://127.0.0.1:8083
You should see the React app landing page, confirming the build and deployment are successful.

4️⃣ Verify Container Status
Check that the container is active:

bash
Copy code
docker ps
Expected output:

nginx
Copy code
CONTAINER ID   IMAGE            STATUS          PORTS
abcd1234efgh   ui-garden:prod   Up 10 seconds   0.0.0.0:8083->8083/tcp
5️⃣ Stop the Container
When finished testing:

bash
Copy code
docker stop garcia_mark_coding_assignment12
🌐 Dockerfile Summary
This project uses a multi-stage build Dockerfile.

Stage 1 – Builder (Node):
Installs dependencies
Builds the optimized React app
Stage 2 – Runtime (Nginx):
Copies the build output to /garcia_mark_ui_garden

Configures Nginx to serve files on port 8083

Uses SPA fallback routing (try_files $uri $uri/ /index.html;)


💡 Verification
Build the image using

bash
Copy code
docker build -t ui-garden:prod .
Run the container

bash
Copy code
docker run -d -p 8083:8083 ui-garden:prod
Open the app in a browser at
http://127.0.0.1:8083

Confirm it runs successfully using docker ps