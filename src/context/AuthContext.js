import { createContext, useState, useEffect } from "react";
import { userObserver } from "../functions/firebase";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userValues, setUserValues] = useState(null);
  const [selectedCard, setSelectedCard] = useState([]);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userValues,
        setUserValues,
        selectedCard,
        setSelectedCard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
