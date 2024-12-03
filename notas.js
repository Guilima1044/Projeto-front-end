import { useRouter } from 'next/router'; // Importa o hook do Next.js para navegação

export default function Notas() {
  const router = useRouter();

  return (
    <div>
      <header>
        <h1>Boletim de Notas</h1>
      </header>
      <main>
        <section className="boletim">
          <h2>Desempenho Acadêmico</h2>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Front End Frameworks</td>
                <td>8.5</td>
              </tr>
              <tr>
                <td>Banco de Dados</td>
                <td>9.2</td>
              </tr>
              <tr>
                <td>Programação Orientada a Objetos</td>
                <td>7.8</td>
              </tr>
              <tr>
                <td>Transformação Digital</td>
                <td>8.0</td>
              </tr>
              <tr>
                <td>Desenvolvimento de Aplicações Web</td>
                <td>9.1</td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* Botão de Voltar */}
        <button className="btn voltar" onClick={() => router.back()}>Voltar</button>
      </main>
      <footer>
        <p>© Desenvolvido por Guilherme Lima, Lucas Vinicius, Bruno Henrique</p>
      </footer>
    </div>
  );
}
