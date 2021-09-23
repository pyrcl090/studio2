console.log("hello");

//toggle on and off for title and image+description
var recUn = document.querySelector(".rec1");
var recDeux = document.querySelector(".rec2");
recUn.addEventListener("click", function(){

    recDeux.classList.toggle("active");

})

var tranUn = document.querySelector(".tran1");
var tranDeux = document.querySelector(".tran2");
tranUn.addEventListener("click", function(){

    tranDeux.classList.toggle("active");

})

var playUn = document.querySelector(".play1");
var playDeux = document.querySelector(".play2");
playUn.addEventListener("click", function(){

    playDeux.classList.toggle("active");

})

var conUn = document.querySelector(".con1");
var conDeux = document.querySelector(".con2");
conUn.addEventListener("click", function(){

    conDeux.classList.toggle("active");

})
