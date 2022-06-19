const express = require("express");
const path = require("path");
const { client } = require("../../mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  return res.sendFile(
    path.join(__dirname, "../../views/LichSuTiemChung/index.html")
  );
});

router.get("/list", (req, res) => {
  client.connect(async (err) => {
    const result = await client
      .db("VNVC")
      .collection("DKTiemChung")
      .find({})
      .toArray();

    client.close();
    return res.json(result);
  });
});

module.exports = router;
