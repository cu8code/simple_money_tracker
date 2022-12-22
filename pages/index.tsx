import { onAuthStateChanged } from "firebase/auth";
import { Chart, registerables } from "chart.js"
import { useEffect, useState } from "react";

import Auth from "../components/auth";
import Titlebar from "../components/titleBar/titleBar";

Chart.register(...registerables)


export default function Home() {
  const [isSinin, setSinin] = useState<boolean>(true)
  return (
    <>
      <Titlebar />
      {isSinin ? <></> : <Auth />}
    </>
  );
}
