var buttons = document.getElementById("button");
var sounds = document.getElementById("sound");

var milk_sound= document.getElementById("milk");
var hope_sound= document.getElementById("hope");
var illuminati_sound= document.getElementById("illuminati");
var crime_sound= document.getElementById("crime");

var one= document.getElementById("one");
var two= document.getElementById("two");
var three= document.getElementById("three");
var four= document.getElementById("four");


one.addEventListener("click", playSound1);

function playSound1(){
milk.play();

}

two.addEventListener("click", playSound2);

function playSound2(){
hope.play();

}

three.addEventListener("click", playSound3);

function playSound3(){
illuminati.play();


}

four.addEventListener("click", playSound4);

function playSound4(){
	crime.play();
}


var cheat = [68, 79, 85, 66, 76, 69]; 
	
	var userKeypresses = [];
	
	document.addEventListener("keydown", processKeydown);
	
	function processKeydown(event){
		var keycode = event.keyCode;
		
		userKeypresses.push(keycode);
		
		var validCheat = true;
		for(var i = 0; i < cheat.length; i++) {
			var cheatKeycode = cheat[i];
			var userKeypressed = userKeypresses[i];
			
			if(userKeypressed != cheatKeycode){
				validCheat = false;
			}
		}
		
		if(validCheat == true){
			console.log("Doing our cheat!");
			doCheat();
		}else{
			console.log("invalid cheat");
		}
	}
	
	function doCheat(){
		
		var htmlBody = document.getElementsByTagName('body')[0];
		
		htmlBody.style.backgroundImage = "url('steve.gif')";
		
	}
