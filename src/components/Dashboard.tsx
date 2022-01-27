import Text from "../shared/Text";
import Header from "../shared/Header";
import Button from "../shared/Button";

import { useAuth } from "../context/auth";

export default function Dashboard() {
  const { logout, user } = useAuth();
  return (
    <div>
      <Button handleClick={logout}>Logout</Button>
      <Header>Dashboard</Header>
      <Text>{`id: ${user?.id}`}</Text>
      <Text>{`email: ${user?.email}`}</Text>
      <Text>{`token: ${user?.token}`}</Text>
    </div>
  );
}
