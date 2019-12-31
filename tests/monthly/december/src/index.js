const express = require(`express`);
const app = express();
const exphbs = require(`express-handlebars`);
const PORT = 9090;
const db = require(`./models/index.js`)

app.use(express.json());
app.use(express.urlencoded());
app.use('/public',express.static('public'));

app.engine(`.handlebars`, exphbs());
app.set(`view engine`, `.handlebars`);

const controllers = require('./controllers/index.js');

app.get(`/cart`, (req, res) => {
    res.render(`cart`);
})
app.post(`/cart/add`, controllers.Controller.create);
app.get(`/cart/retrieve`, controllers.Controller.retrieve);
app.put(`/cart/update`, controllers.Controller.retrieve);
app.get(`/cart/remove`, controllers.Controller.remove);

db.connect()
.then(() => {
    app.listen(PORT, function() {
        console.log(`Application has started and running on port: `, PORT)
    }).on(`error`, (error) => {
        console.log(`Unable to start app. Error >>>>`,error);
    });
})
.catch((error) => {
    console.log(`Failed to setup a connection with database`, error);
})