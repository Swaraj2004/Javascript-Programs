// To stop it after running a set number of times,
// just add a counter to the interval,
// then when it reached that number clear it.
var timesRun = 0;
var interval = setInterval(function(){
    timesRun += 1;
    if(timesRun === 60){
        clearInterval(interval);
    }
    //do whatever here..
}, 2000);

// If you want to stop it after a set time
// has passed (e.g. 1 minute) you can do:
var startTime = new Date().getTime();
var interval = setInterval(function(){
    if(new Date().getTime() - startTime > 60000){
        clearInterval(interval);
        return;
    }
    //do whatever here..
}, 2000);
