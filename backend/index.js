const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
const port = 3000;


app.use(express.json());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload) {
        res.send(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    //put it in mongodb
   await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    res.json({
        msg: 'Todo created'
    })
})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload) {
        res.send(411).jaon({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //db
    await todo.update({
        _id: req.body.id
    }, {
        completed: true,
    })
    res.json({
        msg: "Todo marked as completed"
    })
    
})

app.listen(port, () => {
    console.log(`App is litening on port ${port}`)
})