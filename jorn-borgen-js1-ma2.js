// Question (1)
const myFunctionExpression = function(){
    console.log("Jorn");
}


//Question (2)
const btnClass = document.querySelector(".btn");
btnClass.addEventListener("click", btnClicked);
function btnClicked(){
    console.log("I was clicked");
}


//Question (3)
const inputName = document.querySelector("#firstName");
inputName.addEventListener("keydown", keyDown);
function keyDown(event){
    console.log(event.code);
}



//Question (4)
const btnAnimal = document.querySelectorAll("button")[1]; //Since there is two buttons, select the one for this task
btnAnimal.addEventListener("mouseover", classAdd);
function classAdd(){
    btnAnimal.classList.add("hover");
}


//Question (5)
const btnAnimal2 = document.querySelector("[data-animal]");
btnAnimal2.addEventListener("mouseout", classRemove);
function classRemove(){
    btnAnimal2.classList.remove("hover");
}


//Question (6)
let listItems = document.querySelectorAll("li");
listItems.forEach(function(item){
    item.addEventListener("mouseover", listAllValues)
});
function listAllValues(e){
    console.log(e.target.dataset.animal);
}


//Question (7)
const animal = "cow";
switch(animal)
{
    case "cat":
        console.log("Meow");
    break;

    case "cow":
        console.log("Moo");
    break;

    case "bird":
        console.log("Tweet");
    break;

    default:
        console.log("Harrumph");
    break;
}


//Question (8)
const sheep = ["Malcolm", "Anders", "Marie"];
sheep.forEach(function(e){
    console.log(e);
});


//Question (9)
const intervalId = setInterval(interval, 500);
let counter = 0;

function interval(){
    console.log("Hello");
    counter++;
    if(counter === 6){
        clearInterval(intervalId);
    }
}


//Question (10)
const divSelect = document.querySelector("div");
const intervalId2 = setInterval(textUpdate, 2000);
function textUpdate(){
    divSelect.innerHTML = "Text Updated";
}