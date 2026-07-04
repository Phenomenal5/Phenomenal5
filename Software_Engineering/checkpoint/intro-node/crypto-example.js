// CRYPTO MODULE (HASHING)

const crypto = require("crypto")


const password = "SuperSecret123"


const hash = crypto.createHash("sha256").update(password).digest("hex")


console.log("original password: ", password)

console.log("hashed password: ", hash)