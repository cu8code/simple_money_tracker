import { getDatabase, ref, set } from "firebase/database";

export default function writeNewTransaction(userId: string, val: string) {
  const split = val.split(" ");
  const money = split[0];
  let d = "";
  if (split.length >= 2) {
    for (let index = 1; index < split.length; index++) {
      const element = split[index];
      d += " " + element;
    }
  }
  const db = getDatabase();

  set(ref(db, `user/${userId}/transaction/${Date.now()}`), {
    amount: Number(money),
    description: d
  });
}

