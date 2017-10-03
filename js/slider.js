/**
 * Created by katemrrr on 03.10.17.
 */

var currentFrame = 0;
var framesList = document.getElementsByClassName('slider__content--frame');

setActiveFrame(currentFrame);

function setActiveFrame(number) {
    if (number >= 0 && number < framesList.length){
        framesList[currentFrame].classList.remove('slider__content--frame_active');
        framesList[number].classList.add('slider__content--frame_active');
        currentFrame = number;
    }
}

function prevFrame() {
    var prev = currentFrame == 0 ? framesList.length - 1 : currentFrame - 1;
    setActiveFrame(prev);
}

function nextFrame() {
    var next = currentFrame == framesList.length - 1 ? 0 : currentFrame + 1;
    setActiveFrame(next);
}

var leftArrow = document.getElementById('arrow-left');
var rightArrow = document.getElementById('arrow-right');

leftArrow.onclick = prevFrame;
rightArrow.onclick = nextFrame;