var l = ["1","2","3","+","4","5","6","-","7","8","9","*","0",".","/","DEL","="]

var min = document.createElement("main")
document.getElementsByTagName("body")[0].appendChild(min)

var resulta = document.createElement("div")
resulta.setAttribute("id", "result")
document.getElementsByTagName("main")[0].appendChild(resulta)

for (let i = 0; i < l.length; i++) {
    var bouton = document.createElement("button")
    document.getElementsByTagName("main")[0].appendChild(bouton)
    document.getElementsByTagName("button")[i].innerHTML = (l)[i]
    
    var btn = document.getElementsByTagName("button")[i]
    btn.addEventListener("click", function(){
        var c = this.innerHTML
        var d = resulta.innerHTML.charAt(resulta.innerHTML.length-1)

    if (c == "="){
        resulta.innerHTML = eval(resulta.innerHTML)
    }
     else {
        resulta.innerHTML = resulta.innerHTML + c
    } 
    if (c == "DEL") {
        resulta.innerHTML = ""
    }
    if ((d == "+" ||d == "-" || d =="." ||d == "*" || d == "/") && (c == "+" ||c == "-" || c =="." ||c == "*" ||c == "/")){
        c = ""
    }

    })

}
