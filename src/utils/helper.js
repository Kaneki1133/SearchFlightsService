function compareTime(timeString1 , timeString2){
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);

    return dateTime1 > dateTime2;
}

function compareDay(dayString1 , dayString2){
    let day1 = new Date(dayString1);
    let day2 = new Date(dayString2);

    return day1.getDate() > day2.getDate();
}

module.exports = {
    compareTime
}