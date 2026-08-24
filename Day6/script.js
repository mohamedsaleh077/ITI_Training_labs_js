const generateInvoice = (productName, price, taxRate = 0.14, discount = 0) => {
    return `Product: ${productName}
    Price: ${price}
    Tax:${taxRate}
    Discount: ${discount}`
}

console.log(generateInvoice("Apple", 15))
console.log(generateInvoice("Orange", 13.5, 0.2))
console.log(generateInvoice("Banana", 13.5, 0.3, 10))

const initialProfile = {
    id: 101,
    username: "Karim",
    role: "Viewer",
    prefrences: ["Email", "SMS"]
}

const {username: clientName, role} = initialProfile
const updatedProfile = {...initialProfile}
updatedProfile.role = "Admin"
updatedProfile.prefrences.push("Push Notifications")

console.log(initialProfile)
console.log(updatedProfile)