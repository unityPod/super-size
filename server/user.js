
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async function (req, res, next) {
  try {
    axios
      .get(`https://api.yelp.com/v3/businesses/search?location=Toronto`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
      .then((response) => {
        res.json(response.data.businesses);
      })
      .catch((err) => {
        console.log({ err: err });
        res.status(400).json({ err });
      });
  } catch (err) {
    res.status(400).json({ err });
  }
});

router.get("/:id", async function (req, res, next) {});

module.exports = router;