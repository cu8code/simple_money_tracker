import { onAuthStateChanged } from "firebase/auth";
import { Chart, registerables } from "chart.js"
import { useEffect, useState } from "react";

import { AuthSinIn, AuthSinUp } from "../components/auth/";
import Titlebar from "../components/titleBar/";

Chart.register(...registerables)


export default function Home() {
  const [isSinin, setSinin] = useState<boolean>(true)
  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <Titlebar />
      {isSinin ? <></> : <AuthSinIn />}
      <Elo></Elo>
    </div>
  );
}

function Elo() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      { /* next wprth */}
      <div className="flex flex-col w-full p-6 text-gray-700 " >
        <div className="flex w-full justify-between border-b-2 py-1">
          <h1 className="mb-2 text-3xl font-bold tracking-tight ">Next Worth</h1>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-green-500">💸18200</h1>
        </div>
        <div>
          <div className="flex w-full justify-between bg-slate-100 border-b-2 p-1">
            <div>****112</div>
            <div className="text-green-500 font-bold">100</div>
          </div>
          <div className="flex w-full justify-between border-b-2 p-1">
            <div>****152</div>
            <div className="text-green-500 font-bold">100</div>
          </div>
          <div className="flex w-full justify-between bg-slate-100 border-b-2 p-1">
            <div>****119</div>
            <div className="text-green-500 font-bold">18000</div>
          </div>
        </div>
      </div>
      { /* New Transaction */}
      <div className="flex flex-col w-full p-6 text-gray-700">
        <h1 className="flex w-full text-3xl font-bold ">New Transaction</h1>
        <form>
          <label className="sr-only">Your message</label>
          <div className="p-1 m-1 overflow-y-scroll">
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+10</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+50</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+100</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+200</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+300</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+500</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+10</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+50</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+100</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+200</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+300</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+500</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+10</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+50</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+100</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+200</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+300</a>
            <a className="p-1 m-1 bg-red-500 rounded-full text-white">+500</a>
          </div>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50">
            <button className="inline-flex justify-center p-2 text-gray rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-400">
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
              <span className="sr-only">Upload image</span>
            </button>
            <textarea id="chat" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="{amount} {details...}"></textarea>
            <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-red-200">
              <svg aria-hidden="true" className="w-6 h-6 rotate-90 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
        <div className="flex w-full justify-center m-1 align-middle ">
          <div className="inline-flex p-2 space-x-1">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Expense</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Income</button>
          </div>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="flex w-full flex-col p-6 text-gray-700">
        <h1 className="mb-2 text-3xl font-bold tracking-tight ">Recent Activity</h1>
        <a href="#" className="flex p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">1000</h5>
          <p className="font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </a>
      </div>
    </div>
  )
}
