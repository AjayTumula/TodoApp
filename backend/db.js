// schema for the database
/*
Todo {
    title: string;
    description: string,
    completed: boolean
} 
*/

const mongoose = require("mongoose");

//url  
// .env


mongoose.connect(DBSECRET)
// schema for db
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

//model for db
const todo = mongoose.model("todos", todoSchema);
module.exports = {
    todo
}
