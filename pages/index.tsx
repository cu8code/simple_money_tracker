import { Chart, registerables } from "chart.js"
import { useState } from "react";

import { AuthSinIn } from "../components/auth/";
import Titlebar from "../components/titleBar/";
import Balance from "../components/balance";
import NewTransaction from "../components/newtransaction";
import RecentActivity from "../components/recentactivity";

Chart.register(...registerables)


export default function Home() {
  const [isSinin, setSinin] = useState<boolean>(true)
  return (
    <>
      <Titlebar />
      {isSinin ? <></> : <AuthSinIn />}
      <Elo></Elo>
    </>
  );
}

function Elo() {
  return (
    <>
    <NewTransaction />
    <Balance />
    <RecentActivity />
    </>
  )
}
