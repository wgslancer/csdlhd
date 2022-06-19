const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", require("./routes/Homepage/index"));
app.use("/dang-ky-tiem-chung", require("./routes/DangKyTiemChung/index"));
app.use("/lich-su-tiem-chung", require("./routes/LichSuTiemChung/index"));

app.listen(3000, () => {
  console.log(`Server running on ${3000}`);
});
