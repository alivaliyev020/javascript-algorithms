export const longestWord = (sentence) => {
  const arr = sentence.replace(/[^a-zA-Z ]/g, "").split(" ");
  arr.sort((a, b) => {
    return b.length - a.length;
  });
  console.log(arr);
  console.log(arr[0]);

  //punktuations-durgu isarelerini ignore et, -- /[^a-zA-Z ]/g -- herf ve bosluq yoxdursa demekdir ve bizde replace ile bosluqla evez etdik
  //cumleni bosduxlardan bol yazilardan array yarat,
  //arraye herflerin sayi azalan sekilde duz
  // en arrayin en birinci kelimesinii return et yeni en cox karakteri olani.
}