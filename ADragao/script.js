let originX = null;
let originY = null;
let offsetX = 0;
let offsetY = 0;
let dragStarted = false;

function onKeyDown(event) {
  originX = event.clientX;
  originY = event.clientY;
  dragStarted = true;
  event.currentTarget.setPointerCapture(event.pointerId);
}

function onKeyPress(event) {
  if (!dragStarted) {
    return;
  }
  event.preventDefault();
  if (event.key==="ArrowRight") {
    const deltaX = 20 - originX;
    const translateX = offsetX + deltaX;
  }
  if (event.key==="ArrowLeft") {
    const deltaX = 20 - originX;
    const translateX = offsetX - deltaX;
  }
  if (event.key==="ArrowUp") {
    const deltaY = 20 - originY;
    const translateY = offsetY - deltaY;
  }
  if (event.key==="ArrowDown") {
    const deltaY = 20 - originY;
    const translateY = offsetY + deltaY;
  }
  event.currentTarget.style.transform = 'translate(' +
    translateX + 'px, ' + translateY + 'px)';
}

function onKeyUp(event) {
  dragStarted = false;
  offsetX += event.clientX - originX;
  offsetY += event.clientY - originY;
}

const dragon = document.querySelector('img');
//dragon.addEventListener('pointerdown', onDragStart);
//dragon.addEventListener('pointerup', onDragEnd);
//dragon.addEventListener('pointermove', onDragMove);
document.addEventListener('keyup', onKeyUp);
document.addEventListener('keypress', onKeyPress);
document.addEventListener('keydown', onKeyDown);
