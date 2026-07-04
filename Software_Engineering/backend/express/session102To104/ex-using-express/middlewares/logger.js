export const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next() // COntinue to next the next midddleware / route
}