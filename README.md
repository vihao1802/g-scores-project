# G-Scores - Student Score Tracker

## Completed Features

- The conversion of raw data from csv file into the database
- Check score from registration number input
- View Statistics of the number of students with scores in the 4 levels by subjects with charts
- List top 10,20, and 30 students of group A including (math, physics, chemistry)
- Responsive design (look good on all devices: desktops, tablets & mobile phones)
- Setup project use Docker
- Deploy the application to go live (using netlify and render)

## Live Demo

- Frontend: https://g-scores-frontend.netlify.app/
- Backend API: https://g-scores-project.onrender.com
- Database: host on render

(Render Free Plan so may slow response time)

## Tech Stack

### Frontend

- React.js 18
- TypeScript
- Tailwind CSS
- React Query
- ApexCharts
- Vite
- Netlify Deploy

### Backend

- Laravel 10
- PHP 8.2
- PostgreSQL
- Docker
- Render Deploy (for backend and database)

## Prerequisites

- Docker 20.10+ and Docker Compose
- Node.js 18+ (for local frontend development)
- Composer (for local backend development)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vihao1802/g-scores-project.git
cd g-scores-project
```

### 2. Environment Setup

- Use two terminal to run this project

#### Backend

1. Move to backend directory:

   ```bash
   cd backend
   ```

2. Create a copy of the `.env.example` file and name it `.env`:

   ```bash
   cp .env.example .env
   ```

3. Change the following values in the `.env` file:

   ```env
   DB_CONNECTION=pgsql
   DB_HOST=localhost
   DB_PORT=5432
   DB_DATABASE=<database_name>
   DB_USERNAME=<database_username>
   DB_PASSWORD=<database_password>
   ```

4. Run these to set up the database:

   ```bash
   php artisan migrate
   php artisan db:seed
   ```

5. Run the following command to start the server:
   ```bash
   php artisan serve
   ```

#### Frontend

1. Install dependencies:

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

### Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- PostgreSQL: localhost:5432

### Docker Setup (optional)

1. Start the containers:

   ```bash
   docker-compose up -d --build
   ```

2. Run database migrations:

   ```bash
   docker-compose exec backend php artisan migrate
   ```

3. Seed the database (optional):

   ```bash
   docker-compose exec backend php artisan db:seed
   ```

4. Access the application:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000
   - PostgreSQL: localhost:5432

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
