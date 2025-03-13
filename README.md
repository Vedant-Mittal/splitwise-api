# Splitwise API

This is the API for the Splitwise clone application. It provides endpoints for managing expenses, settlements, groups, and more.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up environment variables:
   - Create a `.env` file with the following variables:
     ```
     DATABASE_URL="your-postgresql-connection-string"
     ALLOWED_ORIGINS="https://your-frontend-domain.com,http://localhost:3000"
     ```

3. Run database migrations:
   ```
   npx prisma migrate deploy
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints

- `/api/people` - Manage people
- `/api/expenses` - Manage expenses
- `/api/groups` - Manage groups
- `/api/settlements` - Manage settlements
- `/api/categories` - Manage categories
- `/api/currencies` - Get currencies

## Deployment

This API can be deployed to platforms like Render.com or Vercel. 