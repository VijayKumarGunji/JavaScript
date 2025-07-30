//let myname ="vijay"
//var age = 27
//const myaddress ="Nellore"
//console.log("My name is " + myname + " Age ", age + " Adress ", myaddress);
document.getElementById("addbtn").addEventListener("click", function(){
    var val1 = document.getElementById("place1").value;
    var val2 = document.getElementById("place2").value;
    document.getElementById("result").innerHTML= parseInt(val1) + parseInt(val2);
});
document.getElementById("subbtn").addEventListener("click", function(){
    var val1 = document.getElementById("place1").value;
    var val2 = document.getElementById("place2").value;
    document.getElementById("result").innerHTML= parseInt(val1) - parseInt(val2);
});
document.getElementById("multibtn").addEventListener("click", function(){
    var val1 = document.getElementById("place1").value;
    var val2 = document.getElementById("place2").value;
    document.getElementById("result").innerHTML= parseInt(val1) * parseInt(val2);
});
document.getElementById("divisionbtn").addEventListener("click", function(){
    var val1 = document.getElementById("place1").value;
    var val2 = document.getElementById("place2").value;
    document.getElementById("result").innerHTML= parseInt(val1) / parseInt(val2);
});

document.getElementById("comparatorbtn").addEventListener("click", function(){
    var val1 = document.getElementById("place1").value;
    var val2 = document.getElementById("place2").value;
    var retult = parseInt(val1) + parseInt(val2);
    if(retult > 200){
        document.getElementById("comparators").innerHTML= "the result is greter than 200";
    }
    if(retult == 200){
        document.getElementById("comparators").innerHTML= "the result is 200";
    }
    if(val1 > 200 && val2 == 100){
        document.getElementById("comparators").innerHTML= "this is a logical AND operator";
    }
    
});


function changegreeting()
{
    document.getElementById("greeting").innerHTML= navigator.appVersion;
}