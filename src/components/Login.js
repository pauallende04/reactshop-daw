import React, { useState } from 'react';
import axios from 'axios';
import '../pages/cart/cart.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    // Si descomentas la siguiente línea, evitarás que el formulario se envíe y asi aplique el axios y el check de usuario. Al ser un proyecto de prueba he optado por no hacer una conexióna una base datos.
    //e.preventDefault();

    // Realizar solicitud POST a la API de autenticación
    //axios
      //.post('https://example.com/api/login', { username, password })
      //.then((response) => {
        // La solicitud fue exitosa
        // Aquí puedes realizar acciones adicionales, como guardar el token de autenticación, etc.

        // Simplemente llamamos a la función `onLogin` con `true` para simbolizar
        // que el usuario ha iniciado sesión correctamente
        onLogin(true);
      //})
      //.catch((error) => {
        // Hubo un error en la solicitud
        // Puedes manejar el error de acuerdo a tus necesidades
        //console.log(error);
      //});
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
