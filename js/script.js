var button = document.querySelector(".hotels-button");
var form = document.querySelector(".hotels-form");

var arrivalDate = document.querySelector("[name=arrival-date]");
var departureDate = document.querySelector("[name=departure-date]");

var countA = 2;
var countC = 0;
var countAd = document.getElementById("guest-adults");
var countCh = document.getElementById("guest-children");


button.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("hotels-form-close");
    form.classList.remove("hotels-form-error");
});

form.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value) {
        evt.preventDefault();
        form.classList.remove("hotels-form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("hotels-form-error");
    } 
  
    if(arrivalDate.value){
      departureDate.focus();
    } else {
      arrivalDate.focus();
    }
});

function plusAd(){
        countA++;
        countAd.value = countA;
    };
    
function minusAd(){
      if (countA > 0) {
        countA--;
        countAd.value = countA;
    }
};

function plusCh(){
        countC++;
        countCh.value = countC;
    };

function minusCh(){
    if (countC > 0) {
        countC--;
        countCh.value = countC;
    }
};