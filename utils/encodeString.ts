export function encodeString(string: string): string {
  return string
    .split("")
    .map((char) => "%" + char.charCodeAt(0).toString(16))
    .join("");
}
