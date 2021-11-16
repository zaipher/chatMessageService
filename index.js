const express = require('express');
const app     = express();
const port    = 8082;

const { MessagesService } = require('./services/MessagesService');

app.use(express.json());

app.get("/messages", (req, res) => {
    MessagesService.getAll((messages) => {
        res.send(messages);
    });
});

app.post("/messages", (req, res) => {
    var name    = req.body.name;
    var message = req.body.message;

    MessagesService.save(name, message, (s) => {
        if(s) {
            res.send({ message: "ok" });
        } else {
            res.statusCode = 403;
            res.send({ message: "error" });
        }
    });
});

app.post("/messages/:id/delete", (req, res) => {

    res.send({ message: "ok" });
});

app.listen(port);

