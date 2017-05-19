export function isTextShort(stringArray) {
  let half = true;
  stringArray.forEach((item) => {
    if (item && item.length > 22) {
      half = false
    }
  })
  return half;
}
