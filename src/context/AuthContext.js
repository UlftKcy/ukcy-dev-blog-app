import { createContext, useState, useEffect } from "react";
import { userObserver } from "../utils/firebase";

export const AuthContext = createContext();

function AuthContextProvider({children}) {
  const [currentUser, setCurrentUser] = useState();
  const [blogDetail, setBlogDetail] = useState([]);

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        blogDetail,
        setBlogDetail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
