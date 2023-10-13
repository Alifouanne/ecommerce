/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import useStore from "../app/ZustandStore.js";
//define context and wrap all app to implement secure routes
export const AuthContext = createContext({
  isLoading: false,
  user: {},
});
export const AuthProvider = ({ children }) => {
  const [initialLoader, setInitialLoader] = useState(true);
  const { user, loading, setUser, setLoading } = useStore();
  const navigate = useNavigate();

  const value = useMemo(
    () => ({
      user,
      loading,
    }),
    [user, loading]
  );

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          navigate("/home");
        } else {
          setLoading(true);
          setUser({});
          navigate("/");
        }
        setInitialLoader(false);
        setLoading(false);
      }),
    []
  );

  return (
    <AuthContext.Provider value={value}>
      {initialLoader ? "Loading..." : children}
    </AuthContext.Provider>
  );
};
