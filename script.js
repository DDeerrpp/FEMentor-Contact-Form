var errorArray = document.querySelectorAll(".error");
var textArray = document.querySelectorAll('input');
const submitBtn = document.querySelector(".submit");
const msg = document.getElementById("msg");
var success = document.querySelector(".success");


submitBtn.addEventListener("click", () => {
    var unfilledForm = false;
    textArray.forEach((el, index) => {
        if (el.value == "") {
            errorArray[index].style.display = "block";
            unfilledForm = true;
        } else {
            errorArray[index].style.display = "none";
        }
    })

    if (textArray[3].checked || textArray[4].checked) {
        errorArray[3].style.display = "none";
    } else { errorArray[3].style.display = "block"; unfilledForm = true; }
    
    if (msg.value.length < 2) {
        errorArray[4].style.display = "block";
        unfilledForm = true;
    } else errorArray[4].style.display = "none";

    if (!textArray[5].checked) {
        errorArray[5].style.display = "block";
        unfilledForm = true;
    } else errorArray[5].style.display = "none";
    
    if(!unfilledForm) {
        success.style.display = "flex";
        textArray.forEach((el, index) => {
            el.value = "";
            el.checked = false;
        })
        msg.value = "";
    }
    
})



