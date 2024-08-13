const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const port = 3000;


app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload) {
        res.send(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    //put it in mongodb
})

app.get('/todos', (req, res) => {
    
})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload) {
        res.send(411).jaon({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //put in mongo db
})

app.listen(port, () => {
    console.log(`App is litening on port ${port}`)
})