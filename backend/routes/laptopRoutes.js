const express = require("express");
const {
  addLaptop,
  getLaptops,
  updateLaptop,
  deleteLaptop,
} = require("../controllers/laptopController");

const router = express.Router();

router.post("/", addLaptop);
router.get("/", getLaptops);
router.put("/:id", updateLaptop);
router.delete("/:id", deleteLaptop);

module.exports = router;
