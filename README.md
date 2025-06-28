# G-Scores - Student Performance Management System

A comprehensive student performance management system that tracks and analyzes academic scores across different subjects and classes. The application consists of a React.js frontend and a Laravel backend with PostgreSQL database.

## Completed Features

- The conversion of raw data from csv file into the database
- Check score from registration number input
- View Statistics of the number of students with scores in the 4 levels by subjects with charts
- List top 10,20, and 30 students of group A including (math, physics, chemistry)
- Responsive design (look good on all devices: desktops, tablets & mobile phones)
- Setup project use Docker
- Deploy the application to go live (using netlify, render, and neon)

## Tech Stack

### Frontend

- React.js 18
- TypeScript
- Tailwind CSS
- React Query
- ApexCharts
- Vite
- Netlify

### Backend

- Laravel 10
- PHP 8.2
- PostgreSQL
- Docker
- Nginx
- Supervisor
- Render
- Neon (for database)

## Prerequisites

- Docker 20.10+ and Docker Compose
- Node.js 18+ (for local frontend development)
- Composer (for local backend development)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/g-scores-project.git
cd g-scores-project
```

### 2. Environment Setup

#### Backend

1. Copy the example environment file:

   ```bash
   cp backend/.env.example backend/.env
   ```

2. Generate application key:
   ```bash
   cd backend
   php artisan key:generate
   ```

#### Frontend

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

### 3. Docker Setup

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

### 4. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:9000
- PostgreSQL: localhost:5432
  - Database: mydb
  - Username: myuser
  - Password: mypassword

## Development

### Running Frontend Locally

```bash
cd frontend
npm run dev
```

### Running Backend Locally

```bash
cd backend
composer install
php artisan serve
```

## Project Structure

```
g-scores-project/
├── backend/               # Laravel backend
│   ├── app/              # Application code
│   ├── config/           # Configuration files
│   ├── database/         # Migrations and seeders
│   └── routes/           # API routes
├── frontend/             # React frontend
│   ├── public/           # Static files
│   ├── src/              # Source code
│   └── package.json      # Frontend dependencies
├── docker/               # Docker configuration
└── docker-compose.yml    # Docker Compose configuration
```

## Environment Variables

### Backend (`.env`)

```env
APP_NAME=G-Scores
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:9000

DB_CONNECTION=pgsql
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=mydb
DB_USERNAME=myuser
DB_PASSWORD=mypassword
```

### Frontend (`.env`)

```env
VITE_API_BASE_URL=/api
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, please open an issue in the GitHub repository.
