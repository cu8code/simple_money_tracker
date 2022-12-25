import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useRef, useState } from "react"

function writeNewTransaction(userid: string, data: { money: number, description: string }) {
  window.dispatchEvent(new Event('newtransaction'))
  const db = getDatabase()
  set(ref(db, `user/${userid}/transaction/${Date.now()}/`), data)
}

export default function NewTransaction() {
  const [userid, setUserid] = useState<string | null>(null)
  const textArea = useRef<HTMLTextAreaElement | null>(null)
  onAuthStateChanged(getAuth(), res => { if (res) setUserid(res.uid) })

  return (
    <div className="flex flex-col w-full p-6 text-gray-700">
      <h1 className="flex w-full text-3xl font-bold ">New Transaction</h1>
      <div>
        <label className="sr-only">Your message</label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50">
          <button className="inline-flex justify-center p-2 text-gray rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-400">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path></svg>
            <span className="sr-only">Upload image</span>
          </button>
          <textarea ref={textArea} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="{amount} {details...}"></textarea>
          <button className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-red-200">
            <svg aria-hidden="true" className="w-6 h-6 rotate-90 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center m-1 align-middle ">
        <div className="inline-flex p-2 space-x-1">
          <button onClick={() => userid ? writeNewTransaction(userid, { money: 19, description: "" }) : undefined} className="flex bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Income
            <svg aria-hidden="true" className="w-6 h-6 rotate-90 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
          </button>
          <button onClick={() => userid ? writeNewTransaction(userid, { money: -19, description: "" }) : undefined} className="flex bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Expense
            <svg aria-hidden="true" className="w-6 h-6 rotate-90 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
          </button>
        </div>
      </div>
    </div >
  )
}
