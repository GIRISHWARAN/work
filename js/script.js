$(document).ready(function(){
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
});

var i=1;
function cartadd()
{

document.getElementById('badges').innerHTML=i++;


}
function subscribe()
{

 temp=document.getElementById('s1').value;
if(temp!="")


	
{
	alert(temp+"Successfully Subscribed");
}
else
{
	alert("Please Enter Email");
}

}