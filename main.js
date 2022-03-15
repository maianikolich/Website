var menubtn = document.querySelector(".icon");
menubtn.addEventListener("click", showdisplay);

function showdisplay(){
    var links = document.querySelector("#Mylinks");
    if (links.style.display == "none"){
        links.style.display = "block";
    } else{
        links.style.display = "none"
    }
}


