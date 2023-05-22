import React, { useState } from 'react';

const Register = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de registro
    // Guardar el nuevo usuario en la base de datos, etc.

    // Simplemente llamamos a la función `onLogin` con `true` para simbolizar
    // que el usuario ha iniciado sesión correctamente
    onLogin(true);
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="register-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <button type="submit" className="register-button">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
