const mongoose = require('mongoose');
const schema = mongoose.schema;

const userSchema = new Schema({
    id: Number,
    name: String,
});

const User= mongoose.model('User', userSchema);

module.export = User;