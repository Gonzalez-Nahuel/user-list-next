import { UserList } from "@/components/UserList";

export default function Home() {
  return (
    <section className="bg-cyan-900 p-4 text-center w-max h-max mr-auto ml-auto rounded-3xl shadow-custom">
      <h2 className="text-2xl text-start ml-2 font-extrabold mb-6">
        Lista de Usuarios
      </h2>
      <UserList />
    </section>
  );
}
