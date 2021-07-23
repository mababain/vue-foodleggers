export function isIdsSample(firstObj, secondObj) {
  return firstObj.name === secondObj.name && firstObj.options.id === secondObj.options.id
}
