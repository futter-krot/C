export function reverseString(str) {
  if (typeof(str) == 'string') {
  	return str.split("").reverse().join("");
  }
  else {
  	return "Error"
  }
}