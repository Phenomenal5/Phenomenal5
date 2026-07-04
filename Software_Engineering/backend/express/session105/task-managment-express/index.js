import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true})) // SSR no json format

// fake database
let tasks = [
    { id: 1, title: "Learn SSR(Server side Rendering", done: false },
    { id: 2, title: "Finish Express & Ejs lesson", done: false },
    { id: 3, title: "Learning the best way", done: false },
];


// Get all task
// Route Express (API) : HTTP METHOD , PATH , HANDLER (CALLBACK FUNCTION)
app.get("/", (req, res) => {
    console.log(tasks)
    res.render("index", { tasks });
})

app.get("/add" , (req, res) => {
    res.render('add')
})

// Create a new Task
app.post("/add", (req, res) => {
    const { title } = req.body
    const newTask = {
        id: tasks.length + 1,
        title,
        done: false
    }

    tasks.push(newTask)
    res.redirect('/')
})

// Mark task as done
app.post("/done/:id", (req, res) => {
    const taskId = Number(req.params.id)
    const exisitingTask = tasks.find(task => task.id === taskId)
    if(exisitingTask) exisitingTask.done = !exisitingTask.done;
    res.redirect('/')
})


// Delete task
app.post("/delete/:id" , (req, res) => {
    const taskId = Number(req.params.id)
    tasks = tasks.filter(task => task.id !== taskId)
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})