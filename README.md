# ShopSphere Full Stack E-Commerce Application

ShopSphere is a full-stack e-commerce application built using Spring Boot and React. The project demonstrates user authentication, product management, shopping cart functionality, and order processing through a modern client-server architecture.

## Features

### Authentication
- User Registration
- User Login
- JWT-based Authentication
- Protected API Endpoints
- Role-based User Support

### Product Management
- View Available Products
- Product Categories
- Product Details
- Stock Tracking

### Shopping Cart
- Add Products to Cart
- Increase Quantity
- Decrease Quantity
- Remove Products from Cart
- Persistent Cart Storage

### Order Management
- Place Orders
- View Order History
- View Ordered Products
- Track Order Status

### Frontend
- Responsive React UI
- React Router Navigation
- Axios API Integration
- Toast Notifications
- Modern E-Commerce Styling

### Backend
- RESTful API Architecture
- Spring Security
- JWT Authentication
- Global Exception Handling
- Input Validation
- MySQL Database Integration
- Swagger API Documentation

---

## Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- React Hot Toast
- CSS

### Backend
- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- Hibernate
- JWT
- Maven

### Database
- MySQL

---

## Project Structure

```text
shopsphere-fullstack
│
├── shopsphere
│   ├── src
│   ├── pom.xml
│   └── ...
│
└── shopsphere-frontend
    ├── src
    ├── package.json
    └── ...
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|----------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

### Products

| Method | Endpoint |
|----------|----------|
| GET | /api/products |
| POST | /api/products |
| PUT | /api/products/{id} |
| DELETE | /api/products/{id} |

### Cart

| Method | Endpoint |
|----------|----------|
| GET | /api/cart |
| POST | /api/cart/add |
| PUT | /api/cart/{id}/increase |
| PUT | /api/cart/{id}/decrease |
| DELETE | /api/cart/{id} |

### Orders

| Method | Endpoint |
|----------|----------|
| POST | /api/orders/place |
| GET | /api/orders |
| GET | /api/orders/{id} |

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/Asif-Mogal/shopsphere-fullstack.git
cd shopsphere-fullstack
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd shopsphere
```

### Configure Database

Update:

```properties
src/main/resources/application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/shopsphere
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

### Run Backend

```bash
mvn spring-boot:run
```

Backend will start on:

```text
http://localhost:8080
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd shopsphere-frontend
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

Frontend will start on:

```text
http://localhost:5173
```

---

## Swagger Documentation

Once the backend is running:

```text
http://localhost:8080/swagger-ui.html
```

or

```text
http://localhost:8080/swagger-ui/index.html
```

---

## Future Improvements

- Product Search
- Product Images Upload
- Category Filtering
- User Profile Management
- Admin Dashboard
- Payment Gateway Integration
- Order Tracking
- Wishlist Functionality
- Product Reviews and Ratings

---

## Author

**Asif Mogal**

B.Tech Computer Science and Engineering

Built as a full-stack learning project using Spring Boot, React, JWT Authentication, MySQL, and REST APIs.
