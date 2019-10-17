// var l = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "/", "DEL", "="]

// var min = document.createElement("main")
// document.getElementsByTagName("body")[0].appendChild(min)

// var resulta = document.createElement("div")
// resulta.setAttribute("id", "result")
// document.getElementsByTagName("main")[0].appendChild(resulta)

// var hasPoint =  false

// for (let i = 0; i < l.length; i++) {
//     var bouton = document.createElement("button")
//     document.getElementsByTagName("main")[0].appendChild(bouton)
//     document.getElementsByTagName("button")[i].innerHTML = (l)[i]

//     var btn = document.getElementsByTagName("button")[i]
//     btn.addEventListener("click", function () {
//         var c = this.innerHTML
//         var d = resulta.innerHTML.charAt(resulta.innerHTML.length - 1)
//         var r = 0
//         if (c == "=") {
//             resulta.innerHTML = eval(resulta.innerHTML)
//         }
//         else if(c >= '0' && c <= '9'){
//             resulta.innerHTML = resulta.innerHTML + c
//         }
//         else if ((d != "+" && d != "-" && d != "*" && d != "/") && (c == "+" || c == "-" || c == "*" || c == "/")) {
//             resulta.innerHTML = resulta.innerHTML + c
//             hasPoint = false
//         }
//         else if (c == "." && !hasPoint) {
//             resulta.innerHTML = resulta.innerHTML + c
//             hasPoint = true
//         } 

//         if (c == "DEL") {
//             resulta.innerHTML = ""
//         }
//     })
// }
$(document).ready(function(){
    var l = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "/", "DEL", "="]
    
    var main = $("<main>");
    $("body").append(main);
    var resulta = $("<div id='result'>");
    $("main").append(resulta);
    
    var hasPoint =  false
    for (let i = 0; i < l.length; i++) {
        var btn = $("<button>");
        $("main").append(btn)
        $(btn).html(l[i])
        
        $(btn).click(function(){
            
            var c = $(this).html()
            var d = $(resulta).html().charAt(resulta.html().length - 1)
            if (c == "=") {
                resulta.html(eval(resulta.html()))
            }
            else if(c >= '0' && c <= '9'){
                resulta.html(resulta.html() + c) 
            }
            else if ((d != "+" && d != "-" && d != "*" && d != "/") && (c == "+" || c == "-" || c == "*" || c == "/")) {
                resulta.html(resulta.html() + c)
                hasPoint = false
            }
            else if (c == "." && !hasPoint) {
                resulta.html(resulta.html() + c)
                hasPoint = true
            } 
            if (c == "DEL") {
                resulta.html("")
            }
        });
    }
});
        
        
        
        
        
        
        