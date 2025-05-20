import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

export const useAuth = () => useContext(AuthContext);

export const AuthProvide = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };

  const value = { currentUser, registerUser, loginUser, signInWithGoogle };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
