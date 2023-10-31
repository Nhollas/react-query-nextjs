import { getUsers } from "./lib";
import Users from "@/components/Users";

export default async function Home() {
  const initUsers = await getUsers();

  return <Users users={initUsers} />;
}
