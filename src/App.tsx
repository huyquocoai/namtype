import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import instance from "./apis";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TProduct } from "./interfaces/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";

const App = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await instance.get(`/products`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Header />
      <main className="main container">
        <Routes>
          {/* client */}
          <Route path="/">
            <Route index element={<Home products={products} />} />
            <Route path="/shop/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* admin */}
          <Route path="/admin">
            <Route index element={<Dashboard products={products} />} />
          </Route>

          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
