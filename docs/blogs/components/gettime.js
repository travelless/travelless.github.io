export function gettime(time) {
  var date = new Date(time);
  var seperator1 = "-";
  var seperator2 = ":";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let pm = "AM";
  if(hour>12){
    hour = hour-12;
    pm = "PM";
  }
  if (minute >= 0 && minute <= 9) {
    minute = "0" + minute;
  }
  if (second >= 0 && second <= 9) {
    second = "0" + second;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate
          + " " + hour + seperator2 + minute + seperator2 + second + " " + pm;
  return currentdate;
}