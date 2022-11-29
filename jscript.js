let daybutton = document.querySelector(".daily_button");
let weekbutton = document.querySelector(".weekly_button");
let monthbutton = document.querySelector(".monthly_button");

const timearray = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

let cwork = document.getElementById("current_work");
let pwork = document.getElementById("previous_work");
let cplay = document.getElementById("current_play");
let pplay = document.getElementById("previous_play");
let cexe = document.getElementById("current_exe");
let pexe = document.getElementById("previous_exe");
let cstudy = document.getElementById("current_study");
let pstudy = document.getElementById("previous_study");
let csocial = document.getElementById("current_social");
let psocial = document.getElementById("previous_social");
let csc = document.getElementById("current_sc");
let psc = document.getElementById("previous_sc");

daybutton.addEventListener('click', ()=>{
    cwork.textContent = timearray[0].timeframes.daily.current + "hrs";
    pwork.textContent ="Previous - " + timearray[0].timeframes.daily.previous + "hrs";
    cplay.textContent = timearray[1].timeframes.daily.current + "hrs";
    pplay.textContent ="Previous - " + timearray[1].timeframes.daily.previous + "hrs";
    cstudy.textContent = timearray[2].timeframes.daily.current + "hrs";
    pstudy.textContent ="Previous - " + timearray[2].timeframes.daily.previous + "hrs";
    cexe.textContent = timearray[3].timeframes.daily.current + "hrs";
    pexe.textContent ="Previous - " + timearray[3].timeframes.daily.previous + "hrs";
    csocial.textContent = timearray[4].timeframes.daily.current + "hrs";
    psocial.textContent ="Previous - " + timearray[4].timeframes.daily.previous + "hrs";
    csc.textContent = timearray[5].timeframes.daily.current + "hrs";
    psc.textContent ="Previous - " + timearray[5].timeframes.daily.previous + "hrs";
})

weekbutton.addEventListener('click', ()=>{
  cwork.textContent = timearray[0].timeframes.weekly.current + "hrs";
  pwork.textContent ="Last Week - " + timearray[0].timeframes.weekly.previous + "hrs";
  cplay.textContent = timearray[1].timeframes.weekly.current + "hrs";
  pplay.textContent ="Last Week - " + timearray[1].timeframes.weekly.previous + "hrs";
  cstudy.textContent = timearray[2].timeframes.weekly.current + "hrs";
  pstudy.textContent ="Last Week - " + timearray[2].timeframes.weekly.previous + "hrs";
  cexe.textContent = timearray[3].timeframes.weekly.current + "hrs";
  pexe.textContent ="Last Week - " + timearray[3].timeframes.weekly.previous + "hrs";
  csocial.textContent = timearray[4].timeframes.weekly.current + "hrs";
  psocial.textContent ="Last Week - " + timearray[4].timeframes.weekly.previous + "hrs";
  csc.textContent = timearray[5].timeframes.weekly.current + "hrs";
  psc.textContent ="Last Week - " + timearray[5].timeframes.weekly.previous + "hrs";
})

monthbutton.addEventListener('click', ()=>{
  cwork.textContent = timearray[0].timeframes.monthly.current + "hrs";
  pwork.textContent ="Last Month - " + timearray[0].timeframes.monthly.previous + "hrs";
  cplay.textContent = timearray[1].timeframes.monthly.current + "hrs";
  pplay.textContent ="Last Month - " + timearray[1].timeframes.monthly.previous + "hrs";
  cstudy.textContent = timearray[2].timeframes.monthly.current + "hrs";
  pstudy.textContent ="Last Month - " + timearray[2].timeframes.monthly.previous + "hrs";
  cexe.textContent = timearray[3].timeframes.monthly.current + "hrs";
  pexe.textContent ="Last Month - " + timearray[3].timeframes.monthly.previous + "hrs";
  csocial.textContent = timearray[4].timeframes.monthly.current + "hrs";
  psocial.textContent ="Last Month - " + timearray[4].timeframes.monthly.previous + "hrs";
  csc.textContent = timearray[5].timeframes.monthly.current + "hrs";
  psc.textContent ="Last Month - " + timearray[5].timeframes.monthly.previous + "hrs";
})