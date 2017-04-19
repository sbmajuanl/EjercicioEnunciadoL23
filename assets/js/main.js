var contenedor = document.getElementsByClassName("contenedor")[0];
/**Primera Caja**/
var box1=document.createElement("box1");
var box2=document.createElement("box2");
var box3=document.createElement("box3");

box1.setAttribute("class","box1");
box1.style.width="190px";
box1.style.height="200px";
box1.style.position="absolute";
box1.style.background="rgba(244, 67, 54, 0.86)";

box2.setAttribute("class","box2");
box2.style.position="absolute";
box2.style.width="100px";
box2.style.height="102px";
box2.style.margin="50px -50px";
box2.style.background="rgba(103, 58, 183, 0.68)";

box3.setAttribute("class","box3");
box3.style.position="absolute";
box3.style.width="45px";
box3.style.height="50px";
box3.style.left="0px";
box3.style.background="yellow";


box1.appendChild(box2);
box2.appendChild(box3);
contenedor.appendChild(box1);

/**Segunda Caja**/
var box4=document.createElement("box4");
var box5=document.createElement("box5");
var box6=document.createElement("box6");

box4.setAttribute("class","box4");
box4.style.width="190px";
box4.style.height="200px";
box4.style.position="absolute";
box4.style.top="220px";
box4.style.background="rgba(0, 0, 255, 0.78)";

box5.setAttribute("class","box5 verde");
box5.style.position="absolute";
box5.style.width="100px";
box5.style.height="102px";
box5.style.margin="50px -50px";
box5.style.background="#00800b";

box6.setAttribute("class","box6 negro");
box6.style.position="absolute";
box6.style.width="45px";
box6.style.height="50px";
box6.style.background="black";
box6.style.left="-45px";
box6.style.top="-50px";

box4.appendChild(box5);
box5.appendChild(box6);
contenedor.appendChild(box4);
