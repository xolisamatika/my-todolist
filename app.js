const express = require('express');
const bodyParser = require('body-parser');
var validator  = require('express-validator');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.use(validator());

let todolist = [];

/* The to do list and the form are displayed */
app.get('/todo', function(req, res) {
    res.render('todo.ejs', { todolist});
})

/* Adding an item to the to do list */
.post('/todo/add/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
        todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
})

/* Deletes an item from the to do list */
.get('/todo/delete/:id', function(req, res) {
    if (req.params.id != '') {
        todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

/* Get an item by id from the to do list */
.get('/todo/edit/:id', function(req, res) {
    if (req.params.id != '') {
        todo = todolist[req.params.id];
        todoItem = {id : req.params.id, value: todo};
        res.render('edit-todo.ejs',  {todo: todoItem});
    }
})

/* Updating an item in the to do list */
.post('/todo/update/:id', urlencodedParser, function(req, res) {
    if (req.body.todo != '' && req.params.id != '') {
        todolist[req.params.id] = req.body.todo;
    }
    res.redirect('/todo');
})
.use(function(req, res, next) {
    for (var item in req.body) {
      req.sanitize(item).escape();
    }
    next();
  })
/* Redirects to the to do list if the page requested is not found */
.use(function(req, res, next){
    res.redirect('/todo');
})

.listen(8080);
