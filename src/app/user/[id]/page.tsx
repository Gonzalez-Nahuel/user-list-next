import { UserCard } from "@/components/UserCard";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <UserCard id={id} />;
}
