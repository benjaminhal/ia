import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    const response = await fetch('/api/generate', { method: 'POST' });
    const data = await response.json();
    setImage(data.url);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Générateur d'Images IA</title>
        <meta name="description" content="Générez des images grâce à l'IA !" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto text-center p-4">
        <h1 className="text-4xl font-bold">Générateur d'Images IA</h1>
        {session ? (
          <div>
            <p className="mb-4">Connecté en tant que {session.user.email}</p>
            <button onClick={generateImage} className="mt-4 p-2 bg-blue-500 text-white rounded">Générer une Image</button>
            <button onClick={() => signOut()} className="ml-4 p-2 bg-red-500 text-white rounded">Se Déconnecter</button>
          </div>
        ) : (
          <button onClick={() => signIn()} className="mt-4 p-2 bg-green-500 text-white rounded">Se Connecter</button>
        )}
        {image && <img src={image} alt="Image générée" className="mt-4 mx-auto" />}
      </main>
      <Footer />
    </div>
  );
}
