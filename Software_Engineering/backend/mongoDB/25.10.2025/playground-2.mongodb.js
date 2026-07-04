

// add multiple documens to the "customers" collection
// db.customers.insertMany([
//     { name: 'Alice', email: 'alice@example.com',  city: 'New York', age: 30 },
//     { name: 'Bob', email: 'bob@example.com', city: 'Los Angeles', age: 25 },
//     { name: 'Charlie', email: 'charlie@example.com', city: 'Chicago', age: 35 }
// ])


// add multiple documens to the "products" collection
// db.products.insertMany([
//     { title: 'Laptop', price: 1200, category: 'Electronics', stock: 50 },
//     { title: 'Smartphone', price: 800, category: 'Electronics', stock: 100 },
//     { title: 'Desk Chair', price: 150, category: 'Furniture', stock: 200 }
// ])


// add multiple documens to the "orders" collection
// db.orders.insertMany([
//   {
//     date: new Date("2025-10-01"),
//     customer_id: "6975726b2c0d7e0051e2865c",
//     items: [{ product_id: "6975738325ff9e1aaebaa478", quantity: 1 }, { product_id: "6975738325ff9e1aaebaa476", quantity: 2 }],
//     total: 1250,
//   },
//   {
//     date: new Date("2025-10-02"),
//     customer_id: "6975726b2c0d7e0051e2865e",
//     items: [{ product_id: "6975738325ff9e1aaebaa477", quantity: 2 }],
//     total: 1600,
//   },
//   {
//     date: new Date("2025-10-03"),
//     customer_id: "6975726b2c0d7e0051e2865d",
//     items: [{ product_id: "6975738325ff9e1aaebaa476", quantity: 1 }, { product_id: "6975738325ff9e1aaebaa478", quantity: 1 }],
//     total: 1350,
//   },
// ]);

// db.products.find()
// db.customers.find()


db.orders.aggregate([
    {
        $lookup: {
          from: "customers",
          localField: "customer_id",
          foreignField: "_id",
          as: "customer_info"
        }
    },
    { $unwind: "$customer_info" }
])