import { onAuthStateChanged } from "firebase/auth";
import { Chart, registerables } from "chart.js"
import { useEffect, useState } from "react";

import useFirebaseContext from "./firebasecontext";
import Auth from "../components/auth";
import Titlebar from "../components/titleBar/titleBar";

Chart.register(...registerables)


export default function Home() {
  const [isSinin, setSinin] = useState<boolean>(true)
  const firebasecontext = useFirebaseContext()
  useEffect(() => {
    if (firebasecontext === null) return
    onAuthStateChanged(firebasecontext.auth, (user) => {
      if (user) setSinin(true)
      else { setSinin(false) }
    })
  }, [])
  return (
    <>
      <Titlebar />
      {isSinin ? <></> : <Auth />}
    </>
  );
}
