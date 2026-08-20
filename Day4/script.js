var images_list = ['1.jpg', '2.webp', '3.png', '4.png', '5.jpg', '6.jpeg', '7.jpg'];

var next_btn = document.getElementById("next")
var previous_btn = document.getElementById("previous")
var slide_btn = document.getElementById("slide")
var stop_btn = document.getElementById("stop")
var image = document.getElementById("image")

var ptr = 0;
var slide_show;

function changeImage(ptr_move = 0) {
    if (ptr + ptr_move > images_list.length - 1) {
        ptr = 0
    } else if( ptr+ptr_move < 0){
        ptr = images_list.length - 1
    }else {
        ptr += ptr_move
    }
    image.src = `./imgs/${images_list[ptr]}`;
}

next_btn.addEventListener("click", function () {
    changeImage(1)
});

previous_btn.addEventListener("click", function () {
    changeImage(-1)
})

slide_btn.addEventListener("click", function () {
    if (!slide_show) {
        slide_show = setInterval(function () {
            changeImage(1)
        }, 2000)
        changeImage(1)
    }
})

stop_btn.addEventListener("click", function(){
    clearInterval(slide_show)
    slide_show = null;
})