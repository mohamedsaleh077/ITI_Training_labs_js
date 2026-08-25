const rawCourses = [
    {
        id: 1,
        title: "React and Modern ES6",
        category: "Frontend",
        price: 150,
        inStock: true,
        instractor: {
            name: "Ahmed",
            rating: 3.9
        }
    }, {
        id: 2,
        title: "Node and Express",
        category: "Backend",
        price: 80,
        inStock: true,
        instractor: {
            name: "Sara"
        }
    }, {
        title: "HTML & CSS",
        category: "Frontend",
        price: 80,
        inStock: false,
        instractor: {
            name: "Mustafa",
            rating: 4.9
        }
    }, {
        title: "Legacy PHP",
        category: "Backend",
        price: 60,
        inStock: false,
        instractor: null
    }, {
        title: "UIUX",
        category: "Design",
        price: 100,
        inStock: true,
        instractor: {
            name: "Omar",
            rating: 4.2
        }
    }
]

const rawCategories = rawCourses.map(el => el.category)
const categories = new Set(rawCategories)
console.log([...categories])

const inStock = rawCourses.filter(el => (el.inStock && el.category == "Frontend") ?? el.category)
console.log(inStock);

const viewResults = inStock.map(e => `<li><strong>${e.title}</strong> - Price: ${e.price} | Instractor: [${e.instractor?.name ?? 'None'}]</li>`)
document.body.innerHTML += viewResults

class UserAccount{
    #password
    constructor(username, password){
        this.#password = password
        this.username = username
    }

    verifyPassword(inputPassword){
        if(inputPassword !== this.#password){
            return "Wrong Password"
        }
        return "Correct Password"
    }

    static grtSecurityNotice(){
        return "hey! that is a security notice!"
    }
}

class AdminAccount extends UserAccount{
    #role
    constructor(username, password, role){
        super(username,password)
        this.#role = role
    }

    getAdminRole(){
        return this.#role
    }
}

normalUser = new UserAccount("username", "password")
console.log(normalUser.username)

console.log(normalUser.verifyPassword("password"))
console.log(normalUser.verifyPassword("passWord"))

console.log(UserAccount.grtSecurityNotice())

admin = new AdminAccount("admin-user", "admin_password", "admin")
console.log(admin.username)

console.log(admin.verifyPassword("admin_password"))
console.log(admin.verifyPassword("password"))

console.log(AdminAccount.grtSecurityNotice())

console.log(admin.getAdminRole())