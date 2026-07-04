import Redis from "ioredis";

// Redis Connection
const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
})



redis.on("error" , (err) => {
    console.log('Redis Error'+ err.message)
})

redis.on("connect" , () => {
    console.log('redis connected')
})


export default redis