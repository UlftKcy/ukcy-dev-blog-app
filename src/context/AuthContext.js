import { createContext, useState, useEffect } from "react";
import { userObserver } from "../utils/firebase";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [selectedCard, setSelectedCard] = useState();
 

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        selectedCard,
        setSelectedCard
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
