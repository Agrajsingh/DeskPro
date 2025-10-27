# DeskPro

A modern help desk ticketing system built with React and Node.js, designed to streamline customer support and ticket management.

## Features

- **User Management**: Separate authentication for users and admins
- **Ticket System**: Create, view, and manage support tickets
- **Admin Dashboard**: Complete ticket management with user oversight
- **Real-time Updates**: Modern UI with responsive design

## Tech Stack

**Frontend:**
- React 19
- React Router DOM
- Axios
- Tailwind CSS

**Backend:**
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd DeskPro
```

2. **Backend Setup**
```bash
cd Backend
npm install
```

3. **Frontend Setup**
```bash
cd Frontend
npm install
```

### Configuration

Create a `.env` file in the Backend directory:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Running the Application

**Backend:**
```bash
cd Backend
npm run dev
```

**Frontend:**
```bash
cd Frontend
npm start
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Project Structure

```
DeskPro/
├── Backend/          # Express API server
│   ├── models/      # MongoDB models
│   ├── routes/      # API routes
│   └── middleware/  # Authentication middleware
└── Frontend/        # React application
    ├── components/  # Reusable components
    └── pages/       # Page components
```

## License

ISC