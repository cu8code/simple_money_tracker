import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"

import Titlebar from "../components/titleBar/titleBar";
import { Datahandeler,  getLabel, getUserDataPoint } from "../module/dataHandeler";

Chart.register(...registerables)

const datahandeler = Datahandeler(1000, 10)

function RecentAcitivity(props: { chartData: number[] }) {
  return <div className="flex fex-col h-20 w-full mt-10 bg-slate-400"></div>;
}

function Graph() {
  const data = {
    labels: getLabel(datahandeler),
    datasets: [
      {
        label: "First dataset",
        data: getUserDataPoint(datahandeler),
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
    <Line data={data} />
  );
}

export default function Home() {
  return (
    <>
      <Titlebar />
      <div className="w-full max-w-2xl m-auto flex sm:py-5 px-1">
        <Graph />
      </div>
    </>
  );
}
