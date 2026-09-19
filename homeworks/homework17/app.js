let container1 = document.createElement("div");
container1.className = "container";
container1.style.display = "flex";
container1.style.flexDirection = "column";
container1.style.gap = "25px";
container1.style.maxWidth = "200px";
// task 1
let button1 = document.createElement("button");
button1.textContent = "Type text in input and after click here";
let input1 = document.createElement("input");
let buttonText;
let butonTextNode = document.createTextNode(buttonText);
button1.onclick = function() {
    button1.textContent = input1.value;
};
// я не знаю как это сделать правильно но зато без ии (сначало пишешь текст в инпут и потом нжимаешь кнопку)
container1.append(button1, input1);

// task 2
let title2 = document.createElement("p");
title2.textContent = "Your good that img didn't load";
let img2 = document.createElement("img");
img2.src = "#";
img2.alt = "bad img of mykola";
container1.append(title2, img2);

// task 3
let link3 = document.createElement("a");
link3.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMVHnkm_0WRYRMslvvKqsHj9j5uFfhfYP_9WXwyTsJg&s=10";
link3.textContent = "img link"
let img3 = document.createElement("img");
img3.src = link3.href;
container1.append(link3, img3);

// task 4 
let list4 = document.createElement("ul");
let item2 = document.createElement("li");
item2.textContent = "huh?";
let item3 = document.createElement("li");
item3.textContent = "last task";
let item4 = document.createElement("li");
item4.textContent = "You are safe";

item4.textContent = "Mykola is coming";
list4.append(item2, item3, item4);
container1.append(list4)
// append
document.body.append(container1);