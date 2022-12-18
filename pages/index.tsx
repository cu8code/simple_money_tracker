import { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";

import Titlebar from "../components/titleBar/titleBar";

const line: ChartData<"line", any, unknown> = {
  labels: ["a", "b", "c"],
  datasets: [{ label: "anakn", data: 9 }],
};

function RecentAcitivity() {
  return <div className="flex fex-col h-20 w-full mt-10 bg-slate-400"></div>;
}

function Graph() {
  return (
    <canvas className="flex flex-col h-20 w-full mt-10 bg-slate-300"></canvas>
  );
}

export default function Home() {
  return (
    <>
      <Titlebar />
      <Line options={{}} data={line} />
    </>
  );
}
