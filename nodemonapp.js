var express = require('express');
var bodyParser = require('body-parser');
var _ = require("lodash");
var config = require("config");
var app = express();
app.listen(config.port);
app.use(bodyParser.json());

function validationMiddleware(req, res, next) {
    if(_.isEmpty(req.body.task)) {
        return res.status(422).send("Task is empty");
    }
    return next();
}

var taskList = [];
app.get('/list', function(req, res) {
    res.send(taskList);
})

app.get('/task', function(req, res) {
    res.send({"task":"Hello World"});
})

app.post('/task',[validationMiddleware, function (req, res) {
    var task = req.body.task;
    taskList.push(req.body.task);
    res.send(taskList);
}])

app.put('/task/:task_index',[validationMiddleware,  function (req, res) {
    var taskIndex = req.params.task_index;
    taskList[taskIndex] = req.body.task;
    res.send(taskList);
}])

app.delete('/task/:task_index', function (req, res) {
    var taskIndex = req.params.task_index;
    taskList.splice(taskIndex, 1);
    res.send(taskList);
})