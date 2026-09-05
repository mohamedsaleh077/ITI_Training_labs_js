const error_area = document.getElementById("errors")
const email_login = document.getElementById("login_email")
const password_login = document.getElementById("login_password")
const new_username = document.getElementById("new_username")
const new_email = document.getElementById("new_email")
const new_password = document.getElementById("new_password")

function init_user() {
    const new_user = { username: "", email: "", password: "" }

    if (!new_username.value) return null;
    new_user.username = new_username.value

    if (!new_email.value) return null;
    new_user.email = new_email.value

    if (!new_password.value) return null;
    new_user.password = new_password.value

    return new_user
}

function signup_btn() {
    const create_user = init_user()
    if (create_user === null) {
        error_area.innerText = "Fill all fields correctly"
    } else {
        add_user(create_user)
        window.location.href = "index.html"
    }
}

function login_btn() {
    const result = login()
    if (result === null) {
        error_area.innerText = "Fill all fields correctly"
    } else if (!result) {
        error_area.innerText = "Invalid email or password"
    } else {
        localStorage.setItem("email", email_login.value)
        window.location.href = "index.html"
    }
}

function login() {
    if (!email_login.value) return null;
    if (!password_login.value) return null;

    init_localStorage()
    const db = JSON.parse(localStorage.getItem("users"))
    const user = db.users.find(e => e.email === email_login.value)

    if (!user) return false;
    return user.password === password_login.value
}

function init_localStorage() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify({ users: [] }))
    }
}

function add_user(new_user_obj) {
    init_localStorage()
    const db = JSON.parse(localStorage.getItem("users"))
    const exists = db.users.find(u => u.email === new_user_obj.email)
    if (exists) {
        error_area.innerText = "Email already registered"
        return
    }
    db.users.push(new_user_obj)
    localStorage.setItem("users", JSON.stringify(db))
}

const home_username = document.getElementById("auth_user")
if (home_username) {
    home_username.innerText = localStorage.getItem("email")
}

const color_toggle = document.getElementById("color_toggle")
if (color_toggle) {
    color_toggle.addEventListener('click', () => {
        if (color_toggle.innerText == "Light Mode") {
            color_toggle.innerText = "Dark Mode"
        } else if (color_toggle.innerText == "Dark Mode") {
            color_toggle.innerText = "Light Mode"
        }
    })
}

let allProducts = []

function loadProducts() {
    fetch("https://dummyjson.com/products?limit=100&skip=0")
        .then(res => res.json())
        .then(data => {
            allProducts = data.products
            renderCards(allProducts)
        })
}

function renderCards(products) {
    const grid = document.getElementById("product-grid")
    const count = document.getElementById("result-count")

    if (!products.length) {
        grid.innerHTML = `<div id="no-results">No products found.</div>`
        count.textContent = "0 results"
        return
    }

    count.textContent = products.length + " products"
    grid.innerHTML = products.map(p => `
        <div class="card">
            <img class="card-img" src="${p.thumbnail}" alt="${p.title}" loading="lazy">
            <div class="card-body">
                <div class="card-category">${p.category}</div>
                <div class="card-title">${p.title}</div>
                <div class="card-footer">
                    <span class="card-price">$${p.price.toFixed(2)}</span>
                    <span class="card-rating">${p.rating.toFixed(1)} stars</span>
                </div>
            </div>
        </div>
    `).join("")
}

const searchInput = document.getElementById("search")
function search_product() {
    const q = searchInput.value.trim().toLowerCase()
    if (!q) { renderCards(allProducts); return }
    const filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.brand && p.brand.toLowerCase().includes(q))
    )
    renderCards(filtered)
}

loadProducts()

const logout = document.getElementById("logout")
if(logout){
    logout.addEventListener('click', () => {
        localStorage.removeItem("email")
        window.history.go(0)
    })
}