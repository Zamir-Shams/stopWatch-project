// taking each element form DOM 
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const sec = document.querySelector("#sec");
const min = document.querySelector("#min");
const hou = document.querySelector("#hou");

let counter = 0;
function takeVale(){
   sec.innerHTML = counter;
   counter ++;
   let uniqueID;
}

let counter1 = 1;
function takeVale1(){
   min.innerHTML = counter1;
   counter1 ++;
   let uniqueID1;
}


start.addEventListener("click", (e) => {
   uniqueID = window.setInterval(takeVale, 100);
   uniqueID1 = window.setInterval(takeVale1, 1000);
})

stop.addEventListener("click", (e) => {
   window.clearInterval(uniqueID);
   window.clearInterval(uniqueID1);
})

reset.addEventListener("click", (e) => {
   sec.innerHTML = 00;
   min.innerHTML = 00;
})


// others code
/*
window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  

}

*/
// end of others code