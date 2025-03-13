const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Parse allowed origins from environment variable
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['https://vedant-mittal.github.io', 'http://localhost:3000'];

// Enable CORS for your GitHub Pages domain
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'API is running' });
});

// Mock currencies endpoint
app.get('/api/currencies', (req, res) => {
  res.json([
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' }
  ]);
});

// Mock people endpoint
app.get('/api/people', (req, res) => {
  res.json([
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Bob Johnson' }
  ]);
});

// Mock groups endpoint
app.get('/api/groups', (req, res) => {
  res.json([
    { id: '1', name: 'Roommates', description: 'Apartment expenses', members: ['1', '2'] },
    { id: '2', name: 'Trip to Paris', description: 'Vacation expenses', members: ['1', '2', '3'] }
  ]);
});

// Mock expenses endpoint
app.get('/api/expenses', (req, res) => {
  res.json([
    { 
      id: '1', 
      description: 'Groceries', 
      amount: 50.00, 
      currencyCode: 'USD',
      paidBy: '1',
      splitAmong: [
        { personId: '1', amount: 25.00 },
        { personId: '2', amount: 25.00 }
      ],
      date: '2023-01-15',
      groupId: '1',
      categoryId: 'groceries'
    },
    { 
      id: '2', 
      description: 'Dinner', 
      amount: 100.00, 
      currencyCode: 'EUR',
      paidBy: '2',
      splitAmong: [
        { personId: '1', amount: 33.33 },
        { personId: '2', amount: 33.33 },
        { personId: '3', amount: 33.34 }
      ],
      date: '2023-02-20',
      groupId: '2',
      categoryId: 'food'
    }
  ]);
});

// Mock categories endpoint
app.get('/api/categories', (req, res) => {
  res.json([
    { id: 'groceries', name: 'Groceries', isCustom: false },
    { id: 'food', name: 'Food & Dining', isCustom: false },
    { id: 'transport', name: 'Transportation', isCustom: false },
    { id: 'utilities', name: 'Utilities', isCustom: false },
    { id: 'entertainment', name: 'Entertainment', isCustom: false },
    { id: 'other', name: 'Other', isCustom: false }
  ]);
});

// Mock settlements endpoint
app.get('/api/settlements', (req, res) => {
  res.json([
    { 
      id: '1', 
      fromPersonId: '1', 
      toPersonId: '2', 
      amount: 25.00, 
      currencyCode: 'USD',
      date: '2023-03-10',
      groupId: '1'
    }
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Simple API server running on port ${PORT}`);
}); 