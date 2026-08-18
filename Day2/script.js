// Task 1
document.writeln("<h2>Task1 Sorting</h2><hr>");

var user_input = prompt("insert an array of nummbers between 1 to 10 seprated with spaces");
// var user_input = "1 8 3 5 3 9 10 2 4 5 0"
// var user_array = user_input.split(" ");

var user_array_desc = user_input.split(" ").sort(function(a,b){
    return Number(a) - Number(b);
});
var user_array_asc = user_input.split(" ").sort(function(a,b){
    return Number(b) - Number(a);
});

document.writeln(`<p>your values: ${user_input.split(" ").join(" ,")}</p>`);
document.writeln(`<p>your values sorted desc: ${user_array_desc.join(" ,")}</p>`);
document.writeln(`<p>your values sorted asc: ${user_array_asc.join(" ,")}</p>`);

// Task 2
var txt = prompt("is that a palindrome?");
var part1 = txt.toLowerCase().substring(0, parseInt(txt.length/2));
// var part2 = txt.toLowerCase().substring(Math.ceil(txt.length/2), Math.ceil(txt.length));
var part2Proc = txt.toLowerCase().substring(Math.ceil(txt.length/2), Math.ceil(txt.length)).split("").reverse().join("");

document.writeln(`<hr>input: ${txt}<br>`);

if(part1 == part2Proc){
    document.writeln(`output: yes paindrome<br>`);
}else{
    document.writeln(`output: no palindrome<br>`);
}

// Task 3
var user_index = Number(prompt("what the most index you hate? "));
var user_hated_array = prompt("insert the array with white spaces").split(" ");
document.writeln(`<hr>hated index: ${user_index}<br>`);
document.writeln(`input array: ${user_hated_array.join(" ,")}<br>`);

user_hated_array.splice(user_index, 1);
document.writeln(`output: ${user_hated_array.join(" ,")}<br>`);

// Task 4
var randNum = Math.round(Math.random() * 10);
var user_guess = prompt("guess number between 1 and 10");
if(user_guess == randNum){
    alert("WINNER")
}else{
    alert("LOSER")
}