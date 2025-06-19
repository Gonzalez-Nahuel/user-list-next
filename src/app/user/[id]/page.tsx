import { UserCard } from "@/components/UserCard";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  return <UserCard id={id} />;
}
