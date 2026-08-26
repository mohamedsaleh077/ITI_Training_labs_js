export async function getUsers() {
    try {
        const request = await fetch("https://dummyjson.com/users")
        if (!request.ok){
            throw new Error(`something went wrong ${request.status}`)
        }
        const data = await request.json()
        return await data
    } catch (error) {
        console.warn("Error: " + error)
        return null
    }
}