let btnClick = document.getElementById("labelButton");
let btnclickMalkovich = document.getElementById("clickMalkovich");
btnClick.onclick = clickFunc;
btnclickMalkovich.onclick = clickMalkovich;

let text = document.getElementById("showText");
var timer = null;

function clickFunc() {
  if (timer === null) {
    timer = setInterval(showBigger, 500);
  } else {
    clearInterval(timer);
    timer = null;
  }
}

function showBigger() {
  var fontSize = $("#showText").css("fontSize");
  fontSize = parseInt(fontSize) + 2 + "pt";
  $("#showText").css("fontSize", fontSize);
}

function changeStyle() {
  if (text.style.fontWeight == "bold") {
    text.style.fontWeight = "normal";
  } else {
    text.style.fontWeight = "bold";
  }
  text.style.color = "green";
  text.style.textDecoration = "underline";
  document.body.style.backgroundImage = "http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg";
}

function clickMalkovich(){
  let result = text.value;
  const myArray = result.split(" ");
  for( let i =0 ;i < myArray.length;i++){
    if(myArray[i].length >=5) { 
      myArray[i] = "Malkovitch" ;
    }
  }
  text.innerHTML = myArray.join(" ");
}