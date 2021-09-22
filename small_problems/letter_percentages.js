function letterPercentages(string) {
  let total = string.length;
  let regex1 = /[a-z]/g;
  let regex2 = /[A-Z]/g;

  let lowercase = string.match(regex1);
  let uppercase = string.match(regex2);

  let numLC = lowercase ? lowercase.length : 0;
  let numUC = uppercase ? uppercase.length : 0;

  let lcPercent = ((numLC / total) * 100).toFixed(2);
  let ucPercent = ((numUC / total) * 100).toFixed(2);
  let nPercent = (((total - lowercase - uppercase) / total) * 100).toFixed(2);

  return {
    lowercase: lcPercent,
    uppercase: ucPercent,
    neither: nPercent
  };
}