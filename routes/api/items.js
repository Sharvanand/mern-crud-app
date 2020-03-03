const express = require("express");
const router = require("express").Router();

//ITEM MODEL..
const Item = require("../../models/Item");

//@ROUTE GET /api/items
//@DECS TO GET ALL ITEMS
//@ACCESS PUBLIC
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//@ROUTE POST /api/items
//@DECS TO POST THE ITEM
//@ACCESS PUBLIC
router.post("/", (req, res) => {
  const newItem = new Item({
    employee: req.body.employee,
    position: req.body.position,
    salary: req.body.salary
  });
  newItem.save().then(item => res.json(item));
});

//@ROUTE UPDATE /api/items
//@DECS TO UPDATE AN ITEM
//@ACCESS PUBLIC
router.put("/:id", (req, res) => {
  Item.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedItem => res.json(updatedItem))
    .catch(err => res.json(err));
});

//@ROUTE DELETE /api/items
//@DECS TO DELETE AN ITEM
//@ACCESS PUBLIC
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.json({ success: false }));
});

module.exports = router;
