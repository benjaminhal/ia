import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-900 text-white p-4 text-center flex justify-between items-center">
      <h1 className="text-xl font-bold">Générateur d'Images IA</h1>
      {session ? (
        <button onClick={() => signOut()} className="p-2 bg-red-500 rounded">Se Déconnecter</button>
      ) : (
        <button onClick={() => signIn()} className="p-2 bg-green-500 rounded">Se Connecter</button>
      )}
    </header>
  );
}
