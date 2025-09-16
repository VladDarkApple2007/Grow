import React, { useMemo } from "react";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/navbar/Navbar";
import Footer from "./Component/footer/Footer";
import LoadingSpinner from "./Component/LoadingSpinner/LoadingSpinner";
import Prev from "./Pages/Prev/Prev";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const CartItem = React.lazy(() => import("./Pages/CartItem/CartItem"));
const Shop = React.lazy(() => import("./Pages/Shop/Shop"));
const BigShop = React.lazy(() => import("./Pages/BigShop/BigShop"));
const PlantCare = React.lazy(() => import("./Pages/PlantCare/PlantCare"));
const Blog = React.lazy(() => import("./Pages/Blog/Blog"));
const Favorite = React.lazy(() => import("./Pages/Favorite/Favorite"));
const Basket = React.lazy(() => import("./Pages/Basket/Basket"));
const Checkout = React.lazy(() => import("./Pages/Checkout/Checkout"));
const AuthPage = React.lazy(() => import("./Pages/AuthPage/AuthPage"));
const RegisterPage = React.lazy(() =>
  import("./Pages/RegisterPage/RegisterPage")
);

export default function AppRouter() {
  const location = useLocation();

  const HIDE_LAYOUT_PATHS = ["/auth", "/regist"];
  
  const hideLayout = useMemo(
    () => HIDE_LAYOUT_PATHS.includes(location.pathname), 
    [location.pathname]
  )

  return (
    <>
    
      {!hideLayout && <Navbar />} 
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route path="/Grow" element={<Prev />} /> 
          <Route path="/" element={<Home />} /> 
          <Route path="/product/:id" element={<CartItem />} />
          <Route path="/carts" element={<Shop />} />
          <Route path="/shop" element={<BigShop />} />
          <Route path="/blog" element={<PlantCare />} /> 
          <Route path="/blog/:id" element={<Blog />} /> 
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/regist" element={<RegisterPage />} />
        </Routes>
      </Suspense>

      {!hideLayout && <Footer />}
    </>
  );
}

