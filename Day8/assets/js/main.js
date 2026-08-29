import { getUsers  } from "./api.js";

const loadBtn = document.getElementById("load")
const usersDiv = document.getElementById("users")

loadBtn.addEventListener("click", async () => {
    const result = await getUsers()
    if(!result){
        usersDiv.innerText = "Something went wrong!"
    }else{
        let usersArray = result.users
        usersDiv.innerHTML += usersArray.map((e) => {
            return `<li>Name: ${e.firstName} ${e.maidenName} ${e.lastName}</li><li>Email: ${e.email}</li><li>City: ${e.address?.city ?? "none"}</li>`
        }).join("<br>")
    }
})