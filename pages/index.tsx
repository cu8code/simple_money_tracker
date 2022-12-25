import { Chart, registerables } from "chart.js"
import { useState } from "react";

import { AuthSinIn } from "../components/auth/";
import Titlebar from "../components/titleBar/";
import Balance from "../components/balance";
import NewTransaction from "../components/newtransaction";
import { getAdditionalUserInfo, getAuth, getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { getApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

Chart.register(...registerables)

const db = getDatabase()


function inilizieUser(id: string): void {
  set(ref(db, `user/${id}`), {
    balance: 0,
    transactions: [],
  })
}

export default function Home() {
  const [issignin, setsignin] = useState<boolean>(true)
  const auth = getAuth(getApp())

  getRedirectResult(getAuth()).then(user => {
    if (user) {
      const d = getAdditionalUserInfo(user)
      if (d) {
        if (d.isNewUser) {
          inilizieUser(user.user.uid)
        }
      }
    }
  })

  onAuthStateChanged(auth, (result) => {
    result ? setsignin(true) : setsignin(false)
    if (result === null) return
  })
  return (
    <>
      <Titlebar />
      {issignin ? <></> : <AuthSinIn />}
      <NewTransaction />
      <Balance />
    </>
  );
}
