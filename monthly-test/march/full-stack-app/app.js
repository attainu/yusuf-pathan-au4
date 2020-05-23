const express = require("express");
const app = express();
const db = require("./db");
// const port = 5000;
const cors = require("cors");
const Table = require("./Models/Table"); // model for table api
const Waiter = require("./Models/Waiter");
const Menu = require("./Models/Menu");
const Bill = require("./Models/Bill");

//middleware
app.use(cors());
app.use(express.json());

//tables APIs
app.post("/tables", async(req, res) => {
    try {
        const { body } = req;
        let table = await Table.create({id:body.id, strength: body.strength, name: body.name, floor_number: body.floor_number});
        console.log("table", table);
        res.send(table);
    } catch (error) {
        console.log(error);
    }
})

app.get("/tables", async(req, res) => {
    try {
        let tables = await Table.findAll();
        console.log(tables);
        res.send(tables);
    } catch (error) {
        console.log(error);
    }
})

app.put("/tables/:id", async(req, res) => {
    try {
        const { body, params } = req;
        let table = await Table.update({id: body.id, strength: body.strength, name: body.name, floor_number: body.floor_number}, {where: {id: params.id}})
        res.send(table);
    } catch (error) {
        console.log(error);
    }
})

app.delete("/tables/:ic", async(req, res) => {
    try {
        const { params } = req;
        await Table.destroy({where: { id: params.id }});
        res.send("Deleted Successfully");
    } catch (error) {
        console.log(error);
    }
})

//Waiters
app.post("/waiters", async(req, res) => {
    try {
        const { body } = req;
        let waiter = await Waiter.create({id: body.id, name: body.name, age: body.age, mobile: body.mobile, ratings: body.ratings, experience: body.experience});
        console.log("waiter", waiter);
        res.send(waiter);
    } catch (error) {
        console.log(error);
    }
})

app.get("/waiters", async(req, res) => {
    try {
        let waiters = await Waiter.findAll();
        console.log(waiters);
        res.send(waiters);
    } catch (error) {
        console.log(error);
    }
})

app.put("/waiters/:id", async(req, res) => {
    try {
        const { body, params } = req;
        let waiter = await Waiter.update({id: body.id, name: body.name, age: body.age, mobile: body.mobile, ratings: body.ratings, experience: body.experience}, {where: {id: params.id}})
        res.send(waiter);
    } catch (error) {
        console.log(error);
    }
})

app.delete("/waiters/:id", async(req, res) => {
    try {
        const { params } = req;
        await Waiter.destroy({where: { id: params.id }});
        res.send("Deleted Successfully");
    } catch (error) {
        console.log(error);
    }
})

//Menus
app.post("/menus", async(req, res) => {
    try {
        const { body } = req;
        let menu = await Menu.create({id: body.id, item: body.item, cuisine: body.cuisine, veg: body.veg, price: body.price});
        console.log("menu", menu);
        res.send(menu);
    } catch (error) {
        console.log(error);
    }
})

app.get("/menus", async(req, res) => {
    try {
        let menus = await Menu.findAll();
        console.log(menus);
        res.send(menus);
    } catch (error) {
        console.log(error);
    }
})

app.put("/menus/:id", async(req, res) => {
    try {
        const { body, params } = req;
        let menu = await Menu.update({id: body.id, item: body.item, cuisine: body.cuisine, veg: body.veg, price: body.price}, {where: {id: params.id}})
        res.send(menu);
    } catch (error) {
        console.log(error);
    }
})

app.delete("/menus/:id", async(req, res) => {
    try {
        const { params } = req;
        await Menu.destroy({where: { id: params.id }});
        res.send("Deleted Successfully");
    } catch (error) {
        console.log(error);
    }
})

//Bills
app.post("/bills", async(req, res) => {
    try {
        const { body } = req;
        let bill = await Bill.create({id: body.id, user_name: body.user_name, user_mobile: body.user_mobile, items: body.items, total: body.total, payment: body.payment, waiter_id: body.waiter_id, table_id: body.table_id});
        console.log("bill", bill);
        res.send(bill);
    } catch (error) {
        console.log(error);
    }
})

app.get("/bills", async(req, res) => {
    try {
        let bills = await Bill.findAll();
        console.log(bills);
        res.send(bills);
    } catch (error) {
        console.log(error);
    }
})

app.put("/bills/:id", async(req, res) => {
    try {
        const { body, params } = req;
        let bill = await Bill.update({id: body.id, user_name: body.user_name, user_mobile: body.user_mobile, items: body.items, total: body.total, payment: body.payment, waiter_id: body.waiter_id, table_id: body.table_id}, {where: {id: params.id}})
        res.send(bill);
    } catch (error) {
        console.log(error);
    }
})

app.delete("/bills/:id", async(req, res) => {
    try {
        const { params } = req;
        await Bill.destroy({where: { id: params.id }});
        res.send("Deleted Successfully");
    } catch (error) {
        console.log(error);
    }
})

module.exports = app;