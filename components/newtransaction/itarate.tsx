export default function itarate(obj: any): any[][] | undefined {
  const KEY = [];
  const VAL = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      KEY.push(key);
      VAL.push(obj[key]);
    }
    return [KEY, VAL];
  }
}

