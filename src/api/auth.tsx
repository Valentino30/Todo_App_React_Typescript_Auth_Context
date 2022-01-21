import { CredentialsType } from "../types/auth";
import { apiCall } from "../shared/utils";

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
