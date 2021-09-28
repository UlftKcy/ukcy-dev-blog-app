import { createContext, useState, useEffect } from "react";
import { userObserver } from "../utils/firebase";
import { v4 as uuidv4 } from "uuid";

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
        selectedCard,
        setSelectedCard
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
