import { useState } from "react";

import Button from "../shared/Button";
import Input from "../shared/Input";

import { CredentialsType } from "../types/auth";

export default function Auth() {
  const [credentials] = useState<CredentialsType | null>(null);
  return (
    <div>
      <h1>Register</h1>
      <form>
        <Input
          placeholder="email"
          handleChange={() => {}}
          value={credentials?.email}
        />
        <Input
          placeholder="email"
          handleChange={() => {}}
          value={credentials?.password}
        />
        <Button handleClick={() => {}}>Register</Button>
      </form>
    </div>
  );
}
