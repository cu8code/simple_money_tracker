import React, { ReactNode, useContext } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { initializeAuth, Auth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
import firebaseconfig from "../firebase.config";

type T = {
  app: FirebaseApp;
  auth: Auth;
  storage: FirebaseStorage;
} | null;

const app = initializeApp(firebaseconfig);

const Context = React.createContext<T>(null);

export function FirebaseProvider(props: { children: ReactNode }) {
  return (
    <Context.Provider
      value={{
        app: app,
        auth: initializeAuth(app),
        storage: getStorage(app),
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default function useFirebaseContext() {
  return useContext(Context);
}
