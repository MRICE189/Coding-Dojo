function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    var r_hour = (180+(12 * (time/3600)));
    var r_mins = (180+(6 * ((time/60)%60)));
    var r_secs = (180+(6 * (time%60)));
    document.getElementById('hour').style.transform = `rotate(${r_hour}deg)`;
    document.getElementById('minutes').style.transform = `rotate(${r_mins}deg)`;
    document.getElementById('seconds').style.transform = `rotate(${r_secs}deg)`;
    var hour = parseInt(time/3600).toLocaleString(undefined, {minimumIntegerDigits: 2});
    var mins = parseInt((time/60)%60).toLocaleString(undefined, {minimumIntegerDigits: 2});
    var secs = parseInt(time%60).toLocaleString(undefined, {minimumIntegerDigits: 2});
    var digital = document.querySelector('h1');
    digital.textContent = `${hour}: ${mins}: ${secs}`;
}, 1000);
