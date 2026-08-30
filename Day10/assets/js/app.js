const canvas = document.getElementById("chart")
const chart = canvas.getContext("2d");

const input_x = document.getElementById("x")
const input_y = document.getElementById("y")
const input_w = document.getElementById("width")
const input_h = document.getElementById("hieght")
const input_c = document.getElementById("color")

const btn_draw = document.getElementById("draw")
const btn_clear = document.getElementById("clear")

chart.fillStyle = 'yellow'
chart.fillRect(10, 100, 50, 400);
chart.fillStyle = 'purple'
chart.fillRect(70, 100, 50, 400);
chart.fillStyle = 'red'
chart.fillRect(130, 100, 50, 400);
chart.fillStyle = 'green'
chart.fillRect(190, 100, 50, 400);
chart.fillStyle = 'blue'
chart.fillRect(250, 100, 50, 400);
chart.fillStyle = 'orange'
chart.fillRect(310, 100, 50, 400);

function clear_canva(){
    chart.clearRect(0, 0, canvas.width, canvas.height);
}

btn_clear.addEventListener('click', () => {
    clear_canva()
})

btn_draw.addEventListener('click', () => {
    chart.fillStyle = input_c.value
    const x = Number(input_x.value);
    const y = Number(input_y.value);
    const w = Number(input_w.value);
    const h = Number(input_h.value);
    chart.fillRect(x, y, w, h);
})