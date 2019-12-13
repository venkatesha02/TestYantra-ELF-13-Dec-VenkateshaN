function lifetimer() {

    today = new Date()

    BirthDay = new Date(document.live.age.value)

    timeold = (today.getTime() - BirthDay.getTime());

    msPerDay = 24 * 60 * 60 * 1000;

    timeold = (today.getTime() - BirthDay.getTime());

    e_daysold = timeold / msPerDay;

    daysold = Math.floor(e_daysold);

    document.live.time1.value = daysold

    timerID = setTimeout("lifetimer()", 1000)

}