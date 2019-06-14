var k=1;
var temp1=" ",temp2= "",temp3=" ",temp4=" ",temp5=" ",temp6=" ";
var fnames,lnames,mobs,dobs,adds,genders;
function Myfunction()
{


fnames=document.getElementById('fname').value;

if(fnames=="")
{
document.getElementById("s1").innerHTML="Enter value";
document.getElementById("fname").style.borderColor="red";

}
else if(!isNaN(fnames))
{
document.getElementById("s1").innerHTML="Enter Text value";


}
else{
document.getElementById("s1").innerHTML="";
document.getElementById("fname").style.borderColor="green";
}
lnames=document.getElementById('lname').value;
if(lnames=="")
{
document.getElementById("s2").innerHTML="Enter value";
document.getElementById("lname").style.borderColor="red";


}
else if(!isNaN(lnames))
{
document.getElementById("s2").innerHTML="Enter Text value";

}
else{
document.getElementById("s2").innerHTML="";
document.getElementById("lname").style.borderColor="green";

}

dobs=document.getElementById('dob').value;
if(dobs=="")
{
document.getElementById("s3").innerHTML="Select Dob";
document.getElementById("dob").style.borderColor="red";


}
else
{
document.getElementById("s3").innerHTML="";
document.getElementById("dob").style.borderColor="green";

}
mobs=document.getElementById('mob').value;

if(mobs=="")
{
document.getElementById("s5").innerHTML="Type Mob";
document.getElementById("mob").style.borderColor="red";


}
else if(mobs.length!=10)
{
document.getElementById("s5").innerHTML="Type correct mobile number";
document.getElementById("mob").style.borderColor="red";

}
else 
{
document.getElementById("s5").innerHTML="";
document.getElementById("mob").style.borderColor="green";
}


adds=document.getElementById('address').value;
if(adds=="")
{
document.getElementById("s6").innerHTML="Type Add";
document.getElementById("address").style.borderColor="red";

}
else
{
document.getElementById("s6").innerHTML="";
document.getElementById("address").style.borderColor="green";
}


genders = $("input[class='gen']:checked").length;
console.log(genders);
if(genders<1)
{
$('#s4').text("field is empty");
return false;
}
else{
$('#s4').text("");
}
genders = $("input[class='gen']:checked").val();
console.log(genders);


if(fnames!="" && lnames!="" && genders!=null && dobs!="" && adds!="" && mobs.length==10 && mobs!="")
{



// if(temp1!=fnames || temp2!=lnames || temp3!=genders || temp4!=dobs || temp5!=adds || temp6!=mobs)
// {


var tab=document.getElementById("t1");
var row=tab.insertRow(k++);

var cell1=row.insertCell(0);
var cell2=row.insertCell(1);
var cell3=row.insertCell(2);
var cell4=row.insertCell(3);
var cell5=row.insertCell(4);
var cell6=row.insertCell(5);

temp1=fnames;
temp2=lnames;
temp3=genders;
temp4=dobs;
temp5=adds;
temp6=mobs;

cell1.innerHTML=fnames;
cell2.innerHTML=lnames;
cell3.innerHTML=genders;
cell4.innerHTML=dobs;
cell5.innerHTML=mobs;
cell6.innerHTML=adds;



// }
// else
// {
// alert("Already Enter");
// }

}


}
