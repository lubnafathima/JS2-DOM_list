console.log("working");
let title = document.getElementById('title');
title.textContent = "hello DOM"; 
 
let para = document.getElementById('para');

let bold = document.createElement('b');
para.appendChild(bold);

let list = document.getElementById('list');
let item1 = document.createElement('li');
let item2 = document.createElement('li');
let item3 = document.createElement('li');
let item4 = document.createElement('li');
let item5 = document.createElement('li');
item1.textContent = 'Item';
item2.textContent = 'Item';
item3.textContent = 'Item';
item4.textContent = 'Item';
item5.textContent = 'Item';
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);
list.appendChild(item5);

let body = document.body;
body.style.backgroundColor = "pink";

let unordered = document.getElementById('unordered');
let last = unordered.lastElementChild;
unordered.removeChild(last);

let div = document.createElement('div');
div.textContent = 'Item';
body.appendChild(div);

let content = document.createElement('p');
content.textContent = 'content content';
body.appendChild(content);
content.style.backgroundColor = "purple";
content.style.color = "red";

let paraAll = document.querySelectorAll('p');