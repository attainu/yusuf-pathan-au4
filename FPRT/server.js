const express = require('express');
const app = express();
const Port = 5000;
var cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/category', require('./Controller/Category'));
app.use('/card', require('./Controller/Card'));

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
