import React, { useState } from 'react';
import Input from './Input'; // Importa o componente Input
import { loginUser } from '../../services/api'; // Importa a função de login

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const credentials = { email, password };
      const response = await loginUser(credentials);
      console.log('Login bem-sucedido:', response);

      // Armazena o token no localStorage (se necessário)
      localStorage.setItem('token', response.token);

      // Redireciona o usuário para a página de dashboard ou outra página
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro no login. Verifique suas credenciais.');
    }
  };

  return (
    <div>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Conecte-se</button>
    </div>
  );
};

export default LoginForm;