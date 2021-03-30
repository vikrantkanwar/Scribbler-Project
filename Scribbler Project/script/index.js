// get create post modal 
var createPost = document.getElementById('createPostModal');

// Get the signup button that opens the modal
var createPostBtn = document.getElementById("createBtn");

// Get the <span> element that closes the create modal
var createmodalSpan = document.getElementById("createModalSpan");

// When the user clicks on <span> (x), close the modal
createmodalSpan.onclick = function () {
    createPost.style.display = "none";
}

// When the user clicks on the create Post button, open the modal
createPostBtn.onclick = function () {
    createPost.style.display = "block";
}
