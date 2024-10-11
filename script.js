function setName() {
    let username = document.getElementById("name");
    let inputname = document.getElementById("newname");
    username.textContent = inputname.value + ", OK"
}

function setPic() {
    let userpic = document.getElementById("pic");
    let inputpic = document.getElementById("newPic");
    userpic.style.backgroundImage = "url(" + inputpic.value + ")";
}