import mongoose, { mongo } from 'mongoose';
// const { Schema } = mongoose;

// schema me string likh ke aap number insert kroge to wo as a string insert hoga 
// but agr tum number ki jgh string insert kroge to validation fialed bata dega
const TodoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean
});

export const Todo = mongoose.model('Todo', TodoSchema);
