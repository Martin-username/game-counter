let countEl = document.getElementById("num-elh");
let count = 0;

function increaseOne(){
  count += 1;
  countEl.textContent = count;
}

function increaseTwo(){
  count += 2;
  countEl.textContent = count;
}

function increaseThree(){
  count += 3;
  countEl.textContent = count;
}


let gstEl = document.getElementById("num-elg");
let countGst = 0;

function gstOne(){
  countGst += 1;
  gstEl.textContent = countGst;
}

function gstTwo(){
  countGst += 2;
  gstEl.textContent = countGst;
}

function gstThree(){
  countGst += 3;
  gstEl.textContent = countGst;
}

function rstCount(){
  
  countEl.textContent = 0;
  count = 0;
  
  gstEl.textContent = 0;
  countGst = 0;
}

     //Timer
      let countdownEl = document.getElementById("countdown");
      let seconds = 0;
      let interval = null;
      
      
      
      //Update the timer
      function timer (){
        seconds ++;
        
      
      //Format our time
      let hrs = Math.floor(seconds / 3600);
      let mins = Math.floor((seconds -(hrs * 3600)) / 60);
      let secs = seconds % 60;
      
      if (secs < 10) secs = "0" + secs;
      if (mins < 10) mins = "0" + mins;
      if (hrs < 10) hrs = "0" + hrs;
      
      
      countdownEl.textContent = `${mins}:${secs}`;
        
      }
      
      function gameStr(){
        if(interval){
          return;
        }
        interval = setInterval(timer, 1000);
      }
      
      
      function timerPs(){
        clearInterval(interval);
        interval = null;
      }
      
      
      function timerRst(){
        stop();
        seconds = 0;
        countdownEl.textContent = '00:00';
      }
      
      
        
        //current time
        
        
     let TimeEl = document.getElementById("time");




      
      
 
     
    
        function checkTime(i) {
        if (i < 10) {
  
        i = "0" + i;
        }
        return i;
         }

  function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  
  if (h < 10) h = '0'+ h;
    
  // Don't need to add '0', depending on the browser configuration.
  //if (m < 10) m = '0'+ m;
  //if (s < 10) s = '0'+ s;
    
  // add a zero in front of numbers<10
  
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').textContent = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime();
  }, 500);
  }
  startTime();
  
  