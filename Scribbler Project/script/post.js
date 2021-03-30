//get edit 
var editBtn = document.getElementById("edit");
//get save 
var saveBtn = document.getElementById("save");
//get heading
var heading = document.getElementById("postheading");
//get heading edit input field
var headingEdit = document.getElementById("editing");
//get post
var postContent = document.getElementById("post");
//get post textarea
var postEdit = document.getElementById("postedit");
//get like 
var like = document.getElementById("like");
//get like para
var likes = document.getElementById("likes");
//get comment
var comment = document.getElementById("comments");
//get comment add
var commentsec = document.getElementById("allComment");

function editPost() {
    heading.style.display = "none";
    headingEdit.style.display = "block";

    postContent.style.display = "none";
    postEdit.style.display = "block";

    editBtn.style.display = "none";
    saveBtn.style.display = "block";

    headingEdit.value = heading.textContent;
    var value = postContent.textContent.trim();
    postEdit.innerHTML = value;


    postEdit.style.height = "1px";
    postEdit.style.height = (25 + postEdit.scrollHeight) + "px";

}

function savePost() {
    heading.style.display = "block";
    headingEdit.style.display = "none";

    postContent.style.display = "block";
    postEdit.style.display = "none";

    editBtn.style.display = "block";
    saveBtn.style.display = "none";

    heading.innerHTML = headingEdit.value;
    postContent.innerHTML = postEdit.value;
}

var count = 0;

function likePost() {

    like.innerHTML = "<img src=\'https://img.icons8.com/fluent-systems-filled/20/ffffff/facebook-like.png\'/>Liked!";
    count++;
    if (count == 1) {
        likes.innerHTML = "1 person has liked this!";
    }
    else {
        likes.innerHTML = count + " people have liked this!";
    }

}

function postComment() {
    var newP = document.createElement("P");
    var text = document.createTextNode(comment.value);
    newP.appendChild(text);
    newP.setAttribute("class", "comment");
    commentsec.insertBefore(newP, commentsec.childNodes[0]);
}
