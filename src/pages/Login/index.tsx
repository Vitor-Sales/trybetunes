import { useState } from 'react';
import { createUser } from '../../services/userAPI';

function Login() {
  const [loginValue, setLoginValue] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleLoginClick = () => {
    setLoading(true);
    createUser({ name: loginValue })
      .then(() => setLoading(false));
  };

  return (
    <>
      <h1>Login</h1>
      <label htmlFor="login">Login</label>
      <input
        type="text"
        id="login"
        data-testid="login-name-input"
        value={ loginValue }
        onChange={ (e) => setLoginValue(e.target.value) }
      />
      <button
        data-testid="login-submit-button"
        disabled={ loginValue.length < 3 }
        onClick={ handleLoginClick }
      >
        Entrar

      </button>
      {loading && <p>Carregando...</p>}
    </>

  );
}

export default Login;
