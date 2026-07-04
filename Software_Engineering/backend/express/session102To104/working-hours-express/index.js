import express from 'express';
import { checkWorkingHours } from './middlewares/workingHours.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Apply middleware globaly

app.use(checkWorkingHours)







app.get('/', (req, res) => {
    res.render('home')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})
app.get('/service', (req, res) => {
    res.render('service')
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});