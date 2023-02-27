export function createObjParametr(name: string, opt: string) {
  const obj = {
    username: name.slice(6),
    option: opt,
  };
  return obj;
}
