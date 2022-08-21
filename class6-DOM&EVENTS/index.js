const container=document.getElementsById("container");
container.innerHTML = "soy un texto";

const containers = document.getElementsByClassName("box");
containers[2].innerHTML = "soy un container";

const title = document.getElementById("title");
const nodeText = document.createTextNode("soy un titulo");
title.appendChild(nodeText);


