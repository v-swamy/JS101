function dms(angle) {
  if (Math.abs(angle) > 360) {
    angle = Math.abs(angle % 360);
  } else if (Math.sign(angle) === -1) {
    angle = 360 + angle;
  }
  let degrees = Math.floor(angle);
  let decimal = angle % 1;
  let minutes = String(Math.floor(decimal * 60));
  let seconds = String(Math.floor(((decimal * 60) % 1) * 60));
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }
  return `${degrees}°${minutes}'${seconds}"`;
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 60°00'00"