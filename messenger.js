var active = document.getElementsByClassName("_2v6o");
var bg = document.getElementsByClassName("_673w");
var received = document.getElementsByClassName("_2her");
var rightDelivered = document.getElementsByClassName("_2jnt");
var colorchint;

//actions
bg[0].onmouseover = function() {clearInterv();}
rightDelivered[0].onclick = function() {clearDeliv();}


//main

if (active[0].innerText == "Active on Messenger") {
    chColorsForActive();
}
else if (received[0].title == "Delivered") {
	chColorsForDelivered();
}




//=================== FUNCTIONS ===================

//for delivered
async function chColorsForDelivered() {
	y = 1;
	for (var i = 0; i < 6; i++) {
		chColorsDelivered();
		await sleep(1000);
	}
}

function chColorsDelivered() {
    if (y === 1) {
        color = "#1e1e1e";
        y = 2;
    } else {
        color = "orange";
        y = 1;
    }
    
    rightDelivered[0].style.background = color;
}
//stuff for delivered
function clearDeliv() {
	rightDelivered[0].style.background = "#1e1e1e";
}


//for active
function chColorsForActive() {
    x = 1;
    colorchint = setInterval(chColorsActive, 1000);
}

function chColorsActive() {
    if (x === 1) {
        color = "red";
        x = 2;
    } else {
        color = "orange";
        x = 1;
    }
    
    bg[0].style.background = color;
}
//stuff for active
function clearInterv() {
	if (colorchint) {
		clearInterval(colorchint);
		bg[0].style.background = "green";
	}

}


//accessories
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}