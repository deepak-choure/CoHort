/**
 * Todo {
 * title:string;
 * description:string;
 * completed:boolean;
 * }
 */
//1. import
const mongoose = require("mongoose");
//2. connect
mongoose.connect("mongodb+srv://deepak:deepakdb@cluster0.jc0cgc4.mongodb.net/TODO_APP");
//3.define schema
const todoSchema = mongoose.Schema({
    title:String,
  description:String,
  completed:Boolean,
})
//4. create model of it 
const todo = mongoose.model("todo",todoSchema);
//use todo for all proprty access

module.exports ={
    todo
}