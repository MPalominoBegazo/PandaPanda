var pictures = ["assets/img/panda1.jpg", "assets/img/panda2.jpg", "assets/img/panda3.jpg", "assets/img/panda4.jpg"];

var galleryImg = document.getElementById("Gallery");
var divInfo = document.getElementById("info");

for (var i = 0; i < pictures.length; i++) {
    var img = document.createElement("img");
    img.src = pictures[i];
    img.setAttribute("class","bordes");

    var close = document.createElement("img");
    close.src = "assets/img/close.png";
    close.setAttribute("class","closeIt");
    close.setAttribute("id",i);
    //close.addEventListener("click",eliminar(event));

    
    galleryImg.appendChild(close);
    galleryImg.appendChild(img);

}

var or = document.getElementById("or");
or.addEventListener("click", function(){
    var origin = document.getElementById("origin");
    origin.style.display = "block";
});

var ext = document.getElementById("ext");
ext.addEventListener("click", function(){
    info="";
    var extent = document.getElementById("extent");
    extent.style.display = "block";
});

var res = document.getElementById("res");
res.addEventListener("click", function(){
    info="";
    var restore = document.getElementById("restore");
    restore.style.display = "block";
});

function eliminar(element){

}
/*
var origin = document.getElementById();
var info = document.getElementById("info");*/