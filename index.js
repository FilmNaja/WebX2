const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const flash = require('connect-flash');
const router = express.Router();

mongoose.connect('mongodb+srv://Admin:Admin1234@cluster0.5uomkwx.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

const indexController = require('./controllers/indexController');
const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const storeController = require('./controllers/storeUserController')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(flash());
app.set('view engine', 'ejs');

app.get('/', indexController);
app.get('/login', loginController);
app.get('/register', registerController);
app.get('/user/register', storeController)

// Define your routes using the router object
router.get('/', (req, res) => {
    res.render('index'); // Example route
});

// Use the router with a specific prefix (optional)
app.use('/some-prefix', router);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
module.exports = router;
