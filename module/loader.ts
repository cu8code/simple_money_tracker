import { ActivityManger } from "./acitivityManger";
import { Activity } from "./activity"
import { Datahandeler } from "./dataHandeler";

export function loadFromLocal(e: "Acitvity"): ActivityManger
export function loadFromLocal(e: "DataHandeler"): Datahandeler

export function loadFromLocal(e: any) {
  if (e === "Activity") {
    const data = window.localStorage.getItem("Activity") || ""
    const ndata = Number(window.localStorage.getItem("NumberOfActivity") || 0)

    let a, b, c, d, f;
    f = []
    for (let index = 0; index < ndata; index++) {
      const splitData = data.split(",")
      a = Number(splitData[index])
      b = splitData[index + 1]
      c = splitData[index + 2]
      d = Activity(a, b, [c])
      f.push(d)
    }
    return ActivityManger(f)
  }
  else if (e === "DataHandeler") {
    const data = window.localStorage.getItem("DataHandeler") || ""
    const splitData = data.split(",")
    const [money, days] = splitData
    return Datahandeler(Number(money), Number(days))
  }
}
