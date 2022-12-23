import { Chart, registerables } from "chart.js"
import { useState } from "react";

import { AuthSinIn } from "../components/auth/";
import Titlebar from "../components/titleBar/";
import Balance from "../components/balance";
import NewTransaction from "../components/newtransaction";
import RecentActivity from "../components/recentactivity";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getApp } from "firebase/app";

Chart.register(...registerables)


export default function Home() {
  const [issignin, setsignin] = useState<boolean>(false)
  const auth = getAuth(getApp())
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setsignin(true)
    }
  })
  return (
    <>
      <Titlebar />
      {issignin ? <></> : <AuthSinIn />}
      <NewTransaction />
      <Balance />
      <RecentActivity />
    </>
  );
}

