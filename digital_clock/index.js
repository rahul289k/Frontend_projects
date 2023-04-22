const hourElemet = document.getElementById("Hour");
const minuteElement = document.getElementById("Minute");
const secondElement = document.getElementById("Second");
const ampmElement = document.getElementById("AMPM");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if (h >12){
        h = h - 12
        ampm = "PM"
    }

    hourElemet.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    ampmElement.innerText = ampm;
    setTimeout(()=>{updateClock(); void
    updateClock()
 }, 1000)
 

}
updateClock()