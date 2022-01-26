export type UserType = {
  id?: string;
  email?: string;
  token?: string;
};

export type CredentialsType = {
  email: string;
  password: string;
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
