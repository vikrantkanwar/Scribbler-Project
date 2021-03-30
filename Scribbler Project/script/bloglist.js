//get confirmation modal
var conModel = document.getElementsByClassName("confirmboxmodal")[0];
//return trash icon css selector
var conbtn = document.querySelectorAll("i");
//get no button
var conNo = document.getElementById("n");
var k;
for (k = 0; k < conbtn.length; k++) {
    let btn = conbtn[k];
    btn.onclick = function () {
        conModel.style.display = "flex";
    }
}

conNo.onclick = function () {
    conModel.style.display = "none";
}
