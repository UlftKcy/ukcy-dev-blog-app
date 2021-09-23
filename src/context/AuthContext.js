import { createContext, useState, useEffect } from "react";
import { userObserver } from "../functions/firebase";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [selectedCard, setSelectedCard] = useState([]);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, selectedCard, setSelectedCard }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
