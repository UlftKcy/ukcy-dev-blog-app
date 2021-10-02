import { createContext, useState, useEffect } from "react";
import { userObserver } from "../utils/firebase";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [blogDetail, setBlogDetail] = useState([]);
  

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  const values = {
    currentUser,
    setCurrentUser,
    blogDetail,
    setBlogDetail,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
