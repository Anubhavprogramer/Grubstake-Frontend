# Grubstake Frontend

**Grubstake** is a modern Scholarship and Loan Management System. The frontend is built with React and Tailwind CSS, providing a fast, responsive, and user-friendly interface for students, users, and banks.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Bank Portal](#bank-portal)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Anubhavprogramer/Grubstake
   cd Grubstake/Grubstake-Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

- Create a `.env` file in the root of `Grubstake-Frontend`:
  ```env
  REACT_APP_BACKEND_URL=http://localhost:8000
  ```
  Set this to your backend URL as needed.

## Usage

- Start the development server:
  ```bash
  npm start
  ```
- The app will run at `http://localhost:3000` by default.

## Bank Portal
- Banks can sign up and log in via the "Bank Signup" and "Bank Login" options in the navigation bar.
- After logging in, banks can create and manage loans from their dashboard.
- Only banks and admins can access loan creation features.

## Screenshots

<!-- Add screenshots here -->

## Technologies Used
- **React**
- **Tailwind CSS**
- **Axios**
- **React Router**
- **JWT Authentication**

## License
MIT

