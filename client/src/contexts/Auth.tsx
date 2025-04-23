import { createContext, useState, ReactNode, useContext } from "react";

type User = {
  email?: string;
  id?: number;
  isConnected: boolean;
} | null;

export type AuthContextType = {
  user: User | null;
  handleUser?: (user: User | null) => void;
  setUser?: (user: User | null) => void;
};

// Create the context with default values
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Provider component props
interface AuthProviderProps {
  children: ReactNode;
}

// Implement the provider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Some code to replace this one
  const [user, setUser] = useState<User | null>({ isConnected: false });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
