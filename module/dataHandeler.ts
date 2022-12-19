export type Datahandeler = {
  money: number,
  numberOfDays: number
}

export function Datahandeler(money: number, numberOfDays: number): Datahandeler {
  return {
    money: money,
    numberOfDays: numberOfDays
  }
}

export function getIdealDataPoint(e: Datahandeler): number[] {
  const a = []
  for (let index = 1; index < e.numberOfDays; index++) {
    a.push(index)
  }
  return a
}

export function getUserDataPoint(e: Datahandeler): number[] {
  const a = []
  for (let index = 1; index < e.numberOfDays; index++) {
    a.push(index)
  }
  return a
}

export function getLabel(e: Datahandeler): string[] {
  const a = []
  for (let index = 1; index < e.numberOfDays; index++) {
    a.push(String(index))
  }
  return a
}


