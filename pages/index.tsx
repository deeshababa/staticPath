import Head from 'next/head'
import { FormEvent, useState } from 'react';
import Link from 'next/link'

export default function Home() {
  const [userName, setUserName] = useState('');
  const [users, setUsers] = useState<string[]>([]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setUsers([...users, userName]);
  }

  return (
    <>
      <Head>
        <title>GitHub Repositorios</title>
      </Head>
      <div className="container">
        <header>
          <h1>
            Github Repositorios
          </h1>
          <p>Adicione seu repositorio Aqui!</p>
        </header>
        <main>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Usuario do Github" value={userName} onChange={(event) => setUserName(event.target.value)} />
            <button type="submit">
              Enviar
            </button>
          </form>
        </main>
        <section>
          <ul>
            {users.map(user => {
              return (
                <li key={user}>
                  <p>Nome: {user}</p>
                  <Link href={`users/${user}`}>
                    <a>User: {user}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  )
}
