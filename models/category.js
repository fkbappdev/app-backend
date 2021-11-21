const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const schema = mongoose.Schema({
  category: String,
  icon: String,
  added_time: Number,
});

schema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Category", schema);
