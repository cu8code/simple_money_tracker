import { getApp } from "firebase/app";
import { Auth, getAuth, NextOrObserver, onAuthStateChanged, User } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useRef, useState } from "react"

type Transaction = {
  userId: string
  date: string
  time: string
  amount: string
  description: string
}


function writeNewTransaction(args: Transaction) {
  const db = getDatabase();
  set(ref(db, 'users/' + args.userId), {
    date: args.date,
    time: args.time,
    amount: args.amount,
    description: args.description
  });
}


export default function NewTransaction() {
  const incomeButton = useRef<HTMLButtonElement | null>(null)
  const expenseButtonSend = useRef<HTMLButtonElement | null>(null)
  const expenseButton = useRef<HTMLButtonElement | null>(null)
  const cameraButton = useRef<HTMLButtonElement | null>(null)
  const inputElment = useRef<HTMLTextAreaElement | null>(null)
  const incomeDepositList = useRef<Transaction[] | null>(null)
  const [issignin, setsigin] = useState<boolean>(false)
  const [email, setemail] = useState<string | null>(null)
  const auth = getAuth(getApp())


  onAuthStateChanged(auth, (user) => {
    if (user) {
      setemail(user.email)
      setsigin(true)
    }
  })
  useEffect(() => {

  }, [])

  return (
    <div className="flex flex-col w-full p-6 text-gray-700">
      <h1 className="flex w-full text-3xl font-bold ">New Transaction</h1>
      <form>
        <label className="sr-only">Your message</label>
        <div className="p-1 m-1 overflow-y-scroll">
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">10</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">50</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">100</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">200</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">300</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">500</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">10</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">50</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">100</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">200</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">300</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">500</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">10</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">50</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">100</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">200</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">300</a>
          <a className="p-1 m-1 bg-red-500 rounded-full text-white">500</a>
        </div>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50">
          <button ref={cameraButton} className="inline-flex justify-center p-2 text-gray rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-400">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path></svg>
            <span className="sr-only">Upload image</span>
          </button>
          <textarea ref={inputElment} className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="{amount} {details...}"></textarea>
          <button ref={expenseButtonSend} type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-red-200">
            <svg aria-hidden="true" className="w-6 h-6 rotate-90 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
      <div className="flex w-full justify-center m-1 align-middle ">
        <div className="inline-flex p-2 space-x-1">
          <button ref={incomeButton} className="flex bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Income
            <svg aria-hidden="true" className="w-6 h-6 rotate-90 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
          </button>
          <button ref={expenseButton} className="flex bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Expense
            <svg aria-hidden="true" className="w-6 h-6 rotate-90 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
