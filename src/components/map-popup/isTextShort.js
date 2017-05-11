export function isTextShort(stringArray) {
  let half = true;
  stringArray.forEach((item) => {
    if (item.length > 22) {
      half = false
    }
  })
  return half;
}
