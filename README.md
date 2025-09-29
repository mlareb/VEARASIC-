# VEARASIC - Runnable Starter

This archive contains a runnable starter for the VEARASIC fashion platform:
- frontend (React + Vite + Tailwind) — minimal components
- backend (Node + Express) — minimal product routes + DB utils (knex)
- infra: Dockerfiles and docker-compose for local dev
- data: sample products.json
- logo: SVG

**How to run (dev)**

Requirements:
- Node 20+
- Docker & docker-compose (optional for containers)
- PostgreSQL (if not using docker-compose)

Quick (dev) steps using docker-compose:
1. cd into project root inside container or your machine
2. from the `infra` folder run:
   ```
   docker-compose up --build
   ```
3. Frontend served at http://localhost:3000 (Nginx)
   Backend API at http://localhost:4000

Or run locally:
- Backend:
  ```
  cd backend
  npm install
  # create .env with DB connection or use docker-compose
  node src/app.js
  ```
- Frontend:
  ```
  cd frontend
  npm install
  npm run dev
  ```

This is a starter scaffold. For full production features (embeddings, visual search, AI microservices, payment integration), see the longer plan in previous messages.
