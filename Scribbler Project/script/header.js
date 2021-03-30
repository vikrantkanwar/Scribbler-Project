//Get sign in modal
var signin = document.getElementById('signInModal');
// Get signin button that opens the modal
var signinbtn = document.getElementById("signIn");
// close the modal
var signinSpan = document.getElementById("signInClose");
// click on the btn and the sign in model opens
signinbtn.onclick = function () {
    signin.style.display = "block";
}
// click on x and the modal closes
signinSpan.onclick = function () {
    signin.style.display = "none";
}
// Get  Sign up modal
var signup = document.getElementById('signUpModal');
// Get signup button that opens the modal
var signupbtn = document.getElementById("signUp");
// close the modal
var signupSpan = document.getElementById("signUpClose");
// click on the btn and sign up modal opens
signupbtn.onclick = function () {
    signup.style.display = "block";
}
// click on x and the modal closes 
signupSpan.onclick = function () {
    signup.style.display = "none";
}
// Whenever you click anywhere outside of the modal it closes
window.onclick = function (event) {
    if (event.target == signup) {
        signup.style.display = "none";
    }
    if (event.target == signin) {
        signin.style.display = "none";
    }
}
// click when user is not a member and it will redirect to sign up screen
function signUp() {
    signin.style.display = "none";
    signup.style.display = "block";
}
