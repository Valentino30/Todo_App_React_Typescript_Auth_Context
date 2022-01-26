import Button from "../shared/Button";
import { useAuth } from "../context/auth";

export default function Dashboard() {
  const { logout, user } = useAuth();
  return (
    <div>
      <Button handleClick={logout}>Logout</Button>
      <h1>Dashboard</h1>
      <p>{`id: ${user?.id}`}</p>
      <p>{`email: ${user?.email}`}</p>
      <p>{`token: ${user?.token}`}</p>
    </div>
  );
}
