import { name } from 'ejs';
import express from 'express';
import { logger } from './middlewares/logger.js';

const app = express();
const PORT = process.env.PORT;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(logger)

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Welcome to the Home Page!' , name: "john Doe"});
})


app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page', message: 'Welcome to the about Page!' , name: "Jimba Abdulahi"});
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});