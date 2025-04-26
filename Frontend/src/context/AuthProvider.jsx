import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const storedUser = localStorage.getItem("Users");
  let parsedUser = null;

  try {
    parsedUser = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing user from localStorage", error);
    parsedUser = null;
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
