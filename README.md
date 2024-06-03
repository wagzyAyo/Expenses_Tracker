# Expenses Tracker

![alt text](icon.svg)


Expenses Tracker is a web application that allows users to monitor their spending habits and make informed financial decisions. Users can add, view, and filter their expenses based on different time periods such as today, this week, or this month.


## Table of Contents


- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)


## Features


- User authentication using JWT.
- Add new expenses with details such as category, amount, and date.
- View expenses filtered by today, this week, or this month.
- Display the net spend for the selected period.
- Responsive design with a clean and intuitive user interface.


## Technologies Used


### Frontend


- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling routing within the application.
- **Material-UI (MUI)**: React UI framework for building modern user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ESLint**: Tool for identifying and fixing linting errors.


### Backend


- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing expense data.
- **Mongoose**: ODM for MongoDB.
- **JWT (JSON Web Tokens)**: For user authentication and secure data exchange.


### Database


- **MongoDB Atlas**: Fully-managed cloud database service for MongoDB.


### API Testing (Optional)


- **Postman**: Tool for testing and debugging APIs.


### Deployment


- **Vercel**: Platform for frontend deployment.
- **Heroku**: Platform for backend deployment.


## Installation


### Prerequisites


- Node.js (v12 or later)
- MongoDB Atlas account
- Nodemon


### Clone the Repository


```bash
git https://github.com/wagzyAyo/Expenses_Tracker
cd Expenses_Tracker
```


### Install Dependencies


#### Client


```bash
cd client
npm install
```


#### Server


```bash
cd server
npm install
```


### Set Up Environment Variables


Create a `.env` file in the `server` directory and add the following variables:


```env
SALT=salt rounds
PORT=port to listen to request
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```


## Usage


### Running the Application


#### Client


```bash
cd client
npm run dev
```


#### Server


```bash
cd server
npm run dev
```


### Access the Application


Open your browser and go to `http://localhost:5173/`.


## API Endpoints


### User Authentication


- **POST /api/signup**: Register a new user.
- **POST /api/login**: Log in an existing user.


### Expenses


- **GET /api/data**: Get all expenses for the authenticated user.
- **POST /api/data/add**: Add a new expense.
- **PUT /api/data/:id/update**: Update a specific expense by ID.
- **DELETE /api/data/:id/delete**: Delete a specific expense by ID.






## Contributing


Contributions are not allowed for now!


## License


This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


---

