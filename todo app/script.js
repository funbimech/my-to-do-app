const inputbox = document.getElementById("input-box");
const button=document. querySelector('.btn')
const list= document.getElementById("list")
const lcontainer= document.querySelector(".lcontainer")
function task() {
button.addEventListener("click",() => {
  if(inputbox.value===''){
    alert(" input a task for the day!")
  } else {
   let li= document.createElement("li");
   li.innerText = inputbox.value;
   list.appendChild(li)
   inputbox.value= ''
  }
}
   
)}
  task();
