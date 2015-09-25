/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Opgave 1 : DOM 
function myFunction() {
    var myElement = document.getElementById("list");
    var myArray = myElement.getElementsByTagName("input");
    document.getElementById("a").innerHTML = myArray[0].value;
    document.getElementById("b").innerHTML = myArray[1].value;
    document.getElementById("c").innerHTML = myArray[2].value;
    document.getElementById("d").innerHTML = myArray[3].value;
}



//Opgave 2 : Events
document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
            text = target.textContent || text.innerText;
    target.contentEditable = true;
}, false);




// Opgave 3 : Callbacks
var stud1 = {id: 1, name: "Bob", classroom: "123"};

adminStud(stud1, logItem);
adminStud(stud1, registerItem);

function adminStud(stud, callback) {

    callback(stud);
}
;

//Admin stud metoder
function logItem(stud) {
    console.log("Name: " + stud.name + " id: " + stud.id + ", Classroom: " + stud.classroom);
}

function registerItem(stud) {
    var students = [];
    students.push(stud);
    console.log("StudentArray = " + students.valueOf());
}






