import { Route, Routes } from "react-router-dom";
import { HomePage, AuthPage, CartPage, WishPage, ProductPage, AccountPage, Login, Logout, Signup, MonitorsPage, KeyboardsPage, HeadphonesPage } from "../pages";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wish" element={<WishPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/monitors" element={<MonitorsPage />} />
            <Route path="/keyboards" element={<KeyboardsPage />} />
            <Route path="/headphones" element={<HeadphonesPage />} />
        </Routes>
    )
}

export { PageRoutes }