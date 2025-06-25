import { UserCard } from "@/components/UserCard";

export default function Page({ params }: { params: { id: string } }) {
  //const { id } = params;

  return <UserCard id={params.id} />;
}
