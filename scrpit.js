var l = ["1","2","3","+","4","5","6","-","7","8","9","*","0",".","/","="]


var min = document.createElement("main")
    document.getElementsByTagName("body")[0].appendChild(min)
var resulta = document.createElement("div")
    resulta.setAttribute("id", "result")
    document.getElementsByTagName("main")[0].appendChild(resulta)

for (let i = 0; i < l.length; i++) {
    var bouton = document.createElement("button")
    document.getElementsByTagName("main")[0].appendChild(bouton)
    document.getElementsByTagName("button")[i].innerHTML = (l)[i]
    console.log("plop");
    
    
}

for (let j = 0; j < l.length; j++) {
    var btn = document.getElementsByTagName("button")[j]
    btn.addEventListener("click", function(){
        console.log("plop");
        var ecran = document.getElementById("result")
        this.innerText = (l)[j]
    })
}