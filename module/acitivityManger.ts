import { Activity } from "./activity"

export type ActivityManger = {
  allActivity: Activity[]
}

export function ActivityManger(e: Activity[]): ActivityManger {
  return {
    allActivity: e
  }
}

