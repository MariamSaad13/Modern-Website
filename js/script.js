var inputs=document.querySelectorAll('input');
var username=document.querySelector('input[type="text"]');
var password=document.querySelector('input[type="password"]');
var submit= document.querySelector("#submit");
for (i of inputs){
        i.addEventListener('keyup',disableText);
}
function disableText (){
    this.addEventListener("keyup",()=>{
        if(username.value!=0 && password.value!=0 ){
            document.getElementById("write").disabled=false;        //enable textarea
            document.getElementById("submit").disabled=false;       //enable button      
        }
    else{
             document.getElementById("write").disabled=true;        //disable textarea
             document.getElementById("submit").disabled=true;       //disable button
        }
    })
}
submit.addEventListener("click", ()=>{
        alert(`Thank you for the message, ${username.value}!`);
    })



























































