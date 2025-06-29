# G-Scores - Student Score Tracker

## 🎯 Completed Features

- The conversion of raw data from csv file into the database (code for this process is in [ScoreSeeder.php](backend/database/seeders/ScoreSeeder.php))
- Check score from registration number input
- View statistics of the number of students with scores in 4 levels by subjects with charts
- View top #1 students of group A including (math, physics, chemistry) statistically
- View number of student participate in the exam
- List top 10,20, and 30 students of group A including (math, physics, chemistry)
- Responsive design (look good on all devices: desktops, tablets & mobile phones)
- Setup project use Docker and Docker Compose
- Deploy the application to go live (using Netlify and Render)

## 📸 Screenshots

- I have taken screenshots of the application. You can find them in the [SCREENSHOTS.md](SCREENSHOTS.md) file.

## 🚀 Live Demo

- Frontend: https://g-scores-frontend.netlify.app/
- Backend API: https://g-scores-project.onrender.com
- Database: host on Render PostgreSQL

(⚠️ Using Render Free Plan so it may cause slow response time)

## 🛠 Tech Stack

### Frontend

- React.js 18
- TypeScript
- Tailwind CSS
- ApexCharts
- Vite
- Netlify Deploy

### Backend

- Laravel 12
- PHP 8.2
- PostgreSQL 16
- Docker
- Render Deploy (for backend and database)

## Prerequisites

- Node.js 18+
- npm comes with Node.js
- Composer
- PHP 8.2
- PostgreSQL 16
- PgAdmin (UI for managing local PostgreSQL database)
- Git
- VSCode (or any other code editor)
- Docker (optional)

## 🚀 Getting Started (or Run with [Docker Compose](#docker-compose-run-local))

### 1. Clone the Repository

```bash
git clone https://github.com/vihao1802/g-scores-project.git
```

```bash
cd g-scores-project
```

### 2. Project Local Setup

- ⚠️ Use two terminal to run this project

#### Backend

1. From the `root` directory, move to `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   composer install
   ```

3. Create a copy of the `.env.example` file and name it `.env`:

   ```bash
   cp .env.example .env
   ```

   ```bash
   php artisan key:generate
   ```

4. Change the following values in the `.env` file to match your database configuration:

   ```env
   DB_CONNECTION=pgsql
   DB_HOST=localhost
   DB_PORT=5432
   DB_DATABASE=score_db # or any name you want
   DB_USERNAME=<database_username>
   DB_PASSWORD=<database_password>
   ```

5. Run these to set up the database and seed it with initial data:

   ```bash
   php artisan migrate
   ```

- This seeding data process will take a while to finish

  ```bash
  php artisan db:seed
  ```

- Code for seeding data from csv file to database is in [ScoreSeeder.php](backend/database/seeders/ScoreSeeder.php)

6. Run the following command to start the server:
   ```bash
   php artisan serve
   ```

#### Frontend

1. From the `root` directory, move to `frontend` directory:

   ```bash
   cd frontend
   ```

2. Create a copy of the `.env.example` file and name it `.env`:

   ```bash
   cp .env.example .env
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the following command to start the development server:
   ```bash
   npm run dev
   ```

#### 🎯 Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- PostgreSQL: localhost:5432

## Docker Compose Run Local

- ⚠️ Before run docker compose, please go to `backend/.env`.

- Then comment values in `Option 1` and uncomment values in `Option 2`:

  ```env
  # Option 1: Use these without docker
  # DB_CONNECTION=pgsql
  # DB_HOST=localhost
  # DB_PORT=5432
  # DB_DATABASE=scores_db
  # DB_USERNAME=
  # DB_PASSWORD=

  # Option 2: Use these below if you use docker compose
  DB_CONNECTION=pgsql
  DB_HOST=db
  DB_PORT=5432
  DB_DATABASE=postgres-database
  DB_USERNAME=postgres-username
  DB_PASSWORD=postgres-password
  ```

1. From the `root` directory, start the containers:

   ```bash
   docker-compose up -d --build
   ```

2. Run database migrations and seed it with initial data:

   ```bash
   docker-compose exec backend php artisan migrate
   ```

- This seeding data process will take a while to finish

  ```bash
  docker-compose exec backend php artisan db:seed
  ```

#### 🎯 Access the application:

- Frontend: http://localhost:5173
- Backend API: http://localhost
- PostgreSQL: localhost:5435

### REFERENCES

- [laravel-render-template](https://github.com/codingnninja/laravel-render-template)
- [laravel-docker-setup](https://github.com/Tenacity-Dev/laravel-docker-setup)

⭐ Thank you for spending your time on my application! If you have any questions, please don't hesitate to contact me.
