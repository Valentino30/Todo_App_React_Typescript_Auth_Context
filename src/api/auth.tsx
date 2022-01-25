import { apiCall } from "../utils";
import { CredentialsType } from "../types/auth";

export const registerRequest = async ({ email, password }: CredentialsType) => {
  const response = await apiCall.post("/register", {
    email,
    password,
  });
  return response.data;
};

export const loginRequest = async ({ email, password }: CredentialsType) => {
  const response = await apiCall.post("/login", {
    email,
    password,
  });
  return response.data;
};
