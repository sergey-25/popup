//   var delay_popup = 2000;
//      setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);


   const popup = document.querySelector(".popup");
    const close = document.querySelector(".close");


    window.addEventListener("load", function () {

        showPopup();
        // setTimeout(function(){
        //   popup.classList.add("show");
        // },5000)

    })

    function showPopup() {
        const timeLimit = 1 // seconds;
        let i = 0;
        const timer = setInterval(function () {
            i++;
            if (i == timeLimit) {
                clearInterval(timer);
                popup.classList.add("show");
            }
            
        }, 1000);
    }


    close.addEventListener("click", function () {
        popup.classList.remove("show");
    })