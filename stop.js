let timeee = 0 , batman , h2 = document.getElementById("h2");

function MakesThisDamnThingWork() {

    let hours = Math.floor(timeee/36000);
    let Minutes = Math.floor(timeee/600)%60;
    let SecondsTillMillionSubs = Math.floor(timeee/10)%60;
    let SuperSmallMiliSeconds = timeee%10;
    
    
    h2.textContent = String(hours).padStart(2, '0') + ":" +
    String(Minutes).padStart(2, '0') + ":" +
    String(SecondsTillMillionSubs).padStart(2, '0') + "." +
    SuperSmallMiliSeconds;



}

function StartTheDamnStopWatch() {

if (!batman) {
    batman = setInterval( () => {

timeee++;

MakesThisDamnThingWork();


    },100 );
}

}

function StopThisNonSense() {

clearInterval(batman);

batman = 0;

}

function IWannaDoItAgain() {

StopThisNonSense();
timeee = 0;
MakesThisDamnThingWork();


}
