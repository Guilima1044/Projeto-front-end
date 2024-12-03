import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const loginRedirect = (event) => {
    event.preventDefault();
    
    // Verifica se a matrícula e senha estão preenchidos
    if (matricula && senha) {
      router.push('/central'); // Redireciona para a página 'central'
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={loginRedirect}>
        <div className="form-group">
          <label htmlFor="matricula">Matrícula</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Entrar</button>
      </form>
    </div>
  );
}
