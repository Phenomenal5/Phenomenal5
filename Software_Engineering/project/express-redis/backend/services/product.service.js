//  Simulated Database

export const  getProducts = async() => {
    console.log("fetching from database .......")

    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate delay

    return [
        {id: 1, name: "laptop", price: 2000},
        {id: 2, name: "phone", price: 1000},
        {id: 3, name: "tablet", price: 1500}
    ]
}