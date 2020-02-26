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

module.exports = router;
