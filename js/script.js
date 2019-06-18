    var link = document.querySelector(".hotels-link");
    var form = document.querySelector(".hotels-form");

    var countA = 2;
    var countC = 0;
    var countAd = document.getElementById("guest-adults");
    var countCh = document.getElementById("guest-children");
  
    link.addEventListener("click", function (evt) {
          evt.preventDefault();
          form.classList.toggle("hotels-form-close");
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