import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PrimaryBtn from '../../components/Button/PrimaryBtn'; // Ajuste o caminho conforme necessário

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/auth/login', credentials);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token); // Armazena o token
                history.push('/home'); // Redireciona para a página inicial
            }
        } catch (error) {
            console.error('Erro ao fazer login', error);
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10">
            <div className="mb-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
            </div>
            <div className="mb-6">
                <input
                    type="password"
                    placeholder="Senha"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
            </div>
            <PrimaryBtn type="submit" className="w-full mt-4">
                Conecte-se
            </PrimaryBtn>
        </form>
    );
};

export default Login;