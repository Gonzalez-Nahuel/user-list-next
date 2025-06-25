import { UserCard } from "@/components/UserCard";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const { id } = params;

  return <UserCard id={id} />;
}
