const express = require("express");
const path = require("path");
const { client } = require("../../mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../views/DangKyTiemChung/index.html"));
});

router.post("/", (req, res) => {
  const { body } = req;
  const {
    HoTen,
    NgaySinh,
    GioiTinh,
    SDT,
    TinhThanh,
    QuanHuyen,
    PhuongXa,
    SoNha,
    LoaiDV,
    TrungTam,
    NgayTiem,
    TenVaccine,
    HoTenLienHe,
    MoiQuanHe,
    SDTLienHe,
  } = body;
  console.log("body::", body);
  client.connect(async (err) => {
    const result = await client
      .db("VNVC")
      .collection("DKTiemChung")
      .insertOne({
        HoTen,
        NgaySinh,
        GioiTinh,
        SDT,
        MaKH: "",
        DiaChi: {
          TinhThanh,
          QuanHuyen,
          PhuongXa,
          SoNha,
        },
        DichVu: {
          LoaiDV: {
            VacXinLe: LoaiDV === "VacXinLe" ? TenVaccine : "",
            GoiVacXin: LoaiDV === "GoiVacXin" ? TenVaccine : "",
          },
          TrungTam,
          NgayTiem,
        },
        LienHe: {
          HoTen: HoTenLienHe,
          MoiQuanHe: MoiQuanHe,
          SDT: SDTLienHe,
        },
      });
    console.log(result);
    client.close();
    res.sendFile(path.join(__dirname, "../../views/Homepage/index.html"));
  });
});

module.exports = router;
