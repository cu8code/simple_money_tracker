import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
import Titlebar from "../components/titleBar/titleBar";

import { DataHandeler } from "../module/main";

Chart.register(...registerables)

const datahandeler = new DataHandeler(1000, 100)

function RecentAcitivity(props: { chartData: number[] }) {
  return <div className="flex fex-col h-20 w-full mt-10 bg-slate-400"></div>;
}

function Graph(props: { className?: string }) {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "First dataset",
        data: [100, 100, 85, 41, 44],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  return (
    <Line className={props.className || ""} data={data} />
  );
}

export default function Home() {
  return (
    <>
      <Titlebar />
      <div className="w-1/3 h-1/3">
        <Graph />
      </div>
    </>
  );
}
