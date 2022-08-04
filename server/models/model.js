const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//user model
const user_model = new Schema({
  email: String,
  password: String,
});

//transactions
const transaction_model = new Schema({
  type: String,
  category: String,
  amount: Number,
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Users = mongoose.model("User", user_model);
const Transactions = mongoose.model("Transaction", transaction_model);

exports.default = Transactions;
module.exports = {
  Users,
  Transactions,
};
