// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import CheckOut from "./components/Cart/CheckOut";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetails from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Toaster richColors position="top-right" />
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="collections/:collection"
              element={<CollectionPage />}
            />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/myorders" element={<MyOrdersPage />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            {/* Admin Layout */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
