import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import { ShopContextProvider } from './context/shop-context';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Contact } from './pages/contact';
import { Cart } from './pages/cart/cart';
import './pages/cart/cart.css';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setLoggedIn(loggedIn);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Login onLogin={handleLogin} />
                  <p className="register-link">
                    ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
                  </p>
                </div>
              }
            />
            <Route
              path="/register"
              element={
                <div>
                  <Register onLogin={handleLogin} />
                  <p className="login-link">
                    ¿Ya tienes una cuenta? <Link to="/">Iniciar sesión</Link>
                  </p>
                </div>
              }
            />
          </Routes>
        </Router>
      ) : (
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      )}
    </div>
  );
};

export default App;


