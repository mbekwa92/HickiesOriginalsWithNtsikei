//get elements and put them in variables

var modal = document.getElementById("simplemodal");
//get label element
var mylabel = document.getElementById("colorlabel");

//get modal button
var modalBtn = document.getElementById("addtocartbutton");

//getClose Button
var closeBtn = document.getElementsByClassName("closeBtn")[0];
var cancelBtn = document.getElementById("cancelBtn");

//listen for a click
modalBtn.addEventListener("click",openModal);

//listen for close click
closeBtn.addEventListener('click',closeModal);
cancelBtn.addEventListener('click',closeModal);

//listen for outside click
window.addEventListener('click',outsideClick);

//function to open modal
function openModal(){
		modal.style.display = 'block';
}	

function closeModal(){
	modal.style.display = 'none';
}

//passing event parameter, target is equal to modal
function outsideClick(e){
	if(e.target==modal){

		modal.style.display = 'none';
	}
}

//listener for agree button within modal
function Agree(){

	//to be implemented
	modal.style.display = 'none';
}



//colors
var colchooserab = document.getElementById("aliceB");
colchooserab.addEventListener("click",changeLabel);

//function to call when div is selected
function changeLabel(){

	mylabel.innerHTML = "Orange";

}


var colchooserblack = document.getElementById("black");
colchooserblack.addEventListener("click",changeLabelB);
//function to call when div is selected
function changeLabelB(){

	mylabel.innerHTML = "Black";

}


var colchooserblue = document.getElementById("blue");
colchooserblue.addEventListener("click",changeLabelBlue);

//function to call when div is selected
function changeLabelBlue(){

	mylabel.innerHTML = "Blue";

}

var colchooserbv = document.getElementById("blueviolet");
colchooserbv.addEventListener("click",changeLabelblueviolet);

//function to call when div is selected
function changeLabelblueviolet(){

	mylabel.innerHTML = "BlueViolet";

}

var colchooserb = document.getElementById("brown");
colchooserb.addEventListener("click",changeLabelbrown);

//function to call when div is selected
function changeLabelbrown(){

	mylabel.innerHTML = "Brown";

}

var colchoosercha = document.getElementById("chartreuse");
colchoosercha.addEventListener("click",changeLabelchartreuse);

//function to call when div is selected
function changeLabelchartreuse(){

	mylabel.innerHTML = "Chartreuse";

}

var colchooserchoc = document.getElementById("chocolate");
colchooserchoc.addEventListener("click",changeLabelchocolate);

//function to call when div is selected
function changeLabelchocolate(){

	mylabel.innerHTML = "Chocolate";

}

var colchooserfg = document.getElementById("fg");
colchooserfg.addEventListener("click",changeLabelforestgreen);

//function to call when div is selected
function changeLabelforestgreen(){

	mylabel.innerHTML = "ForestGreen";

}

var colchooserdpnk = document.getElementById("deepink");
colchooserdpnk.addEventListener("click",changeLabeldeepink);

//function to call when div is selected
function changeLabeldeepink(){

	mylabel.innerHTML = "DeepPink";

}

var colchooserdv = document.getElementById("darkviolet");
colchooserdv.addEventListener("click",changeLabeldarkviolet);

//function to call when div is selected
function changeLabeldarkviolet(){

	mylabel.innerHTML = "DarkViolet";

}

var colchooserdodgerblue = document.getElementById("dodgerblue");
colchooserdodgerblue.addEventListener("click",changeLabeldodgerblue);

//function to call when div is selected
function changeLabeldodgerblue(){

	mylabel.innerHTML = "DodgerBlue";

}



var colchoosergold = document.getElementById("gold");
colchoosergold.addEventListener("click",changeLabelgold);

//function to call when div is selected
function changeLabelgold(){

	mylabel.innerHTML = "Gold";

}

var colchooserlg = document.getElementById("lg");
colchooserlg.addEventListener("click",changeLabellg);

//function to call when div is selected
function changeLabellg(){

	mylabel.innerHTML = "LawnGreen";

}


var colchoosermagenta = document.getElementById("magenta");
colchoosermagenta.addEventListener("click",changeLabelmagenta);

//function to call when div is selected
function changeLabelmagenta(){

	mylabel.innerHTML = "Magenta";

}



var colchoosergreen = document.getElementById("green");
colchoosergreen.addEventListener("click",changeLabelgreen);

//function to call when div is selected
function changeLabelgreen(){

	mylabel.innerHTML = "Green";

}




var colchooserindigo = document.getElementById("indigo");
colchooserindigo.addEventListener("click",changeLabelindigo);

//function to call when div is selected
function changeLabelindigo(){

	mylabel.innerHTML = "Indigo";

}

var colchoosermedblue = document.getElementById("medblue");
colchoosermedblue.addEventListener("click",changeLabelmedblue);

//function to call when div is selected
function changeLabelmedblue(){

	mylabel.innerHTML = "Medium Blue";

}

var colchooserfb = document.getElementById("fb");
colchooserfb.addEventListener("click",changeLabelfb);

//function to call when div is selected
function changeLabelfb(){

	mylabel.innerHTML = "Fire Brick";

}