'use strict';
let i=0;

document.querySelector('.save').addEventListener('click',function(){
const task = document.querySelector('#task').value;
if(task === '')
    alert("Enter task to add in to-do list");
else{
    console.log(task);
    const newDiv = document.createElement("div");
    const newLi = document.createElement("li");
    const newButton = document.createElement("button");
    const closeButton = document.createElement("button");
    const newText = document.createTextNode(' • '+task);
    newDiv.className="newDiv"+i;
    newDiv.setAttribute('id','divid'+i);
    console.log(newDiv);
    newDiv.style.backgroundColor='#c3eeeb';

    newDiv.style.border="1px solid";
    newDiv.style.borderRadius="4px";
    newDiv.style.margin="5px";
    newDiv.style.padding="4px";
    newDiv.style.fontSize="19px";
    newDiv.style.B="4px";
    newDiv.style.padding="4px";

    newButton.textContent='✔';
    newButton.style.border='none';
    newButton.style.margin='1px';
    newButton.style.backgroundImage='linear-gradient( to top, #00e64d,#faf0e6)';
    //newButton.style.backgroundColor='#00e64d';
    newButton.setAttribute('id',i);
    newButton.setAttribute('onclick','done(this.id)');

    closeButton.textContent='✖';
    closeButton.style.margin='1px';
    closeButton.style.border='none';
   closeButton.style.backgroundImage='linear-gradient( to top,#ff3333,#faf0e6)';
    // closeButton.style.backgroundColor='#ff3333';
    closeButton.setAttribute('id',i);
    closeButton.setAttribute('onclick','cls(this.id)');
    closeButton.className="closebtn";
    console.log(closeButton);


    newLi.append(newButton);
    newLi.append(closeButton);
    newLi.append(newText);
    newDiv.appendChild(newLi);
    // document.querySelector('.list').appendChild(newButton);
    document.querySelector('.list').appendChild(newDiv);
    i++;
}
});
function cls(id){
    console.log("btn");
    console.log('divid'+id);
    const val=document.querySelector('#divid'+id);
    val.style.display='none';


}
function done(id){
    console.log('divid'+id);
    const val=document.querySelector('#divid'+id);
    console.log(val);
    val.style.color="white";
    val.style.backgroundColor= '#00cc44';
}
