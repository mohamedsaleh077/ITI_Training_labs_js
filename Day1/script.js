// Task 1
let firstName, lastName, confirm, address;

while(true){
    firstName = prompt("Your First Name: ");
    lastName = prompt("Your Last Name: ");
    
    if(confirm("confirm " + firstName + " " + lastName + "?")){
        break;
    }
}

address = prompt("Your Address? ");
document.writeln("<h2> Welcome " + firstName + " " + lastName + " in our Website!</h2><p>your address is: " + address + "</p>");

// Task 2
document.writeln("<hr><br>");
document.writeln("<h2>Heading</h2><hr>");

for(let i = 1; i <= 6; i++){
    document.writeln("<h" + i + ">This is header number " + i + "</h" + i + ">");
}

// Task 3
/*
    y is not defined
*/

// Task 4
let Name, birth, age, stop, count;

count = 0;
while(true){
    count++;
    stop = true;
    Name = prompt("Your Name: ");
    birth = prompt("Your birth year: ");
    
    if(!isNaN(Name)){
        alert("write text only in your name");
        stop = false;
    }
    if(!(isNaN(birth) && Number(birth) < 2010)){
        alert("write a valid year under 2010");
        stop = false;
    }
    if(stop){
        age = 2026 - birth;

        document.writeln("<hr>");
        document.writeln("<p>Name: " + Name + "</p>");
        document.writeln("<p>Brith year: " + birth + "</p>");
        document.writeln("<p>Age: " + age + "</p>"); 
        break;
    }
    if(count === 3 ){
        alert("Access Denined!");
        break;
    }
}
