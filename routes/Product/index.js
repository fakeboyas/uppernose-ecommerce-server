const express = require("express");
const router = express.Router();

router.get("/", require("./controller").getProduct);
router.post("/upload", require("./controller").addProduct);
router.delete("/remove/:id", require("./controller").deleteProduct);
router.put("/update/:id", require("./controller").updateProduct);

module.exports = router;
