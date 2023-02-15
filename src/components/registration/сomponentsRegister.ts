export function checkValidLoginSignUP(value: string) {
  if (value.length >= 5 && !(value === value.toLowerCase())) {
    return true;
  }
  return false;
}
