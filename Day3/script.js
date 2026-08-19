/*
    1- Make a button (Start clock), that showing alert saying “Clock Started” and displays  clock every sceond with current time in local format 
    2- Make a button that when press it create new window linkedin.
    3- Make a link that on its onClick event opens new advertising window after 3 seconds, and write long paragraphs on it. Also, make another link that closes this page. (Note that the browser may block the opening of the new window; make sure that you allow this page to open popups in your browser). 
*/
// Task 1
function startClock(){
    alert("Clock Started");
    setInterval(function(){
        var now = new Date;
        document.getElementById("clock").innerText = now.toLocaleTimeString();
    }, 1000);
}

// Task 2
function openLinkedin(){
    window.open("https://linkedin.com", "", "width=500, highet=700").focus();
}

// Task 3
var win;
function openAd(){
    setTimeout(function(){
        win = window.open("", "", "width=640, highet=480");
        win.focus();
        win.document.writeln("<button onclick='window.close()'>Close!</button><br>");
        win.document.writeln("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis repellat, ipsum possimus facere architecto voluptatum! Id, minima modi libero quis incidunt odit repellendus voluptate doloribus laboriosam hic deserunt aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis repellat, ipsum possimus facere architecto voluptatum! Id, minima modi libero quis incidunt odit repellendus voluptate doloribus laboriosam hic deserunt aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis repellat, ipsum possimus facere architecto voluptatum! Id, minima modi libero quis incidunt odit repellendus voluptate doloribus laboriosam hic deserunt aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis repellat, ipsum possimus facere architecto voluptatum! Id, minima modi libero quis incidunt odit repellendus voluptate doloribus laboriosam hic deserunt aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis repellat, ipsum possimus facere architecto voluptatum! Id, minima modi libero quis incidunt odit repellendus voluptate doloribus laboriosam hic deserunt aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis repellat, ipsum possimus facere architecto voluptatum! Id, minima modi libero quis incidunt odit repellendus voluptate doloribus laboriosam hic deserunt aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis repellat, ipsum possimus facere architecto voluptatum! Id, minima modi libero quis incidunt odit repellendus voluptate doloribus laboriosam hic deserunt aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perferendis repellat, ipsum possimus facere architecto voluptatum! Id, minima modi libero quis incidunt odit repellendus voluptate doloribus laboriosam hic deserunt aperiam?");
    }, 3000);
}
