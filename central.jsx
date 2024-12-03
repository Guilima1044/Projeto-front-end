import Link from 'next/link'; // Importa o componente Link para navegação

export default function Central() {
  return (
    <div>
      <header>
        <h1>Portal do Aluno</h1>
      </header>
      <main>
        <section className="card">
          <h2>Financeiro</h2>
          <p>Acesse suas mensalidades e boletos.</p>
          <Link href="/financeiro">
            <a className="btn">Ver mais</a>
          </Link>
        </section>
        <section className="card">
          <h2>Fale com seu Tutor</h2>
          <p>Entre em contato para tirar suas dúvidas.</p>
          <Link href="/tutor">
            <a className="btn">Entrar em contato</a>
          </Link>
        </section>
        <section className="card">
          <h2>Minhas Notas</h2>
          <p>Consulte suas notas e desempenho acadêmico.</p>
          <Link href="/notas">
            <a className="btn">Consultar</a>
          </Link>
        </section>
      </main>
      <footer>
        <p>© Desenvolvido por: Guilherme Lima, Lucas Vinicius, Bruno Henrique</p>
      </footer>
    </div>
  );
}
