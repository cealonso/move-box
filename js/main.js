/*

https://es.stackoverflow.com/questions/415406/porque-addeventlistener-no-funciona-con-arrow-function-pero-si-con-function-con

*/


const moveImages = () => {
    let imageLeft = document.getElementById('image-left').src;
    let imageRight = document.getElementById('image-right').src;
    let temp="";
    temp = imageLeft;
    document.getElementById('image-left').src = imageRight;
    document.getElementById('image-right').src = temp;
  }

var btn = document.getElementById('btn-move');
btn.addEventListener('click', moveImages);


/*
function moveImages() {
    var imageLeft = document.getElementById('image-left').src;
    var imageRight = document.getElementById('image-right').src;
    var temp;
    temp = imageLeft;
    document.getElementById('image-left').src = imageRight;
    document.getElementById('image-right').src = temp;
}

*/