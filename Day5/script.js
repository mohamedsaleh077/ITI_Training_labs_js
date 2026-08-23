// Task 1
var gallery = document.getElementById("galary");
var viewPort = document.getElementById("view")
gallery.addEventListener("mouseover", (e) =>{
    if(e.target.tagName == "IMG"){
        var selected_image = e.target;
        viewPort.style.background = `url('${selected_image.src}') center / cover no-repeat`
    }
})

gallery.addEventListener("mouseout", (e) =>{
    viewPort.style.background = ``
})

var quote_id = 1
var quote_place = document.getElementById("quote")
var auther = document.getElementById("author")

async function getQuote() {
    try {
        const response = await fetch(`https://dummyjson.com/quotes/${quote_id}`);
    
        if (!response.ok) {
            quote_place.innerText = `HTTP error! status: ${response.status}`
        }
    
        const data = await response.json();
        quote_place.innerText = data.quote
        auther.innerText = data.author
    } catch (error) {
        quote_place.innerText = `Error! ${error}`
    }
}

var next = document.getElementById("next")
var previous = document.getElementById("previous")

next.addEventListener("click", (e) => {
    quote_id++;
    getQuote();
})


previous.addEventListener("click", (e) => {
    quote_id--;
    if(quote_id <= 0){
        quote_id =1
    }
    getQuote();
})