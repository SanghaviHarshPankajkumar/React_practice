import React, { useState } from "react";

import './LoginForm.css';
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
alert(`Username: ${username}\nPassword: ${password}\nEmail: ${email}`)
    
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login Form</h2>

      <div className="input-field">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>

      <div className="input-field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      <div className="input-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;