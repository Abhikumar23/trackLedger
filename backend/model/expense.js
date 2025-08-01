const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  itemName: { type: String, required: true },
  friends: [{ type: String }],
  amountPerPerson: { type: Number },
  date: { type: Date, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model("Expense", expenseSchema);
