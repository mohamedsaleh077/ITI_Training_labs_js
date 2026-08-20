// Task 1

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
    } else if (ptr + ptr_move < 0) {
        ptr = images_list.length - 1
    } else {
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

stop_btn.addEventListener("click", function () {
    clearInterval(slide_show)
    slide_show = null;
})

// Task 2
var add_btn = document.getElementById("add")
var name_input = document.getElementById("name")
var age_input = document.getElementById("age")
var crud_table = document.getElementById("crud")

var Name, age, item = 0, edit_mode = false
add_btn.addEventListener("click", function () {
    Name = document.getElementById("name").value
    age = document.getElementById("age").value
    if (!edit_mode) {
        crud_table.innerHTML += `
        <tr id="item${item}">
            <td id="item${item}_n">${Name}</td>
            <td id="item${item}_a">${age}</td>
            <td>
                <button onclick="edit('item${item}')">Edit</button>
                <button onclick="Delete('item${item}')">Delete</button>
            </td>
        </tr>`
        item++;
        name_input.value = ""
        age_input.value = ""
    }else{
        var e_name = document.getElementById(edit_mode + "_n")
        var e_age = document.getElementById(edit_mode + "_a")
        e_name.innerText = Name
        e_age.innerText = age
        edit_mode = false
        add_btn.value = "Add"
        name_input.value = ""
        age_input.value = ""

    }
})

function edit(tr_id) {
    edit_mode = tr_id;
    add_btn.value = "Edit"
    
    name_input.value = document.getElementById(tr_id + "_n").innerText
    age_input.value = document.getElementById(tr_id + "_a").innerText
}

function Delete(tr_id){
    document.getElementById(tr_id).remove()
}