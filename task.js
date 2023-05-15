// <!-- .Create a simple web page with a button. When the button is clicked, display an alert box that says "Hello, World!" -->

function greet(){
    alert("Hello World !")
}
// 2.Create a web page with two buttons. When the first button is clicked, change the background color of the page to blue. When the second button is clicked, change the background color of the page to red.
function blue(){
    document.body.style.backgroundColor="blue"
}
function red(){
    document.body.style.backgroundColor="red"
}
///////3
function text(){
   let a=  document.getElementById("t").value
   alert(a)
}
//444444
function pic(){
   let im = document.getElementById("i").src="https://images.unsplash.com/photo-1683903645998-cd43f7865824?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"


}
///////5
function quote(){
    let rand = Math.round(Math.random()*4)
    let b = document.getElementById("q").value;
    if(rand == 0){
  b.innerHTML="hii"
    }
   else if(rand == 1){
    b.innerHTML ="A friend in need is friend indeed !" 
    }
    else if(rand == 2){
        b.innerHTML ="Kill the time in good things before time kills u !" 
    }
    else if(rand == 3){
        b.innerHTML="Honesty is the best policy !" 
    }
    else{
        b.innerHTML ="Expect the unexpected !" 
    }






}
//6
function length(){
    let d = document.getElementById("in").value;

    alert(d.length)
}

///7
function date(){
  let d= new Date()
 alert(  "current date and time "+ d.toLocaleString())
    
}