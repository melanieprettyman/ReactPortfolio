
# Prettyman's Peculiar Pantry Ordering App

Prettyman's Peculiar Pantry is a React-based web application designed for customers to easily browse meals, add them to a cart, and proceed through a checkout process to place orders. This application is structured with a frontend built in React and a backend server utilizing Express.js to handle REST API requests.





## Features 
- Browse available meals fetched from the backend server
- Add and remove items from the shopping cart
- View the current total of the cart
- Proceed to checkout with a form to input customer details
- Submit the order to the backend, which saves the order details

## Tech Stack 
- **Frontend:** React, Context API for state management.
- **Backend:** Node.js with Express.js, body-parser for middleware.
- **Data Storage:** JSON files for storing meal options and orders.





## Setup and Installation

#### Clone the repository

#### Install dependencies


```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```
#### Start the application
You need to run both the frontend and backend servers. Open two terminal windows to proceed.
```bash
# Terminal 1 - Run the frontend server
npm start

# Terminal 2 - Navigate to the backend directory first
cd backend
npm run start
```
The frontend application will be available at http://localhost:3000, and the backend will listen on port 3000 for API requests.
## API Endpoints

| Endpoint  | Description                              |
| ---------- | ---------------------------------------- |
| `GET /meals`| Fetches a list of available meals. |
| `POST /orders`| Submits a new order. Expects an order object with customer details and the items ordered. |

## File Structure

| File  | Description                              |
| ---------- | ---------------------------------------- |
| `/components`| Contains all React components. |
| `/store`| Holds the Context and reducers for state management. |
| `/hooks`| Custom React hooks, including useHttp for API requests. |
| `/data`| JSON files storing meals (available-meals.json) and orders (orders.json). |
| `App.js`| The main React component that wraps the entire application. |
| `backend/`| The directory for the backend server code. |






## Demo

#### Home Page 
![App Screenshot](https://github.com/melanieprettyman/ReactPortfolio/blob/main/ResturantOderingApp/demo_photos/webpage_demo.png?raw=true)

#### Cart 
![App Screenshot](https://github.com/melanieprettyman/ReactPortfolio/blob/main/ResturantOderingApp/demo_photos/cart_demo.png?raw=true)

#### Checkout Page 
![App Screenshot](https://github.com/melanieprettyman/ReactPortfolio/blob/main/ResturantOderingApp/demo_photos/checkout_demo.png?raw=true)

#### Backend success message
![App Screenshot](https://github.com/melanieprettyman/ReactPortfolio/blob/main/ResturantOderingApp/demo_photos/successful_BE_order.png?raw=true)
