import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Tutor() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples (se necessário)
    if (nome && email && assunto && mensagem) {
      // A lógica para envio de e-mail seria feita aqui com uma API ou serviço de terceiros
      alert('Mensagem enviada!'); // Apenas como exemplo
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <div>
      <header>
        <h1>Fale com seu Tutor</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Seu Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="assunto">Assunto:</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              placeholder="Assunto da mensagem"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Escreva sua mensagem aqui"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Enviar</button>
        </form>
        {/* Botão de voltar */}
        <button className="btn voltar" onClick={() => router.back()}>Voltar</button>
      </main>
      <footer>
        <p>© Desenvolvido por Guilherme Lima, Lucas Vinicius, Bruno Henrique</p>
      </footer>
    </div>
  );
}
