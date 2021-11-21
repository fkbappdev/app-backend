const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const schema = mongoose.Schema({
  question: String,
  answers: String,
  type: Number,
  category: Number,
  difficulty: Number,
  key: Number,
});

schema.plugin(AutoIncrement, { id: "key_seq", inc_field: "key" });
module.exports = mongoose.model("Question", schema);
