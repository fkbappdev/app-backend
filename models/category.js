const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const schema = mongoose.Schema({
  key: Number,
  category: String,
});

schema.plugin(AutoIncrement, { id: "key_seq", inc_field: "key" });
module.exports = mongoose.model("Category", schema);
