import { getAuth, onAuthStateChanged } from "firebase/auth";
import { child, getDatabase, ref, get } from "firebase/database";
import { useState } from "react";

type T = {
  data: string;
  amount: number
}[] | null

export default function Balance() {
  const [balance, setbalance] = useState<number | null>(0)
  const [latestmoneyrecived, setlatesmoneyrecived] = useState<T>(null)
  onAuthStateChanged(getAuth(), result => {
    if (result) {
      const dbrf = ref(getDatabase())
      const userid = result.uid
      get(child(dbrf, `user/${userid}/balance`)).then((result) => {
        if (result.exists()) {
          setbalance(result.val())
        } else {
          console.log("ERROR NO VAL");
        }
      })
    }
  })
  return (
    <div className="flex flex-col w-full p-6 text-gray-700 " >
      <div className="flex w-full justify-between border-b-2 py-1">
        <h1 className="mb-2 text-3xl font-bold tracking-tight ">Balance</h1>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-green-500">💸{balance}</h1>
      </div>
      <div>
        <div className="flex w-full justify-center bg-slate-100 border-b-2 p-1"> Latest Money Recived </div>
        <div className="flex w-full justify-between bg-slate-100 border-b-2 p-1">
          <div>Fir Dec 23 00:23</div>
          <div className="text-green-500 font-bold">100</div>
        </div>
        <div className="flex w-full justify-between border-b-2 p-1">
          <div>Fir Dec 20 00:23</div>
          <div className="text-green-500 font-bold">100</div>
        </div>
        <div className="flex w-full justify-between bg-slate-100 border-b-2 p-1">
          <div>Fir Dec 15 00:23</div>
          <div className="text-green-500 font-bold">18000</div>
        </div>
      </div>
    </div>
  )
}
