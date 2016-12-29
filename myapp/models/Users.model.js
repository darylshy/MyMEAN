'use strict';
//store schema
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create new schema instance
let UsersSchema = new Schema({    // pass in schema object
    user: Schema.Types.ObjectId,
    firstname:"String",
    lastname:"String",
    street:"String",
    streetnumber:"Number",
    city:"String",
    state:"String",
    zip:"Number"

});

//export model
module.exports = mongoose.model('User', UsersSchema);