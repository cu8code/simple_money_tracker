import { getAuth, onAuthStateChanged } from "firebase/auth";
import { child, getDatabase, ref, get } from "firebase/database";
import { useState } from "react";

type T = {
  data: string;
  amount: number
}[] | null

async function getBalance(userid: string) {
  const db = getDatabase()
  const dbrf = ref(db)
  const b = await get(child(dbrf, `user/${userid}/balance`))
  return b.val() as number | null
}

async function getTransacrion(userid: string) {
  const db = getDatabase()
  const dbrf = ref(db)
  const b = await get(child(dbrf, `user/${userid}/transaction`))
  const r = b.val()
  return r
}

function unwrapTransaction(e: any | null) {
  if (e === null) { return <></> }
  for (const key in e) {
    if (e.hasOwnProperty(key)) {
      return (<div key={key} className="flex w-full justify-between bg-slate-100 border-b-2 p-1">
        <div>{key}</div>
        <div className="text-green-500 font-bold">{e[key].money}</div>
      </div>)
    }
  }
}

export default function Balance() {
  const [balance, setbalance] = useState<number | null>(0)
  const [transaction, setTransaction] = useState<any | null>(null)

  onAuthStateChanged(getAuth(), result => {
    if (result) {
      getBalance(result.uid).then(result => setbalance(result))
      getTransacrion(result.uid).then(result => setTransaction(result))
      window.addEventListener('newtransaction', () => {
        getTransacrion(result.uid).then(result => setTransaction(result));
      }, { once: true })
    }
  })

  return (
    <div className="flex flex-col w-full p-6 text-gray-700 " >
      <div className="flex w-full justify-between border-b-2 py-1">
        <h1 className="mb-2 text-3xl font-bold tracking-tight ">Balance</h1>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-green-500">💸{balance}</h1>
      </div>
      <div>
        {unwrapTransaction(transaction)}
      </div>
    </div>
  )
}
