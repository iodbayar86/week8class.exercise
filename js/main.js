


document.getElementsByClassName("class1")[0].style.backgroundColor = "teal";

var newH1 = document.createElement("h1");
newH1.innerText = "Mongolian countryside";
	

document.getElementById("id1").appendChild(newH1);

var anotherNewH1 = document.createElement("h1");
var newTextNode = document.createTextNode("Click the button to cycle through the images.");

anotherNewH1.appendChild(newTextNode);
document.getElementById("id2").appendChild(anotherNewH1);


var images = [
	
	"img/mongolia.jpg",

	"img/mongolia2.jpg",

	"img/mongolia3.jpg",

	"img/mongolia4.jpg"
];

var image = document.getElementById("image1");

var counter= 0;

function changeImageSrc() {
	counter++;
	
	if(counter >= images.length){
		counter = 0;
	}
	
	image.src = images[counter];
	
};