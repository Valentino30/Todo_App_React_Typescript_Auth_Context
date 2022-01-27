export type UserType = {
  id?: string;
  email?: string;
  token?: string;
};

export type CredentialsType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AuthContextType = {
  user: UserType | null;
  isAuthenticated: boolean;
  logout: () => void;
  login: (credentials: CredentialsType) => void;
  register: (credentials: CredentialsType) => void;
};

export type AuthProviderType = {
  children: React.ReactNode;
};
