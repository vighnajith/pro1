var popupover=document.querySelector(".popup");
var popupbox1=document.querySelector(".popbox");
var addpop1=document.getElementById("addpopup1");
function show(){
    popupover.style.display="block"
    popupbox1.style.display="block"
}
function closep(){
    popupover.style.display="none"
    popupbox1.style.display="none"
}

var box=document.querySelector(".box")
var addmovie=document.getElementById("addmovie")
var moviename=document.getElementById("movie-name")
var heroname=document.getElementById("hero-name")
var moviedes=document.getElementById("movie-description")

addmovie.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","moviebox")
    div.innerHTML=`<h2>${moviename.value}</h2>
            <h4>${heroname.value}</h4>
            <p>${moviedes.value}</p>
            <button onclick="deletemovie(event)">Watched</button>`
    box.append(div)
    popupover.style.display="none"
    popupbox1.style.display="none"
})
function deletemovie(event){
    event.target.parentElement.remove()
}