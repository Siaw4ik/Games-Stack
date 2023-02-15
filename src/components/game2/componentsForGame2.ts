export function deltaCurrentAnPrevTime(a: number, b: number) {
  return a - b;
}

export function returnFalcyArgs(a: boolean, b: boolean, c = false) {
  return (a = false), (b = false), (c = false);
}
