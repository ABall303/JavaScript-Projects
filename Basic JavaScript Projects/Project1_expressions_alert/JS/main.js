document.write("Click Button to See Function!");                                //Instructions to see function//
function My_First_Function() {                                                  //Name of function//
    var str = "My First Function!";                                             //results of activating function//
     str+= " My First String!";                                                 //string value//
    var result = str.fontcolor ("red");                                         //Font color of function results//
    document.getElementById("Red_Text").innerHTML = result;                     //connecting fuction resutls to HTML//
}