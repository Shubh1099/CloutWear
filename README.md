
# CloutWear

CloutWear is a full-stack e-commerce platform built using the MERN stack. It allows users to browse, search, and purchase fashion products. Admins can manage product listings, orders, and users.

## 🚀 Features

- 🔐 JWT-based Authentication (User/Admin)
- 🛍️ Product Listing, Filtering, and Search
- 🛒 Cart and Checkout with Payment Integration
- 📦 Order Management with Admin Dashboard
- 📧 Newsletter Subscription
- 📸 Image Upload for Products

---

## 🗂️ Project Structure

```
CloutWear/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── .env
└── frontend/
    └── cloutwear/
        ├── public/
        ├── src/
        │   ├── components/
        │   ├── context/
        │   ├── pages/
        │   ├── utils/
        │   ├── App.js
        │   ├── index.js
        │   └── styles.css
        └── package.json
```

---

## ⚙️ Installation

### Clone the repository
```bash
git clone https://github.com/Shubh1099/CloutWear.git
cd CloutWear
```

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd frontend/cloutwear
npm install
```

---

## 🛠️ Environment Variables

Create a `.env` file in the `backend/` directory with the following variables:
```
MONGO_URI=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret>
PAYPAL_CLIENT_ID=<your_paypal_client_id>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_SECRET=<your_cloudinary_api_secret>
```

---

## ▶️ Run the Application

### Run Backend
```bash
cd backend
npm run dev
```

### Run Frontend
```bash
cd frontend/cloutwear
npm start
```

---

## 📚 API Routes

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/deliver` - Mark order as delivered (Admin)

---

## 🔥 Tech Stack

- Frontend: React, Redux, Tailwind CSS
- Backend: Node.js, Express, MongoDB
- Authentication: JWT
- Payment: PayPal
- Image Upload: Cloudinary

---


## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---
