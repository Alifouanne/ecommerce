/* eslint-disable no-unused-vars */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import useStore from "../app/ZustandStore";
//custom hook to perform auth functions 
const useAuth = () => {
  const { user, error, loading, setError, setLoading, setUser } = useStore();
  const navigate = useNavigate();
  const signup = async (email, password) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/home");
        setUser(res.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };
  const signin = async (email, password) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/home");
        setUser(res.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };
  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };
  return { signup, signin, logout, user, loading, error };
};

export default useAuth;
