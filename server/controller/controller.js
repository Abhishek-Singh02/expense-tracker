const model = require("../models/model");

//post: http://localhost:8080/api/signup
async function create_user(req, res) {
  const Create = new model.Users({
    email: req.body.email,
    password: req.body.password,
  });
  let response = await model.Users.find({ email: req.body.email }).count();
  console.log(response);
  if (response === 0) {
    await Create.save().catch((err) => res.json(`Error : ${err}`));
    return res.status(201).json("User Created");
  } else return res.status(201).json("Email exists");
}
//post: http://localhost:8080/api/signin
async function get_user(req, res) {
  let email = req.body.email;
  let pass = req.body.password;
  let data = await model.Users.find({ email: email });
  if (data.length > 0) {
    if (data[0].password === pass) return res.status(201).json(data[0]._id);
  }
  return res.json({ _id: 0 });
}
//post : http://localhost:8080/api/transactions
async function create_transactions(req, res) {
  const Create = await new model.Transactions({
    type: req.body.type,
    category: req.body.category,
    amount: req.body.amount,
    date: req.body.date,
    user: req.body.user,
  });
  await Create.save().catch((err) => res.json(`Error : ${err}`));
  return res.status(202).json("Transaction Created");
}

//get: http://localhost:8080/api/transactions
async function get_transactions(req, res) {
  const userId = req.query.user;
  const data = await model.Transactions.find({ user: userId });
  return res.status(202).json(data);
}

//delete: http://localhost:8080/api/transactions
async function delete_transactions(req, res) {
  console.log();
  if (!req.body) return res.status(404).json({ error: "Body not Found" });
  await model.Transactions.deleteOne({ _id: req.body._id }, (err) => {
    if (!err) return res.json("Record Deleted");
  })
    .clone()
    .catch((err) => res.json(`Error while deleting ${err}`));
}

module.exports = {
  get_user,
  create_user,
  create_transactions,
  get_transactions,
  delete_transactions,
};
