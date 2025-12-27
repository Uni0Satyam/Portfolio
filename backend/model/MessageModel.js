const { model } = require("mongoose");
const {MessageSchema} = require("../schemas/MessageSchema");

const MessageModel = new model("message", MessageSchema);

module.exports = { MessageModel }