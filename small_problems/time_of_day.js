const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = 60 * HOURS_IN_DAY;

function timeOfDay(totalMinutes) {
  totalMinutes  = normalizeMinutes(totalMinutes);
  let hours;
  if (Math.sign(totalMinutes) === -1) {
    hours = HOURS_IN_DAY - Math.ceil(-totalMinutes / 60);
  } else {
    hours = Math.floor(totalMinutes / 60);
  }
  let minutes;
  if (Math.sign(totalMinutes) === -1) {
    minutes = 60 + (totalMinutes % 60);
  } else {
    minutes = totalMinutes % 60;
  }
  return formatTime(hours, minutes);
}

function normalizeMinutes(totalMinutes) {
  if (Math.sign(totalMinutes) === -1) {
    while (Math.abs(totalMinutes) > MINUTES_IN_DAY) {
      totalMinutes += MINUTES_IN_DAY;
    }
  } else {
    while (Math.abs(totalMinutes) > MINUTES_IN_DAY) {
      totalMinutes -= MINUTES_IN_DAY;
    }
  }
  return totalMinutes;
}

function formatTime(hours, minutes) {
  let hoursString = String(hours);
  let minutesString = String(minutes);
  if (hoursString.length < 2) {
    hoursString = '0' + hoursString;
  }
  if (minutesString.length < 2) {
    minutesString = '0' + minutesString;
  }
  return hoursString + ':' + minutesString;
}

function afterMidnight(timeString) {
  if (timeString === "00:00" || timeString === "24:00") {
    return 0;
  }
  let timeArray = timeString.split(':');
  let minutes = Number(timeArray[0] * 60) + Number(timeArray[1]);
  return minutes;
}

function beforeMidnight(timeString) {
  if (timeString === "00:00" || timeString === "24:00") {
    return 0;
  }
  let timeArray = timeString.split(':');
  let minutes = 1440 - Number(timeArray[0] * 60) - Number(timeArray[1]);
  return minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

