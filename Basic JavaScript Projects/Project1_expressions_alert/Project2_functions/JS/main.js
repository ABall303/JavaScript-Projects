document.write("Click Button to See Function!");                                 //Instructions to see function//
function MyFunction() {                                                          //Name of function//
    var str = "I am learning functions";                                         //results of activating function//
    str+= " and this is my first string function"                                //string of function//
    var result = str.fontcolor ("red");                                          //Font color of funtion results//
    document.getElementById("Concatenate").innerHTML = result;                   //connecting fuction resutls to HTML//
}