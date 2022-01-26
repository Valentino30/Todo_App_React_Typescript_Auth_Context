import { useState } from "react";

import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

import { CredentialsType } from "../types/auth";
import { useAuth } from "../context/auth";

export default function Auth() {
  const { register } = useAuth();
  const [credentials, setCredentials] = useState<CredentialsType>({
    password: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(credentials);
  };

  return (
    <div>
      <h1>Register</h1>
      <Form handleSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="email"
          handleChange={handleChange}
          value={credentials?.email}
        />
        <Input
          name="password"
          placeholder="password"
          handleChange={handleChange}
          value={credentials?.password}
        />
        <Button handleClick={() => {}}>Register</Button>
      </Form>
    </div>
  );
}
