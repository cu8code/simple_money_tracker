import { Chart, registerables } from "chart.js"
import { useRef } from "react";
import Titlebar from "../components/titleBar/titleBar";

Chart.register(...registerables)


export default function Home() {
  const button = useRef<HTMLButtonElement>(null)
  return (
    <>
      <Titlebar />
      <div className="w-full max-w-2xl m-auto flex sm:py-5 px-1">
        <input type="text" className="border"></input>
      </div>
      <button ref={button} className="w-1/3 m-auto flex ">SAVE</button>
    </>
  );
}
