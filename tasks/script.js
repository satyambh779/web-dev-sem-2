const profile =document.getElementById("profile")

profile.style.backgroundColor="tomato"


const x =  document.getElementsByClassName("important");
console.log(x)

for(let i=0;i<x. length;i++){
    x[i].style.color = "red"
}

// task3

const task3 = document.getElementsByTagName("p");
console.log(task3)

for(let i=0;i<task3.length;i++){
    if(i%2==0){
        task3[i].style.color="blue"
    }
    else{
        task3[i].style.color="green"
    }
}
task3[task3.length-1].style.fontWeight="bold";

//task 4 

const task4 = document.querySelectorAll(".box");
for(let i=0;i<task4.length;i++){
    task4[i].style.backgroundColor="lightgrey";
}
task4.textcontent="im first box"

//task5 
const task5 = document.querySelectorAll("# content p");
for(let i=0;i<task5.length;i++){
    task5[i].style.color="purple"
}
