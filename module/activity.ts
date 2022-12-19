
export type Activity = {
  money: number
  titile: string
  tag: string[]
}

export function Activity(money: number, title: string, tag: string[]): Activity {
  return {
    money: money,
    titile: title,
    tag: tag
  }
}


