var div = document.getElementById("teste");
div.addEventListener("touchstart", handleStart, false);
div.addEventListener("touchend", handleEnd, false);
div.addEventListener("touchcancel", handleCancel, false);
div.addEventListener("touchmove", handleMove, false);


var swipeStart = {};
var swipeEnd = {};
var swiped = {};
var swiping = {x:[], y:[], lastX: 0, lastY: 0};

var text = document.getElementById("text");

var blockOnX = false;
var blockOnY = false;

var minToBlock = 15;

function handleStart(evt) {
    swipeStart = {
        x: evt.changedTouches[0].clientX,
        y: evt.changedTouches[0].clientY
    }
    blockOnX = false;
    blockOnY = false;
    div.classList.remove("original");
}

function handleMove(evt) {
    swiping.lastX = evt.changedTouches[0].clientX;
    swiping.lastY = evt.changedTouches[0].clientY;
    swiping.x.push(swiping.lastX);
    swiping.y.push(swiping.lastY);
    
    let varX = swiping.lastX - swipeStart.x;
    let varY = swiping.lastY - swipeStart.y;
    // Estado de definição do tipo de movimento
    if (!blockOnX && !blockOnY) {
        let absX = Math.abs(varX);
        let absY = Math.abs(varY);
        if (absX >= absY && absX >= minToBlock) {
            blockOnX = true;
            blockOnY = false;
        } else if (absY > absX && absY >= minToBlock) {
            blockOnX = false;
            blockOnY = true;
        }
    } else if (blockOnX) {
        div.style.transform = "translateX(" + varX + "px)";
    } else if (blockOnY) {
        div.style.transform = "translateY(" + varY + "px)";
    }
    
}

function handleEnd(evt) {
    swiped = {
        x: evt.changedTouches[0].clientX - swipeStart.x,
        y: evt.changedTouches[0].clientY - swipeStart.y
    }

    if (blockOnX) {
        if (swiped.x > div.clientWidth) {
            div.style.transform = "translateX(401px)";
        } else {
            div.style.transform = "";
        }
    } else if (blockOnY) {
        if (swiped.y > div.clientHeight) {
            div.style.transform = "translateY(401px)";
        } else {
            div.style.transform = "";
        }
    }

    div.classList.add("original");
}

function handleCancel(evt) {    

}


// Usar original position do translante quando começar o evento
