export default function camelCaseToWords(s: string, capsLock: boolean = false) {
  const result = s.replace(/([A-Z])/g, " $1");
  return capsLock
    ? result.toUpperCase()
    : result.charAt(0).toUpperCase() + result.slice(1);
}
